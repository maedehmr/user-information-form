import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PushNotificationManager from "@/app/(home)/_components/push-notification-manager/push-notification-manager";
import {
  subscribeUser,
  unsubscribeUser,
  sendNotification,
} from "@/app/actions";
import { urlBase64ToUint8Array } from "@/utils/base64-to-uint8";

// Mocking the necessary functions
jest.mock("../app/actions", () => ({
  subscribeUser: jest.fn(),
  unsubscribeUser: jest.fn(),
  sendNotification: jest.fn(),
}));

jest.mock("../utils/base64-to-uint8", () => ({
  urlBase64ToUint8Array: jest.fn(),
}));

describe("PushNotificationManager", () => {
  beforeEach(() => {
    // Mocking PushManager if needed
    (global.window as any).PushManager = {
      ...jest.fn(),
      supportedContentEncodings: [],
    };

    // Mock urlBase64ToUint8Array
    (urlBase64ToUint8Array as jest.Mock).mockReturnValue(
      new Uint8Array([1, 2, 3])
    );
  });

  it("should render 'Push notifications are not supported' if push is not supported", () => {
    // Simulate lack of service worker support
    (global.navigator as any).serviceWorker = undefined;
    render(<PushNotificationManager />);

    expect(
      screen.getByText("Push notifications are not supported in this browser.")
    ).toBeInTheDocument();
  });

  it("should render subscription buttons and interact with them", async () => {
    render(<PushNotificationManager />);

    // Wait for the component to be rendered
    await waitFor(() =>
      expect(screen.getByText("Push Notifications")).toBeInTheDocument()
    );

    // Check initial state when not subscribed
    expect(
      screen.getByText("You are not subscribed to push notifications.")
    ).toBeInTheDocument();
    const subscribeButton = screen.getByText("Subscribe");
    expect(subscribeButton).toBeInTheDocument();

    // Simulate subscribing to push notifications
    fireEvent.click(subscribeButton);

    // Mock the subscription function
    await waitFor(() => expect(subscribeUser).toHaveBeenCalledTimes(1));
    expect(subscribeUser).toHaveBeenCalledWith({
      endpoint: "https://example.com",
      keys: { p256dh: "key", auth: "auth" },
    });

    // Check if the UI updates after subscription
    expect(
      screen.getByText("You are subscribed to push notifications.")
    ).toBeInTheDocument();
    const unsubscribeButton = screen.getByText("Unsubscribe");
    expect(unsubscribeButton).toBeInTheDocument();

    // Simulate unsubscribing
    fireEvent.click(unsubscribeButton);

    // Check if the unsubscribe function is called
    await waitFor(() => expect(unsubscribeUser).toHaveBeenCalledTimes(1));
    expect(unsubscribeUser).toHaveBeenCalled();
  });

  it("should send a test notification", async () => {
    // Simulate subscribing to push notifications
    render(<PushNotificationManager />);

    const subscribeButton = screen.getByText("Subscribe");
    fireEvent.click(subscribeButton);

    await waitFor(() => expect(subscribeUser).toHaveBeenCalledTimes(1));

    // Simulate sending a test notification
    const sendButton = screen.getByText("Send Test");
    fireEvent.click(sendButton);

    // Check if sendNotification is called
    await waitFor(() =>
      expect(sendNotification).toHaveBeenCalledWith("welcome to my app")
    );
  });
});

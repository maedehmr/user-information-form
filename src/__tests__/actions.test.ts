import webpush from "web-push";
import {
  subscribeUser,
  unsubscribeUser,
  sendNotification,
} from "@/app/actions";

type MockPushSubscription = {
  endpoint: string;
  getKey: (name: string) => ArrayBuffer | null;
};

jest.mock("web-push", () => ({
  setVapidDetails: jest.fn(),
  sendNotification: jest.fn().mockResolvedValue({ success: true }),
}));

describe("Push Notification Service", () => {
  let mockSubscription: MockPushSubscription;

  beforeEach(() => {
    mockSubscription = {
      endpoint: "https://example.com",
      getKey: (name: string) =>
        name === "p256dh"
          ? new Uint8Array([1, 2, 3]).buffer
          : new Uint8Array([4, 5, 6]).buffer,
    };
  });

  it("should subscribe a user", async () => {
    const result = await subscribeUser(mockSubscription as any);
    expect(result).toEqual({ success: true });
  });

  it("should unsubscribe a user", async () => {
    await subscribeUser(mockSubscription as any);
    const result = await unsubscribeUser();
    expect(result).toEqual({ success: true });
  });

  it("should send a notification when subscribed", async () => {
    await subscribeUser(mockSubscription as any);
    const message = "Test Message";
    const result = await sendNotification(message);

    expect(webpush.sendNotification).toHaveBeenCalledWith(
      expect.objectContaining({ endpoint: "https://example.com" }),
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/favicons/web-app-manifest-1",
      })
    );
    expect(result).toEqual({ success: true });
  });

  it("should fail to send a notification if no subscription exists", async () => {
    await unsubscribeUser();
    await expect(sendNotification("Test Message")).rejects.toThrow(
      "No subscription available"
    );
  });
});

/// <reference lib="webworker" />

declare module "webworker" {
  interface ServiceWorkerGlobalScope {
    addEventListener(type: "push", listener: (event: PushEvent) => void): void;
    addEventListener(type: "notificationclick", listener: (event: NotificationEvent) => void): void;
    registration: ServiceWorkerRegistration;
    clients: Clients;
  }

  interface Navigator {
    serviceWorker: ServiceWorkerContainer;
  }

  interface PushEvent extends ExtendableEvent {
    data: PushMessageData;
  }

  interface PushMessageData {
    json(): any;
  }

  interface NotificationEvent extends ExtendableEvent {
    notification: Notification;
  }

  interface Clients {
    openWindow(url: string): Promise<WindowClient>;
  }
}

export {}; 
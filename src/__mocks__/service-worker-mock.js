global.navigator = {
  ...global.navigator,
  serviceWorker: {
    register: jest.fn().mockResolvedValue({
      pushManager: {
        getSubscription: jest.fn().mockResolvedValue(null),
        subscribe: jest.fn().mockResolvedValue({
          endpoint: "https://example.com",
          keys: { p256dh: "key", auth: "auth" },
        }),
      },
    }),
    ready: Promise.resolve(),
  },
};

const axiosMock = {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        { id: 1, name: "repo1" },
        { id: 2, name: "repo2" },
      ],
    })
  ),
  CancelToken: {
    source: jest.fn(() => {
      return {
        cancel: jest.fn(),
        token: {},
      };
    }),
  },
};

export default axiosMock;

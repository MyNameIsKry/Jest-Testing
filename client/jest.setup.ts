import "@testing-library/jest-dom";

beforeAll(() => {
  // Ví dụ mock fetch toàn cục
  globalThis.fetch = jest.fn();
  console.error = jest.fn();
  console.warn = jest.fn();
  console.log = jest.fn();
});

afterEach(() => {
  // reset mỗi test để không bị ảnh hưởng giữa các test
  (fetch as jest.Mock).mockReset();
  // Xóa lịch sử call mock
  jest.clearAllMocks();
  // Reset cache của module require/import
  jest.resetModules();
  // Restore tất cả spyOn về implementation gốc
  jest.restoreAllMocks();
});

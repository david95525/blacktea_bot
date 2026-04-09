const { isImageCommand } = require("./utils");

describe("isImageCommand", () => {
  test("should identify a direct image URL as an image command", () => {
    expect(isImageCommand("https://example.com/image.png")).toBe(true);
  });

  test("should identify a spoiler image URL as an image command", () => {
    expect(isImageCommand("||https://example.com/image.png||")).toBe(true);
  });

  test("should identify an array containing image URLs as an image command", () => {
    expect(isImageCommand(["text", "https://example.com/image.png"])).toBe(true);
  });

  test("should identify an array with spoiler URLs as an image command", () => {
    expect(isImageCommand(["||https://example.com/image.png||"])).toBe(true);
  });

  test("should identify plain text as a text command", () => {
    expect(isImageCommand("Hello World")).toBe(false);
  });

  test("should identify an array of plain text as a text command", () => {
    expect(isImageCommand(["Hello", "World"])).toBe(false);
  });

  test("should handle whitespace correctly", () => {
    expect(isImageCommand("  https://example.com/image.png  ")).toBe(true);
  });
});

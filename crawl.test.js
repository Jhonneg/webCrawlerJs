const { normalizeURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://jhonneg.is-a.dev";
  const actual = normalizeURL(input);
  const expected = "jhonneg.is-a.dev";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip last slash", () => {
  const input = "https://jhonneg.is-a.dev/";
  const actual = normalizeURL(input);
  const expected = "jhonneg.is-a.dev";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://JHONNEG.is-a.dev";
  const actual = normalizeURL(input);
  const expected = "jhonneg.is-a.dev";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () => {
  const input = "http://jhonneg.is-a.dev";
  const actual = normalizeURL(input);
  const expected = "jhonneg.is-a.dev";
  expect(actual).toEqual(expected);
});


const { normalizeURL, getURLsFromHTML } = require("./crawl");
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

test("getURLsFromHTML", () => {
  const inputHTMLBody = /* html */ `
    <html>
      <body>
        <a href="http://jhonneg.is-a.dev/">
          Portfolio
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "http://jhonneg.is-a.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["http://jhonneg.is-a.dev/"];
  expect(actual).toEqual(expected);
});

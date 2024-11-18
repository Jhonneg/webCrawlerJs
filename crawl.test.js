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

test("getURLsFromHTML absolute", () => {
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

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = /* html */ `
    <html>
      <body>
        <a href="/path/">
          Portfolio
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "http://jhonneg.is-a.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["http://jhonneg.is-a.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML multiple", () => {
  const inputHTMLBody = /* html */ `
    <html>
      <body>
        <a href="http://jhonneg.is-a.dev/path1/">
          Portfolio path one
        </a>
        <a href="/path2/">
          Portfolio path two
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "http://jhonneg.is-a.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "http://jhonneg.is-a.dev/path1/",
    "http://jhonneg.is-a.dev/path2/",
  ];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML invalid", () => {
  const inputHTMLBody = /* html */ `
    <html>
      <body>
        <a href="invalid">
          invalid URL
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "http://jhonneg.is-a.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});

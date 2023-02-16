# 77. Exercise: Same Origin Policy

**Let's test our knowledge of the browser's Same Origin Policy!** See if you can answer three quick questions about the following scenario:

Say you're browsing a page on www.wikipedia.org. In general, will the following requests succeed, or fail?

1. A JavaScript `GET` request to www.bank.com.

2. A JavaScript `POST` request to www.bank.com.

3. Clicking an HTML link to a video on www.bank.com.



Scroll down to see the answers...













**Here we go!** There are possible exceptions, but in general the following will be true:

1. This request will *FAIL*, because requests to get information from a cross-origin domain are not allowed by the browser. The browser is trying to protect your privacy by preventing www.wikipedia.org from stealing your private information from www.bank.com.

2. This request will *SUCCEED*. This is a little known exception to the Same Origin Policy! The decision to allow `POST` requests is mostly historical, but there is also a lower chance that a `POST` request will steal your private information. `POST` requests are used to write data to a server, rather than `GET` data from it, so it's less likely the response will contain private information.

3. This request will *SUCCEED*. The Same Origin Policy applies only to scripts and not static resources like HTML tags.



https://github.com/odziem/http-server

<details>
  <summary> Section 7: Web Server with Node.js </summary>

  - [Codebase: http-server](../src/7_http-server/)

</details>

---

[Previous](./76_Same-Origin-Policy.md) | [Next](./78_Cross-Origin-Resource-Sharing-(CORS).md)
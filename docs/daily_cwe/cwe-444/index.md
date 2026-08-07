---
categories:
  - daily_cwe
title: "CWE-444: HTTP Request/Response Smuggling"
tags: 
  - CWE-444
  - http smuggling
---
# INCONSISTENT INTERPRESTATION OF HTTP REQUESTS

## Descritpion

HTTP messages can be malformed or unexpected in ways that cause web severs or clients to interpret th messages in deiffernet ways than intermediary HTTP agents such as load balancers, reverse proxies, web caching proxies, application firewalls, etc. For example, an adversary may be able to add duplicate or different header fields that a client or server may interprest as one set messages, whereas the intermeidary might interpret the same consequence of bytes as a different set of messages.

The inconsistent parsing and interpretation of messages can allow the adversary to "smuggle" a message to the client/server without the intermediary being aware of it.

The weakness is usually the result of the usage of outdated or incompatible HTTP protocol version in the HTTP agents.

### Alternate terms

- HTTP Smuggling 
- HTTP Desync

### Comparison in CAPEC

| CAPEC | Name |
| :--- | :--- |
| CAPEC-33 | HTTP Request Smuggling |
| CAPEC-273 | HTTP Response Smuggling |
| CAPEC-34 | HTTP Response Splitting |
| CAPEC-105 | HTTP Request Splitting |

HTTP Request ... is an attempt to compromise a backend HTTP agent via HTTP request messages.

HTTP Response ... is an attempt to compromise a client agent by sending malicious content in HTTP resonses from backend HTTP infrastructure.

HTTP Splitting requires the embedding/injection of arbitrary HTML headers and content through user input into browser cookies or Ajax web/browser object parameters like XMLHttpRequest

HTTP Smuggling relies upon discrepancies in the interpretation of various HTTP Headers and message sizes and not solely user input of special characters and character encoding. 

HTTP Smugging was established to circumvent mitifations against HTTP Splitting techniques.

### Selected Observed Examples

| CVE | Note |
| :--- | :--- |
| **CVE-2022-24766** | Insufficient Protectection against HTTP Request Smuggling in mitmproxy |
| **CVE-2021-37147** | Request Smuggling - LF line ending |
| **CVE-2020-8287** | Node.js platform allowes request smuggling via 2 TE headers |
| **CVE-2006-6276** | Web servers allow request smuggling via inconsisten HTTP headers  |
| **CVE-2005-2088** | HTTP server allowes request smuggling with both TE and CL header |
| **CVE-2005-2089** | HTTP server allowes request smuggling with both TE and CL header |

### Potential Mitigations

1. Use a web server that employs a strict HTTP parsing procedure, such as Apache.
2. Use only SSL communication
3. Terminate client session after each request
4. Turn all pages to non-cacheable

## Implementation

### Basic project structure
```
.
├── Dockerfile
├── app.js
```

Dockerfile

```Dockerfile
--8<-- "docs/daily_cwe/cwe-444/source/Dockerfile"
```
app.js

```js
--8<-- "docs/daily_cwe/cwe-444/source/app.js"
```

### Deploy

```docker
docker build -t smuggling-demo .
docker run -d -p 3000:3000 --name smuggling-lab smuggling-demo
```

### PoC

Using `netcat`

```sh
printf "POST / HTTP/1.1\r\nHost: localhost\r\nContent-Length: 0 \r\n\r\nGET /admin HTTP/1.1\r\n\r\nHost: localhost\r\n\r\n" | nc localhost 3000
```

### Explanation

To bypass WAF, we use **HTTP Keep-Alive / Pipelining** in the innocence of proxy.

Instead of sending 1 request, we merge 2 requests into 1 TCP payload. Proxy only checks the first line, but does not check the later; while backend (`http` standart of Node.js) will separate raw bytes into 2 distinct valid requests and will return 2 responses (1st response is blocked by WAF, and 2nd response is benignly processed by backend).

### Defense

Since frontend proxy is used by module `net` (layer 4 - TCP) instead of module `http` (layer 7 - Application), the data is processed as raw TCP stream and proxy cannot understand the structure of HTTP request as well as TE/CL.

HTTP parser must not be written in raw socket to be a proxy.

Secure coding the proxy as below

```js
// =====================
// 2. FRONTEND PROXY
// =====================
const proxy = http.createServer((clientReq, clientRes) => {
    // WAF parse as layer 7
    if (clientReq.url.include('/admin')) {
        clientRes.writeHead(403, { 'Content-Type': 'text/plain' });
        clientRes.end("[WAF] Access to /admin is blocked!\n");
        return;
    }
    
    // Safely forward request, http module normalizes any dangerous headers
    const options = {
        hostname:  '127.0.0.1',
        port:       3001,
        path:       clientReq.url,
        mehthod:    clientReq.method,
        headers:    clientReq.headers,
    };

    const proxyReq = http.request(options, (backendRes) => {
        clientRes.writeHead(backendRes.statusCode, backendRes.headers);
        backendRes.pipe(clientRes);
    })

    const proxyReq.on('error', (err) => {
        clientRes.writeHead(502, { 'Content-Type': 'text/plain' });
        clientRes.end("Bad Gateway\n");
    });

    clientReq.pipe(proxyReq);
});
```
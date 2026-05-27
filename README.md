<!-- Dada Ki Jay Ho -->

# Publishing to npm - Local App to NPM Package

## Understand What an npm Package Actually Is

An npm package is simply:

- A folder
- With a `package.json`
- Published to the npm registry

---

# package.json

Extremly important settings:

```json
{
  "author": "Raj Dave",
  "license": "ISC",
  "sourceMap": true,
  "declaration": true,
  "declarationMap": true
}
```

---

# Steps to Publish Package

1. Once we have npm package, login to npm registry using cli.

Here's some useful commands:

```bash
npm whoami
npm login
npm publish
npm version <major|minor|patch>
```

Additional Notes:

- Make sure build and start is working fine
- Authenticate yourself and package should be published
- Push repo on GitHub (optional)
- Make changes
- Update version before republishing

---

# Modify package.json

Add/update:

```json
{
  "main": "./outDir/index.ts",
  "types": "./outputDirectory/index.d.ts",

  "homepage": "https://github.com/USER-NAME/your-package#readme",

  "repository": {
    "type": "git",
    "url": "git+https://github.com/USER-NAME/your-package.git"
  },

  "files": [
    "bin",
    "dist",
    "README.md"
  ]
}
```

---

# Creating a CLI Package

To make CLI all we need to do is add `bin` command.

## Add bin command

```json
{
  "bin": {
    "mycmd-1": "./runfile/index.js"
  }
}
```

---

# Create New File

## `bin/index.js`

```js
#!/usr/bin/env node
import("../outputDirectory/index.js");
```

---

# Best Practices

The key standards, maintenance habits, and conventions developers should follow when publishing packages.

---

# Monetization

---

# Supply Chain Security

---

# Publisher Identity

From a security standpoint, how can developers genuinely verify and trust the identity of a package publisher?
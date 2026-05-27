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

## Additional Notes

- Make sure build and start is working fine
- Authenticate yourself and package should be published
- Push repo on GitHub (optional)
- Make changes
- Update version before republishing
- Run `npm pack` to see what will be published

---

# Modify package.json

Add/update:

```json
{
  "main": "./outDir/index.ts",
  "types": "./outDir/index.d.ts",

  "homepage": "https://github.com/USER-NAME/REPOSITORY#readme",

  "repository": {
    "type": "git",
    "url": "git+https://github.com/USER-NAME/REPOSITORY.git"
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

- Writing a clean and useful README.md
- Proper version management
- Keeping packages small and optimized
- Avoiding accidental publishing of sensitive files
- Using the files field correctly
- Supporting TypeScript definitions
- Maintaining backward compatibility
- Testing packages before publishing
- Using GitHub Actions or CI/CD for automated publishing

---

# Monetization

- Sponsorships and GitHub Sponsors  
  (ex: https://fastify.dev/)
- Open-source funding platforms
- Paid SaaS products built around npm packages
- Premium features or enterprise versions

---

# Supply Chain Security

- Avoiding random or untrusted packages
- Auditing dependencies regularly
- Using tools like:
  - `npm audit`
  - Dependabot
  - Socket.dev
- Checking package popularity and maintenance activity

---

# Publisher Identity

- Checking verified GitHub repositories
- Looking at publisher history and community reputation
- Reviewing contributor activity and maintenance consistency
- Looking for linked websites or organizations
- Understanding verified publishers and trusted organizations
- Checking download history and issue discussions
- Identifying red flags in suspicious packages
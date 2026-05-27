<!-- Dada Ki Jay Ho -->


Publishing to npm - Local app to NPM package

### Understand What an npm Package Actually Is

An npm package is simply:

* A folder
* With a package.json
* Published to the npm registry

package.json:
Extremly important settings:

  "author": "Raj Dave",
  "license": "ISC",
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,


1. Once we have npm package, login to npm registry using cli, Here's some useful commands: 
- npm whoami
- npm login
- make sure build and start is working fine
- npm publish 
- authenticate your self and pkg should be published
- push repo on github ( optional )
- make changes
- update version using : npm version <major|minor|patch>

Modify Package.json add/update: 
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
  ],

Best Practices: The key standards, maintenance habits, and conventions developers should follow when publishing packages

Monetization

Supply Chain Security

Publisher Identity: From a security standpoint, how can developers genuinely verify and trust the identity of a package publisher?


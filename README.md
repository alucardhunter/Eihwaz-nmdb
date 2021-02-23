## Project information

This project was made with create-react-app typescript template, using the redux Toolkit,
react-dom-router and eslint

All tests are located at `src/Tests` and `cypress` folders

## Run Project

To run project you must use 

```
$ yarn start or $ npm run start
```

## Build Project

To build the project run:

```
$ yarn build or $ npm run build
```

## Run tests and eslint
You can run all tests with:

```
$ yarn test or $ npm run test

and

$ yarn cypress:open or $ npm run cypress:open
```
For eslint run:

```
$ yarn lint or $ npm run lint
```

## <a name="commit"></a> Commit Message Format

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of scope "docs".
When the body is required it must be at least 20 characters long.

The `footer` is optional.

Any line of the commit message cannot be longer than 100 characters.


#### <a href="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|platform-webworker|
  │                          platform-webworker-dynamic|router|service-worker|upgrade|zone.js|
  │                          packaging|changelog|dev-infra|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

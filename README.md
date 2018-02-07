# ReactNativeComponentsTester

Boilerplate of React Native project together with tests setup, perfect for basic components testing.

## Glossary

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Running](#running)
  - [Testing](#testing)
  - [Prettier](#prettier)
  - [Pre-commit hook](#pre-commit)

---

## Overview

This is a boilerplate for React Native project, with already configured Flow, Jest, Enzyme, Prettier and ESLint. Created with a thought of faster, more effective start of fresh project, can be also treated as easy-to-use playground for testing new components and ideas.

In this boilerplate you will find all the scripts you need to check your application for code styling and tests, along with one example component, AwesomeButton. You can freely copy the configuration, tests and styling manner from this one component and apply according to your needs.

## Installation

Feel free to fork or clone this project and run

```yarn install```

or

```npm install```

And there you go! You can add new components, implement some feature prototype and generally play around with React Native code.

## Usage

### Running

To see how the feature looks like, just run

```react-native run-ios```

or

```react-native run-android```

from projects root directory, depending on the platform you prefer.

---

### Testing

#### Flow

To run Flow on your project, you can easily use already prepared scripts from `package.json` file and run

```yarn flow```

This starts Flow server and executes Flow checks. To stp Flow server, you can execute:

```yarn flow-stop```

More on Flow you can find [here](https://flow.org/en/docs/).

#### ESLint

To check styling and other ESLint rules you defined in `.eslintrc` file, it's enough to run:

```yarn lint```

#### Unit tests

There is a script prepared to run all the unit tests defined with the use of Jest. Just run:

```yarn test:unit```

#### One command for all

If you don't want to run all of these tests separately, there also is one script created that calls them altogether. By running:

```yarn test```

you can execute all of the tests above at once.

---

### Prettier

[Prettier](https://github.com/prettier/prettier) is a tool to format your code according to rules you provide. All the rules are defined under `pretty` script, so to format your whole code (under `src` directory) at once, you can just run

```yarn pretty```

---

### Pre-commit

This project comes with already prepared `precommit` hook, that runs prettier on your code and then executes all the tests, just before the commit. This will prevent you from commiting badly styled or invalid code to your repo. Feel free to change it according to your needs.

Precommit is defined in `package.json`'s `scripts` section and is taking advantage of a package called `lint-staged`. You can fin more info on it [here](https://github.com/okonet/lint-staged).


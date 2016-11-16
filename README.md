[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Sass-Boost/blob/master/LICENSE.txt)
[![GitHub license](https://api.travis-ci.org/esr360/Sass-Boost.svg)](https://travis-ci.org/esr360/Sass-Boost)
[![Bower version](https://badge.fury.io/bo/Sass-Boost.svg)](https://badge.fury.io/bo/Sass-Boost)
[![npm version](https://badge.fury.io/js/Sass-Boost.svg)](https://badge.fury.io/js/Sass-Boost)

# Sass-Boost

> A library of commonly used custom Sass functions

[View Documentation (via SassDoc)](https://esr360.github.io/Sass-Boost/)

### Requirements

* Sass 3.3+

### Installation

#### Via Bower

```
bower install Sass-Boost
```

#### Via NPM

```
npm install Sass-Boost
```

#### As Git-Submodule

> Ensure you change the PATH/TO/SUBMODULES part to your desired location

```
git submodule add https://github.com/esr360/Sass-Boost.git PATH/TO/SUBMODULES
```

---

After you have installed Sass-Boost, import the following file into your project's main .scss file:

```
src/_sass-boost.scss
```

You now have access to the following functions:

* [`is-grayscale()`](https://esr360.github.io/Sass-Boost/#undefined-function-is-grayscale)
* [`get-keys()`](https://esr360.github.io/Sass-Boost/#undefined-function-get-keys)
* [`list-replace()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-replace)
* [`list-reverse()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-reverse)
* [`map-get-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-get-deep)
* [`map-merge-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-merge-deep)
* [`map-reverse()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-reverse)
* [`map-search()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-search)
* [`map-set()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-set)
* [`map-set-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-set-deep)
* [`string-replace()`](https://esr360.github.io/Sass-Boost/#undefined-function-str-replace)

### Development

> The Sass unit test framework is [Sass True](https://github.com/oddbird/true)

#### Further Requirements

* Node.js (+ npm)
* Grunt (`npm install -g grunt-cli`)
* Scss Lint (`gem install scss-lint`)

Install Node modules:

```
npm install
```

To run unit tests, generate documentation and lint the source files, run the following command:

```
grunt compile
```
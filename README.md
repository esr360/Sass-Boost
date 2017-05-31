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

> Ensure your paths are correct as they may differ from below

#### Via NPM

```
npm install Sass-Boost --save
```

```css
@import '../node_modules/Sass-Boost/src/sass-boost';
```

#### Via Bower

```
bower install Sass-Boost --save
```

```css
@import '../bower_components/Sass-Boost/src/sass-boost';
```

#### As Git-Submodule

```
git submodule add https://github.com/esr360/Sass-Boost.git vendor
```

```css
@import '../vendor/Sass-Boost/src/sass-boost';
```

#### Download

> [Download _sass-boost.scss](dist/_sass-boost.scss)

```css
@import 'PATH/TO/sass-boost';
```

---

You now have access to the following functions:

* [`get-keys()`](https://esr360.github.io/Sass-Boost/#undefined-function-get-keys)
* [`is-grayscale()`](https://esr360.github.io/Sass-Boost/#undefined-function-is-grayscale)
* [`list-remove()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-remove)
* [`list-remove-duplicates()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-remove-duplicates)
* [`list-replace()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-replace)
* [`list-reverse()`](https://esr360.github.io/Sass-Boost/#undefined-function-list-reverse)
* [`map-get-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-get-deep)
* [`map-merge-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-merge-deep)
* [`map-reverse()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-reverse)
* [`map-search()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-search)
* [`map-set()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-set)
* [`map-set-deep()`](https://esr360.github.io/Sass-Boost/#undefined-function-map-set-deep)
* [`power()`](https://esr360.github.io/Sass-Boost/#undefined-function-power)
* [`string-replace()`](https://esr360.github.io/Sass-Boost/#undefined-function-str-replace)
* [`strip-units()`](https://esr360.github.io/Sass-Boost/#undefined-function-strip-unit)

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

To lint the source files, run unit tests, generate documentation and distribution file, run the following command:

```
grunt compile
```

## Changelog

#### Version 1.1.0

Released: 29th May 2016

###### Release Notes

* New function - `is-greyscale()`
* New function - `list-remove()`
* New function - `list-remove-duplicates()`
* New function - `list-replace()`
* New function - `strip-unit()`
* New function - `pow()`
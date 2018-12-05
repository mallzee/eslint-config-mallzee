# Mallzee Javascript Coding Style

This coding style is based on the [airbnb](https://github.com/airbnb/javascript) style preset which ships with jscs but with a few tweaks.

This packages provides a "mallzee" preset for use in your projects.

## Installation

1. Install the npm packages required to style check your code

    npm install --save-dev eslint-config-mallzee

2. Create a .eslintrc in the root of your project

3. Extend the mallzee config

```javascript
{
  "extends": "mallzee"
}
```

4. Run this command to import the correct peer dependancies

```bash
npx install-peerdeps --dev eslint-config-mallzee
```
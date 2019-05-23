# accessible-react-rating

> It is an accessibile react component for rating. [Demo Link](https://bowen31337.github.io/accessible-react-rating/)

[![NPM](https://img.shields.io/npm/v/accessible-react-rating.svg)](https://www.npmjs.com/package/accessible-react-rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save accessible-react-rating
```

## Usage

```jsx
import React, { Component } from 'react';

import MyComponent from 'accessible-react-rating';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Properties

| Property          | Type       | Default               | Description                                           |
| ----------------- | ---------- | --------------------- | ----------------------------------------------------- |
| `emptySymbol`     | _element_  | <img/> in the example | shown when it is not selected                         |
| `fullSymbol`      | _element_  | <img/> in the example | shown when it is selected.                            |
| `numberOfRatings` | _number_   | 5                     | the number of symbols.                                |
| `initialRating`   | _number_   | 0                     | the number of symbols that are selected.              |
| `legend`          | _string_   | 'your ratings'        | the legend in the fieldset .                          |
| `getRatingValue`  | _function_ | ()=>{}                | the callback function when the symbols are selected . |

## Accessibility

### Keyboard navigation

> Use keyboard tab and arrow left/right to select the star

### Screen reader

> Test with VoiceOver

emptySymbol = <DefaultEmptySymbol />,
fullSymbol = <DefaultFullSymbol />,
numberOfRatings = 5,
initialRating = 0,
getRatingValue = () => {},
legend = 'your ratings'

## License

MIT © [bowen31337](https://github.com/bowen31337)

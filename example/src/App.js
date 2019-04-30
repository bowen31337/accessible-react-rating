import React from 'react';

import Rating from 'accessible-react-rating';

import fullStarSrc from './assets/images/star-full.svg';
import emptyStarSrc from './assets/images/star-empty.svg';

const FullStar = () => <img src={fullStarSrc} alt="solid star" />;

const EmptyStar = () => <img src={emptyStarSrc} alt="solid star" />;

export default class App extends React.PureComponent {
  getRatingValue = value => console.log(value);
  render() {
    return (
      <form>
        <Rating fullSymbol={<FullStar />} emptySymbol={<EmptyStar />} getRatingValue={this.getRatingValue} />
      </form>
    );
  }
}

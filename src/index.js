import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const DefaultEmptySymbol = () => (
  <svg viewBox='0 0 512 512' width='33px' height='33px'>
    <path
      fill='#858585'
      d='M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z'
    />
  </svg>
)

const DefaultFullSymbol = () => (
  <svg viewBox='0 0 512 512' width='33px' height='33px'>
    <path
      fill='#036'
      d='M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z'
    />
  </svg>
)

const Star = React.memo(
  ({ emptySymbol, fullSymbol, index, changeHandler, initialRating, noOfSelectedSymbols, getRatingValue }) => (
    <React.Fragment>
      <input
        value={index}
        id={`star${index}`}
        type='radio'
        name='rating'
        onChange={() => {
          changeHandler(index)
          getRatingValue(index)
        }}
        checked={initialRating === index || index === noOfSelectedSymbols}
        className={`visuallyhidden ${index <= noOfSelectedSymbols ? 'selected' : ''}`}
      />
      <label
        htmlFor={`star${index}`}
        onMouseEnter={() => {
          changeHandler(index)
          getRatingValue(index)
        }}
        onTouchStart={() => {
          changeHandler(index)
          getRatingValue(index)
        }}
      >
        <span className='visuallyhidden'>{`${index} Star${index === 1 ? '' : 's'}`}</span>
        <span className='empty-symbol'>{emptySymbol}</span>
        <span className='full-symbol'>{fullSymbol}</span>
      </label>
    </React.Fragment>
  )
)

class Rating extends React.PureComponent {
  state = {
    noOfSelectedSymbols: 0
  }

  changeHandler = noOfSelectedSymbols => this.setState({ noOfSelectedSymbols })

  render() {
    const {
      emptySymbol = <DefaultEmptySymbol />,
      fullSymbol = <DefaultFullSymbol />,
      numberOfRatings = 5,
      initialRating = 0,
      getRatingValue = () => {},
      legend = 'your ratings'
    } = this.props
    return (
      <fieldset className='accessible-rating'>
        <legend>{legend}</legend>
        {[...new Array(numberOfRatings)].map((item, index) => (
          <Star
            emptySymbol={emptySymbol}
            fullSymbol={fullSymbol}
            index={index + 1}
            key={index}
            changeHandler={this.changeHandler}
            initialRating={initialRating}
            getRatingValue={getRatingValue}
            noOfSelectedSymbols={this.state.noOfSelectedSymbols}
          />
        ))}
      </fieldset>
    )
  }
}

export default Rating

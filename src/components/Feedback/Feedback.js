import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    console.log(this);
    console.log('Click');

    const { target } = event;

    setTimeout(() => {
      console.log(target);
    }, 1000);

    this.setState({
      good: 5,
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleClick}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:</p>
        <p>Positive Feedback:</p>
      </div>
    );
  }
}

export default Feedback;

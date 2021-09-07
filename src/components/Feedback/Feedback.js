// import Buttons from 'components/Buttons/Buttons';
import React from 'react';

class Feedback extends React.Component {
  // начальное состояние от Пропс
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  // handleClick = event => {
  //   console.log(this);
  //   console.log('Click');

  //   const { target } = event;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);

  //   // Перезаписывает состояние

  //   // this.setState({
  //   //   good: 5,
  //   // });

  //   // Обновляет состояние
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  handleGoodClick = e => {
    console.log(e);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralClick = e => {
    console.log(e);
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadClick = e => {
    console.log(e);
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good / totalFeedback) * 100,
    );

    if (this.state.good !== 0) {
      return PositiveFeedbackPercentage;
    }
    return 0;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        {/* <Buttons
        onButtonClick={this.handleClick}
        /> */}
        <button type="button" onClick={this.handleGoodClick}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;

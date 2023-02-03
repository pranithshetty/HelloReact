import { Component } from "react";

export default class CounterClass extends Component {
  static defaultProps = {
    startAt: 0,
    countBy: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      counter: props.startAt,
    };
    // this.countUp = this.countUp.bind(this);
    // this.countDown = this.countDown.bind(this);
  }
  countUp = (e) => {
    this.setState({ counter: this.state.counter + this.props.countBy });
  };
  countDown = (e) => {
    this.setState({ counter: this.state.counter - this.props.countBy });
  };

  render() {
    return (
      <>
        <h4>{this.state.counter}</h4>
        <button onClick={this.countUp}>CountUp</button>
        <button onClick={this.countDown}>CountDown</button>
      </>
    );
  }
}

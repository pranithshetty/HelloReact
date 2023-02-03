//BAd code

import { Component } from "react";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
    };
    this.handelClick = this.handelClick.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handelClick(e) {
    e.preventDefault();
    let newItem = this.state.newItem;
    this.setState({ items: [...this.state.items, newItem], newItem: "" });
  }
  handelChange(e) {
    this.setState({ newItem: e.target.value });
  }
  render() {
    return (
      <>
        <div>
          <form>
            <input
              type="text"
              value={this.newItem}
              onChange={this.handelChange}
            />
            <button onClick={this.handelClick}> {this.props.buttonText}</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddItem;

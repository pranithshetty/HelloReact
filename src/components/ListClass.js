//BAd code

import { Component } from "react";
import ListItem from "./ListItem";
class ListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuitar: "",
      items: [...props.items],
    };
    this.handelClick = this.handelClick.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handelClick(e) {
    e.preventDefault();
    let newGuitar = this.state.newGuitar;
    this.setState({ items: [...this.state.items, newGuitar], newGuitar: "" });
  }
  handelChange(e) {
    this.setState({ newGuitar: e.target.value });
  }
  render() {
    let items = this.state.items.map((item) => (
      <ListItem key={item} text={item} />
    ));
    return (
      <>
        <div>
          <form>
            <input
              type="text"
              value={this.newGuitar}
              onChange={this.handelChange}
            />
            <button onClick={this.handelClick}> Add Guitar</button>
          </form>
        </div>
        <h3>{this.props.title}</h3>
        <ul>{items}</ul>
      </>
    );
  }
}

export default ListClass;

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      above: false
    };
  }

  onListItemClick() {
    this.setState({done: !this.state.done});
  }

  onListItemEnter() {
    this.setState({above: true})
  }

  onListItemLeave() {
    this.setState({above: false})
  }

  onList

  render() {
    var style = {fontWeight: this.state.above ? 'bold' : 'normal'};

    return (
        <li style={style} onMouseOver={this.onListItemEnter.bind(this)} onMouseOut={this.onListItemLeave.bind(this)}>{this.props.item}</li>
      );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </ul>
);

var App = ()  => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList items={["Cucumbers", "Kale", "Potatoes"]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

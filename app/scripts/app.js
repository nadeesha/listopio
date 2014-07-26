/**
 * @jsx React.DOM
 */

var CardView = React.createClass({
  getInitialState: function() {
    return {
      cards: [] 
    };
  },
  render: function() {
    return (
      <div>
        <Zebox command={this.state.command} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
});

var Zebox = React.createClass({
  render: function () {
    return (
      <input type="text" className="form-control" />
    );
  }
});

var Cards = React.createClass({
  render: function () {
    function createElement(card) {
        return <li>{card.text}</li>
    }
    
    return (
      <ul>{this.props.cards.map(createElement)}</ul>
    );
  }
});

React.renderComponent(<CardView />, document.getElementById('lp-container'));
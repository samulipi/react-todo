var React = require('react');
var Todo  = require('Todo');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var todo = this.refs.todo.value;

    if (todo.length > 0) {
      this.refs.todo.value = '';
      this.props.handleAddTodo(todo);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todo" placeholder="Todo to do"/>
          <button className="button expanded" >Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;

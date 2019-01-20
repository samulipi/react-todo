var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
//var Todo  = require('Todo');

export var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var todo = this.refs.todo.value;

    if (todo.length > 0) {
      this.refs.todo.value = '';
      //this.props.handleAddTodo(todo);
      dispatch(actions.addTodo(todo));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todo" placeholder="Todo to do"/>
          <button className="button expanded" >Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);

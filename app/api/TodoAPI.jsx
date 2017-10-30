var $ =  require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function  (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text;
      if(searchText.length === 0 ) {
        return true;
      } else {
        if( todoText.indexOf(searchText) > -1) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    });


    //sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if ( a.completed === false && b.completed === true ) {
        return -1;
      } else if ( a.completed && !b.completed ) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};

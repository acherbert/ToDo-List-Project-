new Vue({
  el: '#app',
  data: {
    todo: '',
    todos: []
  },
  methods: {
    addTodo: function () {
      this.todos.unshift({text: this.newTodo});
      this.newTodo = '';
      this.save();
    },
    removeTodo: function (index) {
      var removedItem = this.todos.$remove(this.todos[index])[0];
      if (!removedItem.removed) {
        removedItem = {
          text: removedItem.text,
          removed: true
        };
        this.todos.push(removedItem);
      }
      this.save();
    },
    save: function () {
      var todosObject = JSON.stringify(this.todos);
      localStorage.setItem('todos', todosObject);
    }
  },
  ready: function () {
    var todosObject = localStorage.getItem('todos');
    this.todos = todosObject ? JSON.parse(todosObject) : [];
  }
})
<template>
  <div class="app">
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list
      @setStatus="setStatus"
    >
      <todo-item
        @deleteTodo="deleteTodo"
        @updateTodo="updateTodo"
        @checkItem="checkItem"
        v-for="item in items"
        :key="item.id"
        :item="item"
        :status="status"
      ></todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import TodoInput from "@/components/TodoInput";

export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          id: 1,
          todo: "Learning Vue",
          completed: false
        },
        {
          id: 2,
          todo: "Watch a movie",
          completed: true
        }
      ],
      status: null,
    }
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },
    getId() {
      if (this.itemsLength) {
        return this.items[this.itemsLength - 1].id + 1;
      }
      return 1;
    }
  },
  methods: {
    addTodo(todo) {
      this.items.push({
        id: this.getId,
        todo,
        completed: false
      })
    },
    checkItem(id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    },
    deleteTodo(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    updateTodo(todo) {
      this.items = this.items.map(item => {
        if (item.id === todo.id) {
          return {...todo};
        }
        return item;
      })
    },
    setStatus(val) {
      this.status = val;
    }
  },
  components: {
    TodoList,
    TodoItem,
    TodoInput
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #e1e1e1;
  font-family: Arial, sans-serif;
}

.app {
  margin: 50px auto;
  width: 500px;
  padding: 20px;
  border: 2px solid #fff;
}
</style>

<template>
  <div class="todo-input">
    <input type="text" v-model="todo" placeholder="Add todo and press Enter" @keydown.enter="addTodo">
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todo: '',
    }
  },
  methods: {
    addTodo() {
      if (this.todo !== '') {
        this.$emit('addTodo', this.todo);
        this.todo = '';
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.todo-input {
  width: 100%;
  margin: 0 10px;
}

input {
  width: 100%;
  padding: 5px 10px;
  font-size: 14px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

input:focus {
  outline: none;
}
</style>
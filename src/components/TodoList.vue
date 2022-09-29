<template>
  <div class="todo-list">
    <slot></slot>
    <div class="filter">
      <button @click="setStatus(null)">All</button>
      <button @click="setStatus(true)">Completed</button>
      <button  @click="setStatus(false)">Uncompleted</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {}
  },
  methods: {
    setStatus(val) {
      this.$emit('setStatus', val);
    }
  }
}
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
}

.filter {
  margin: 5px 0 0 0;
  padding: 5px 0;
}

button {
  margin: 0 5px;
  background: aqua;
  border: 3px solid #fff;
  padding: 5px 10px;
  border-radius: 3px;
  color: #464630;
}

button:hover {
  cursor: pointer;
  background: #68c2c2;
}

button:focus {
  outline: none;
}
</style>
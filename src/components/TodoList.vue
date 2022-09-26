<template>
  <div class="todo-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {}
  },
  components: {}
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
</style>
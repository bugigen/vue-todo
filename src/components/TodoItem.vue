<template>
  <div class="todo-item">
    <div class="controls">
      <div class="edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></div>
      <div class="delete" @click="deleteTodo"><font-awesome-icon icon="fa-solid fa-trash-can" /></div>
    </div>
    <div :class="{throw: item.completed}">{{ item.todo }}</div>
    <div>
      <input type="checkbox" :checked="item.completed" @click="check">
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: "TodoItem",
  data() {
    return {}
  },
  methods: {
    check() {
      this.$emit('checkItem', this.item.id);
    },
    deleteTodo() {
      this.$emit('deleteTodo', this.item.id);
    }
  },
  components: {}
}
</script>

<style scoped>
.todo-item {
  padding: 10px 20px;
  margin: 5px 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid #fff;
}

input[type="checkbox"] {
  transform: scale(1.3);
  cursor: pointer;
}

.throw {
  text-decoration: line-through;
}

.controls {
  display: flex;
  align-items: center;
}

.controls div {
  margin: 0 6px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.controls div:hover {
  cursor: pointer;
}

.delete {
  color: #f00;
}

.edit {
  color: #58bb58;
}
</style>
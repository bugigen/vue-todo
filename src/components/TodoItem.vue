<template>
  <div class="todo-item" v-show="status === null || status === item.completed">
    <div class="controls">
      <div class="edit" @click="editMode = !editMode">
        <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
      </div>
      <div class="delete" @click="deleteTodo">
        <font-awesome-icon icon="fa-solid fa-trash-can"/>
      </div>
    </div>
    <div v-if="editMode">
      <input type="text" v-model="todo.todo" @keydown.enter="updateTodo">
    </div>
    <div v-else :class="{throw: item.completed}">{{ item.todo }}</div>
    <div>
      <input type="checkbox" :checked="item.completed" @click="check">
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'status'],
  name: "TodoItem",
  data() {
    return {
      todo: this.item,
      editMode: false,
    }
  },
  methods: {
    check() {
      this.$emit('checkItem', this.item.id);
    },
    deleteTodo() {
      this.$emit('deleteTodo', this.item.id);
    },
    updateTodo() {
      if (this.todo.todo !== '') {
        this.$emit('updateTodo', this.todo);
        this.editMode = false;
      }
    },
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
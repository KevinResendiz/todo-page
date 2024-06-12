<template>
    <div id="app">
        <h1>Lista de Tareas</h1>
        <input v-model="newTodo" placeholder="Agregar nueva tarea" @keyup.enter="addTodo">
        <ul>
        <TodoItem
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            :index="index"
            @remove="removeTodo"
        />
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import TodoItem from './TodoItem.vue';
    const newTodo = ref('');
    const todos = ref([
        { text: 'Aprender Vue.js', completed: false },
        { text: 'Construir una aplicación', completed: false },
        { text: 'Aprender Laravel', completed: false },
        { text: 'Construir una API Rest', completed: false },
    ]);
    
    const addTodo = () => {
        if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';
        }
    };
    const removeTodo = (index) => {
        todos.value.splice(index, 1);
    };
</script>
<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        margin-top: 60px;
    }
    input {
        padding: 10px;        
        font-size: 16px;
    }
    button {
        margin-left: 10px;
        padding: 5px 10px;
        font-size: 14px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>

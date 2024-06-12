<template>
<div id="ui">
<div class="row row-cols-5">
    <div class="col">
    <li :class="{ completed: todo.completed }">
        <input type="checkbox" v-model="todo.completed">
        <span>{{ todo.text }}</span>
    </li>
    </div>
    <div class="col">
        <li :class="{ completed: todo.completed }">
            <button @click="removeTodo">Eliminar</button>
        </li>
    </div>
</div>
</div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    todo: Object,
    index: Number,
});
const emit = defineEmits(['remove']);
const removeTodo = () => {
    emit('remove', props.index);
};
</script>
<style scoped>
.completed {
    text-decoration: line-through;
}

button{
margin-left:200px;
background-color:pink;
margin-bottom:10px;
}
span{
color:blue;

}
li{
text-align:left;
}

</style>

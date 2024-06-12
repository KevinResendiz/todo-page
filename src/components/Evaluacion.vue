<template>
    <div class="container">
        <h4>Registrar evaluacion</h4>
        <form class="row g-3" @submit.prevent="submitForm" id="userForm">
            


            <div class="col-md-8 position-relative">
                <label for="Password" class="form-label">texto-uno</label>
                <input type="password" class="form-control" v-model="formData.password" label="Password"
id="Password">
                <p v-for="error in v$.password.$errors" :key="error.$uid" class="text-danger m-0"> {{
error.$message }} </p>
            </div>


            <div class="col-md-8 position-relative">
                <label for="ConfirmPassword" class="form-label">texto-dos</label>
                <input type="password" class="form-control" v-model="formData.confirmPassword"
label="ConfirmPassword" id="ConfirmPassword">
                <p v-for="error in v$.confirmPassword.$errors" :key="error.$uid" class="text-danger m-0">
{{ error.$message }}</p>
            </div>



            <div class="col-md-12 position-relative">
                <button class="btn btn-primary">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script setup>

import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs, helpers } from '@vuelidate/validators'

const containsUser = (value) => {
    return value.includes('evaluacion')
}
const upperCase = (value) => {
    return /(?=.*[A-Z])/.test(value)
}
const specialCharacter = (value) => {
    return /([!@#$%^&amp;*])/.test(value)
}

const numberCharacter = (value) => {
    return /(?=.*\d)/.test(value)
}
const spaces = (value) => {
    return (value || '').indexOf(' ') < 0
}
const formData = reactive({
    password: '',
    confirmPassword: ''
})
// Se puede cambiar el idioma de los mensajes implementando i18n https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support
const requiredMessage = 'El campo es obligatorio'
const rules = computed(() => {
    return {
        username: {
            required: helpers.withMessage(requiredMessage, required),
            minLength: minLength(8),
            containsUser: helpers.withMessage('El campo debe tener la palabra bsl', containsUser) ,
            spaces: helpers.withMessage('No se permiten espacios', spaces)
        },
        email: { required, email },
        password: {
            required,
minLength: minLength(15),
            upperCase: helpers.withMessage('Debe contener al menos una Mayúscula', upperCase),
            specialCharacter: helpers.withMessage('Debe contener un carácter especial', specialCharacter),
            numberCharacter: helpers.withMessage('Debe contener un carácter numérico', numberCharacter),
            spaces: helpers.withMessage('No se permiten espacios', spaces),
containsUser: helpers.withMessage('El campo debe tener la palabra evaluacion', containsUser) 
        },
        confirmPassword: { required, sameAs: sameAs(formData.password) }
    }
})
const v$ = useVuelidate(rules, formData)
const submitForm = async () => {
    const result = await v$.value.$validate()
    if(result){
        alert('success, form submitted!')
    }else{
        alert('error, form not submitted!')
    }
}
</script>

<style scope>
#userForm {
margin-bottom: 150px;}
</style>
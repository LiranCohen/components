<template>
    <section>
        <TextInput id="password" type="password" @input="validatePasswordHandler" v-model="passwordVal">Password</TextInput>
        <TextInput id="confirmPass" type="password" @input="validateConfirmPasswordHandler" v-model="confirmPassVal">Confirm Password</TextInput>
        <ErrorMessage :message="passwordMessageText"/>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import TextInput from './TextInput.vue';
import ErrorMessage from './ErrorMessage.vue';

const Props = Vue.extend({
    components: {
        TextInput,
        ErrorMessage,
    },
    props: {
        id: {
            type: String,
            requred: true,
        },
        validatePassword: {
            type: Function,
            required: true,
        },
        validateConfirmPassword: {
            type: Function,
            required: true,
        },
        passwordMessageText: {
            type: String,
        },
    },
});
@Component
export default class PasswordInput extends Props {
    private passwordVal: string = '';
    private confirmPassVal: string = '';

    private validatePasswordHandler(): void {
        this.validatePassword();
    }

    private validateConfirmPasswordHandler(): void {
        this.validateConfirmPassword();
    }
    
    public password(): string {
        return this.passwordVal;
    }

    public confirmPassword(): string {
        return this.confirmPassVal;
    }
}
</script>


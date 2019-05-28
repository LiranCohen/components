<template>
    <section>
        <TextInput id="password" type="password" @input="validatePassword" v-model="password">Password</TextInput>
        <TextInput id="confirmPass" type="password" @input="matchPassword" v-model="confirmPass">Confirm Password</TextInput>
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
        validate: {
            type: Function,
        },
        passwordRegex: {
            type: String,
            default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{8,16}$',
        },
        passwordRegexMessage: {
            type: String,
            default: 'Please choose a stronger passwored',
        },
        passwordMatchMessage: {
            type: String,
            default: 'Your password entries do not match.',
        },
    },
});
@Component
export default class PasswordInput extends Props {
    private password: string = '';
    private confirmPass: string = '';
    private passwordMessageText: string = '';

    private pattern = new RegExp(this.passwordRegex, 'gm');

    private validatePassword(): void {
        if (this.password.length === 0) {
            this.passwordMessageText = '';
        } else if (this.validate) {
            this.passwordMessageText = this.validate(this.password);
            return;
        } else if (this.pattern.test(this.password) === false) {
            this.passwordMessageText = this.passwordRegexMessage;
            return;
        }
        this.passwordMessageText = '';
        return;
    }

    private matchPassword(): void {
        if (this.confirmPass.length > 0 && this.password !== this.confirmPass) {
            this.passwordMessageText = this.passwordMatchMessage;
            return;
        }
        this.passwordMessageText = '';
        return;
    }

    get passwordMessage(): string {
        return this.passwordMessageText;
    }

}
</script>


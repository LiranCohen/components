<template>
    <PasswordInputComponent ref="passwordInput" :id="id" :validatePassword="validatePassword" :validateConfirmPassword="validateConfirmPassword" :passwordMessageText="passwordMessageText"/>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    import PasswordInputComponent from '../../components/PasswordInput.vue';

    const Props = Vue.extend({
        components: {
            PasswordInputComponent,
        },
        props: {
            id: {
                type: String,
                requred: true,
            },
        },
    });
    @Component
    export default class PasswordInput extends Props {

        private passwordMessageText: string = '';

        private validatePassword(): void {
            this.setPasswordMessage('Validate Password Handler');
            console.log(`Password: ${this.password()}`);
            console.log(`Confirm Password: ${this.confirmPassword()}`);
        }

        private validateConfirmPassword(): void {
            this.setPasswordMessage('Validate Confirm Password Handler');
            console.log(`Password: ${this.password()}`);
            console.log(`Confirm Password: ${this.confirmPassword()}`);
        }

        private password(): string {
            const passwordInput = this.$refs.passwordInput as PasswordInput;
            return passwordInput.password();
        }

        private confirmPassword(): string {
            const passwordInput = this.$refs.passwordInput as PasswordInput;
            return passwordInput.confirmPassword();
        }

        private setPasswordMessage(message: string): void {
            this.passwordMessageText = message
        }
    }
</script>


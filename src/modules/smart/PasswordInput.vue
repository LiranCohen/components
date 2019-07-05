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
    @Component({
        components: { PasswordInputComponent },
    })
    export default class PasswordInput extends Props {

        private passwordMessageText: string = '';
        private confirmed: boolean = false;

        private validatePassword(): void {
            if (this.password().length > 0 && this.password().length < 8) {
                this.setPasswordMessage('Password is not long enough');
            } else {
                this.setPasswordMessage('');
                this.validateConfirmPassword();
            }
        }

        private validateConfirmPassword(): void {
            if (this.confirmPassword().length > 0 && this.password().length > 0 && this.confirmPassword() === this.password()) {
                this.setPasswordConfirmed(true);
            } else if (this.confirmPassword().length > 0 && this.confirmPassword() !== this.password()){
                this.setPasswordMessage('Passwords do not match');
            }
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
            this.setPasswordConfirmed(false);
            this.passwordMessageText = message
        }

        private setPasswordConfirmed(status: boolean): void {
            if (status === true) {
                this.passwordMessageText = '';
            }
            this.confirmed = status;
        }
    }
</script>


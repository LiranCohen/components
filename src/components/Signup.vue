<template>
<div class="row justify-content-center">
<div class="col-md-6">
    <Card>
        <template v-slot:header>
            <CardTitle>
                {{ title }}
                <template v-slot:float-right>
                    <ButtonLink :href="loginLink" class="">Log in</ButtonLink>
                </template>
            </CardTitle>
        </template>
        <form>
	        <div class="form-row">
		        <TextInput id="firstname" placeholder="John" class="col">First name</TextInput>
		        <TextInput id="lastname" placeholder="Smith" class="col">Last name</TextInput>
	        </div> 
            <TextInput type="email" id="email" placeholder="john@sample.com">Email address<template v-slot:SmallText>We'll never share your email with anyone else.</template></TextInput>
	        <PasswordInput ref="passwordInput" :validatePassword="validatePassword" :validateConfirmPassword="validateConfirmPassword" :passwordMessageText="passwordMessageText"/>
            <Button :submit="submit">Register</Button>
            <SmallText>By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</SmallText>                                          
        </form>
        <template v-slot:footer>
            <div class="text-center">Have an account? <a :href="loginLink">Log In</a></div>
        </template>
    </Card>
</div> <!-- col.//-->
</div> <!-- row.//-->
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';;

import Card from './Card.vue';
import CardTitle from './CardTitle.vue';
import Button from './Button.vue';
import ButtonLink from './ButtonLink.vue';
import SmallText from './SmallText.vue';
import TextInput from './TextInput.vue';
import PasswordInput from './PasswordInput.vue';
import User from '../models/user';

const Props = Vue.extend({
    components: {
        Card,
        CardTitle,
        Button,
        ButtonLink,
        SmallText,
        TextInput,
        PasswordInput,
    },
    props: {
        title: {
            type: String,
            default: 'Signup Form',
        },
        loginLink: {
            type: String,
            default: '#',
        },
        submit: {
            type: Function,
            required: true,
        },
        validatePassword: {
            type: Function,
            requred: true,
        },
        validateConfirmPassword: {
            type: Function,
            required: true,
        },
        passwordMessageText: {
            type: String,
            required: true,
        },
    },
});
@Component
export default class Signup extends Props {
    private firstname: string = '';
    private lastname: string = '';
    private email: string = '';

    public password(): string {
        const passwordInput = this.$refs.passwordInput as PasswordInput;
        return passwordInput.password();
    }

    public confirmPassword(): string {
        const passwordInput = this.$refs.passwordInput as PasswordInput;
        return passwordInput.confirmPassword();
    }

    public user(): User {
        return new User(this.firstname, this.lastname, this.email, this.password());
    }

}

</script>
<style>

</style>


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
	        <PasswordInput :validate="validatePassword"></PasswordInput>
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import Card from '../Card.vue';
import CardTitle from '../CardTitle.vue';
import Button from '../Button.vue';
import ButtonLink from '../ButtonLink.vue';
import SmallText from '../SmallText.vue';
import TextInput from '../TextInput.vue';
import PasswordInput from '../PasswordInput.vue';
import User from '../../models/user';

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
        signUp: {
            type: Function,
            required: true,
        },
        validate: {
            type: Function,
            requred: true,
        },
        passwordError: {
            type: Function,
            required: true,
        },
    },
});

@Component
export default class Signup extends Props {
    private password: string = '';
    private confirmPass: string = '';
    private firstname: string = '';
    private lastname: string = '';
    private email: string = '';

    private user: User = new User(this.firstname, this.lastname, this.email, this.password);
    private passwordErrorText: string = this.passwordError();

    public validatePassword(password: string): string {
        if (password.length < 9) {
            return 'Password is less than nine';
        }
        return '';
    }

    private submit(event: Event): void {
        event.preventDefault();
        return this.signUp(this.user);
    }
}

</script>
<style>

</style>


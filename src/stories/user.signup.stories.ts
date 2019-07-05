/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Signup from '../components/Signup.vue';

let passwordErrorText = '';

storiesOf('Modules/User', module)
  .add('Signup Form', () => ({
    components: { Signup },
    data: () => {
      return {
        data : {
          signUp: () => {
            window.alert('Signup Function');
            return;
          },
          validatePassword: () => { window.alert('validate handler')},
          validateConfirmPassword: () => { window.alert('confirm handler')},
          passwordError: 'Password Error Test',
          loginLink: '#',
        },
      };
    },
    template: '<Signup v-bind="data"/>',
  }));
//   validate: (password: string) => {
//     const passwordRegexVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/gm;
//     if (!passwordRegexVal.test(password)) {
//       passwordErrorText = 'Please choose a stronger password';
//     } else {
//       passwordErrorText = '';
//     }
//     return;
// },
// passwordError: () => passwordErrorText,
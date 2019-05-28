/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Signup from '../components/user/Signup';
import '../plugins/bootstrap-vue';

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
          validate: (password: string) => {
              const passwordRegexVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/gm;
              if (!passwordRegexVal.test(password)) {
                passwordErrorText = 'Please choose a stronger password';
              } else {
                passwordErrorText = '';
              }
              return;
          },
          passwordError: () => passwordErrorText,
          loginLink: '#',
        },
      };
    },
    template: '<signup v-bind="data"></signup>',
  }));

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import TextInput from '../components/TextInput.vue';
import PasswordInput from '../components/PasswordInput.vue';
import '../plugins/bootstrap-vue';

let passwordErrorText = '';

storiesOf('Components/Inputs', module)
  .add('Default Text Input', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><TextInput v-bind="data"/></div></div></div>',
  }))
  .add('Text Input with Label', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><TextInput v-bind="data">Input Label</TextInput></div></div></div>',
  }))
  .add('Text Input with SmallText', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><TextInput v-bind="data"><template v-slot:SmallText>Small text below the input box.</template></TextInput></div></div></div>',
  }))
  .add('Password Input', () => ({
    components: { PasswordInput },
    data: () => {
      return {
        data : {
        },
      };
    },
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><PasswordInput v-bind="data"></PasswordInput></div></div></div>',
  }));

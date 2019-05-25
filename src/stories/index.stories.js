/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import Signup from '../components/user/Signup.vue'

storiesOf('User', module)
  .add('Signup Form', () => ({
    components: { Signup },
    data: () =>  { return {
      title: "SignUp Form",
    };
  },
  }))

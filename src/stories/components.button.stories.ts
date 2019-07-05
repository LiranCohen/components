/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { SixColumns } from './components.decorators.stories';

import Button from '../components/Button.vue';

storiesOf('Components/Buttons/Button', module)
  .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { Button },
    data: () => {
      return {
        data : {
          submit: (e: Event) => {
            e.preventDefault();
            alert("Primary Submit Triggered")
          }
        },
      };
    },
    template: '<Button v-bind="data">Test Button</Button>',
  }))
  .add('Warning', () => ({
    components: { Button },
    data: () => {
      return {
        data : {
          classValue: 'btn-warning',
          submit: (e: Event) => {
            e.preventDefault();
            alert("Warning Submit Triggered")
          }
        },
      };
    },
    template: '<Button v-bind="data">Test Button</Button>',
  }))
  .add('Danger', () => ({
    components: { Button },
    data: () => {
      return {
        data : {
          classValue: 'btn-danger',
          submit: (e: Event) => {
            e.preventDefault();
            alert("Danger Submit Triggered")
          }
        },
      };
    },
    template: '<Button v-bind="data">Test Button</Button>',
  }));
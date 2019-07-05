/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { SixColumns } from './components.decorators.stories';

import ButtonLink from '../components/ButtonLink.vue';

storiesOf('Components/Buttons/ButtonLink', module)
    .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { ButtonLink },
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
    template: '<ButtonLink v-bind="data">Test Button</ButtonLink>',
  }))
  .add('Warning', () => ({
    components: { ButtonLink },
    data: () => {
      return {
        data : {
          classValue: 'btn-outline-warning',
          submit: (e: Event) => {
            e.preventDefault();
            alert("Warning Submit Triggered")
          }
        },
      };
    },
    template: '<ButtonLink v-bind="data">Test Button</ButtonLink>',
  }))
  .add('Danger', () => ({
    components: { ButtonLink },
    data: () => {
      return {
        data : {
          classValue: 'btn-outline-danger',
          submit: (e: Event) => {
            e.preventDefault();
            alert("Danger Submit Triggered")
          }
        },
      };
    },
    template: '<ButtonLink v-bind="data">Test Button</ButtonLink>',
  }))
  ;

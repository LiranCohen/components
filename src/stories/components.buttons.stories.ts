/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Button from '../components/Button.vue';
import ButtonLink from '../components/ButtonLink.vue';
import '../plugins/bootstrap-vue';

let passwordErrorText = '';

storiesOf('Components/Buttons', module)
  .add('Default Button', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><Button v-bind="data">Test Button</Button></div></div></div>',
  }))
  .add('Warning Button', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><Button v-bind="data">Test Button</Button></div></div></div>',
  }))
  .add('Danger Button', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><Button v-bind="data">Test Button</Button></div></div></div>',
  }))
  .add('Default ButtonLink', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><ButtonLink v-bind="data">Test Button</ButtonLink></div></div></div>',
  }))
  .add('Warning ButtonLink', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><ButtonLink v-bind="data">Test Button</ButtonLink></div></div></div>',
  }))
  .add('Danger ButtonLink', () => ({
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
    template: '<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6"><ButtonLink v-bind="data">Test Button</ButtonLink></div></div></div>',
  }))
  ;

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { SixColumns } from './components.decorators.stories';

import Card from '../components/Card.vue';
import CardTitle from '../components/CardTitle.vue';
import ButtonLink from '../components/ButtonLink.vue';

const loremIpsum = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin malesuada, eros suscipit venenatis euismod, dolor nisl cursus nulla, a pharetra velit orci ut sem.
        Quisque eu lacinia nulla, pellentesque imperdiet ex. Donec semper sollicitudin sem in ultrices.
        Mauris tristique urna leo, et luctus nibh bibendum quis. Nunc ac vulputate velit, vel aliquet ipsum.
        Quisque tempus lorem nibh, at elementum turpis venenatis in.Sed tortor ligula, sollicitudin at maximus eu, scelerisque id massa.
        Aenean sodales tellus lectus, eu fermentum dolor tempus ac. Donec in ante sit amet nisl vestibulum tincidunt eu nec augue.
        Mauris eget nisi id tortor tristique facilisis in vel tellus.</p>`


storiesOf('Components/Containers/Card', module)
  .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { Card },
    data: () => {
      return {
        title: 'Default Card',
        data : {
        },
      };
    },
    template: `
      <Card v-bind="data">
        <template v-slot:header>{{ title }}</template>
        ${loremIpsum}
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>`,
  }));

  storiesOf('Components/Containers/Card/CardTitle', module)
  .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { Card, CardTitle },
    data: () => {
      return {
        title: 'Card With Title',
        data: {
        },
      };
    },
    template: `
    <Card v-bind="data">
        <template v-slot:header>
          <CardTitle>{{ title }}</CardTitle>
        </template>
        ${loremIpsum}
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>`,
  }));

  storiesOf('Components/Containers/Card/CardTitle/BottonLink', module)
  .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { Card, CardTitle, ButtonLink },
    data: () => {
      return {
        title: 'Card With Title',
        data: {
        },
      };
    },
    template: `
    <Card v-bind="data">
        <template v-slot:header>
          <CardTitle>
            {{ title }}
            <template v-slot:float-right>
              <ButtonLink href="#">HeaderLink</ButtonLink>
            </template>
          </CardTitle>
        </template>
        ${loremIpsum}
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>`,
  }));

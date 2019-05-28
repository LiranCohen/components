/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Card from '../components/Card.vue';
import CardTitle from '../components/CardTitle.vue';
import ButtonLink from '../components/ButtonLink.vue';
import '../plugins/bootstrap-vue';

let passwordErrorText = '';

storiesOf('Components/Card', module)
  .add('Default Card', () => ({
    components: { Card },
    data: () => {
      return {
        title: 'Default Card',
        data : {
        },
      };
    },
    template: `<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6">
      <Card v-bind="data">
        <template v-slot:header>{{ title }}</template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, eros suscipit venenatis euismod, dolor nisl cursus nulla, a pharetra velit orci ut sem. Quisque eu lacinia nulla, pellentesque imperdiet ex. Donec semper sollicitudin sem in ultrices. Mauris tristique urna leo, et luctus nibh bibendum quis. Nunc ac vulputate velit, vel aliquet ipsum. Quisque tempus lorem nibh, at elementum turpis venenatis in. Sed tortor ligula, sollicitudin at maximus eu, scelerisque id massa. Aenean sodales tellus lectus, eu fermentum dolor tempus ac. Donec in ante sit amet nisl vestibulum tincidunt eu nec augue. Mauris eget nisi id tortor tristique facilisis in vel tellus.</p>
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>
    </div></div></div>`,
  }))
  .add('With Card Title', () => ({
    components: { Card, CardTitle },
    data: () => {
      return {
        title: 'Card With Title',
        data: {
        },
      };
    },
    template: `<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6">
    <Card v-bind="data">
        <template v-slot:header>
          <CardTitle>{{ title }}</CardTitle>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, eros suscipit venenatis euismod, dolor nisl cursus nulla, a pharetra velit orci ut sem. Quisque eu lacinia nulla, pellentesque imperdiet ex. Donec semper sollicitudin sem in ultrices. Mauris tristique urna leo, et luctus nibh bibendum quis. Nunc ac vulputate velit, vel aliquet ipsum. Quisque tempus lorem nibh, at elementum turpis venenatis in. Sed tortor ligula, sollicitudin at maximus eu, scelerisque id massa. Aenean sodales tellus lectus, eu fermentum dolor tempus ac. Donec in ante sit amet nisl vestibulum tincidunt eu nec augue. Mauris eget nisi id tortor tristique facilisis in vel tellus.</p>
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>
    </div></div></div>`
  }))
  .add('With Card Title and Link', () => ({
    components: { Card, CardTitle, ButtonLink },
    data: () => {
      return {
        title: 'Card With Title',
        data: {
        },
      };
    },
    template: `<div class="container" style="margin-top:20px"><div class="row justify-content-center"><div class="col-md-6">
    <Card v-bind="data">
        <template v-slot:header>
          <CardTitle>
            {{ title }}
            <template v-slot:float-right>
              <ButtonLink href="#">HeaderLink</ButtonLink>
            </template>
          </CardTitle>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, eros suscipit venenatis euismod, dolor nisl cursus nulla, a pharetra velit orci ut sem. Quisque eu lacinia nulla, pellentesque imperdiet ex. Donec semper sollicitudin sem in ultrices. Mauris tristique urna leo, et luctus nibh bibendum quis. Nunc ac vulputate velit, vel aliquet ipsum. Quisque tempus lorem nibh, at elementum turpis venenatis in. Sed tortor ligula, sollicitudin at maximus eu, scelerisque id massa. Aenean sodales tellus lectus, eu fermentum dolor tempus ac. Donec in ante sit amet nisl vestibulum tincidunt eu nec augue. Mauris eget nisi id tortor tristique facilisis in vel tellus.</p>
        <template v-slot:footer>
            <div class="text-center">Card Footer Goes Here</div>
        </template>
      </Card>
    </div></div></div>`
  }));

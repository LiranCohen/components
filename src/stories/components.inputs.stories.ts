/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { SixColumns } from './components.decorators.stories';

import TextInput from '../components/TextInput.vue';


storiesOf('Components/Inputs/TextInput', module)
  .addDecorator(SixColumns)
  .add('Default', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: '<TextInput v-bind="data"/>',
  }))
  .add('w/ Label', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: '<TextInput v-bind="data">Input Label</TextInput>',
  }))
  .add('w/ SmallText', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: `<TextInput v-bind="data">
                    <template v-slot:SmallText>
                        Small text below the input box.
                    </template>
                </TextInput>`,
  }))
  .add('w/ Label, SmallText', () => ({
    components: { TextInput },
    data: () => {
      return {
        data : {
          placeholder: 'placeholder',
        },
      };
    },
    template: `<TextInput v-bind="data">
                    Input Label
                    <template v-slot:SmallText>
                        Small text below the input box.
                    </template>
                </TextInput>`,
  }));

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { SixColumns } from './components.decorators.stories';

import PasswordInput from '../components/PasswordInput.vue';
import PasswordInputSmart from '../modules/smart/PasswordInput.vue';
import PasswordInputDemo from '../modules/demo/PasswordInput.vue';

storiesOf('Components/Inputs/PasswordInput', module)
    .addDecorator(SixColumns)
    .add('w/ Message', ()=>({
        components: { PasswordInput },
        template: '<PasswordInput id="component-message" passwordMessageText="Password Error Message"\>',
    }))
    .add('wo/ Message', ()=>({
        components: { PasswordInput },
        template: '<PasswordInput id="component"\>',
    }))

storiesOf('Modules/Inputs/PasswordInput', module)
 .addDecorator(SixColumns)
 .add('Password Demo',() => ({
    components: { PasswordInput: PasswordInputDemo },
    template: '<PasswordInput id="password-input-demo"/>',
 }))
 .add('Password Smart',() => ({
    components: { PasswordInput: PasswordInputSmart },
    template: '<PasswordInput id="password-input-smarty"/>',
}));

<template>
    <div class="form-group">
		<label :for="id"><slot></slot></label>   
		<input :id="id" :type="type" class="form-control" :placeholder="placeholder" v-model="inputVal">
        <SmallText class="form-text"><slot name="SmallText"></slot></SmallText>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SmallText from './SmallText.vue';

const Props = Vue.extend({
    components: { SmallText },
    data() {
        return { inputVal: this.value };
    },
    watch: {
        inputVal(val) {
            this.$emit('input', val);
        },
    },
    props: {
        id: {
            type: String,
            requred: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
        },
    },
});
@Component
export default class TextInput extends Props {
}
</script>


<template>
    <div class="form-group">
        <button type="submit" :class="['btn', 'btn-block', classValue]" @click="click"><slot></slot></button>
    </div> 
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
    props: {
        classValue: {
            type: String,
            default: 'btn-primary',
        },
        submit: {
            type: Function,
            requred: true,
        },
    },
});

@Component
export default class Button extends Props {
    private click(e: Event): void {
        if (this.submit) {
            this.submit(e);
        }
    }
}
</script>


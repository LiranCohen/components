<template>
   <a :class="['btn', 'btn-block', classValue]" :href="href" @click="click"><slot></slot></a>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
    props: {
        classValue: {
            type: String,
            default: 'btn-outline-primary',
        },
        href: {
            type: String,
            default: '#',
        },
        submit: {
            type: Function,
        },
    },
});

@Component
export default class ButtonLink extends Props {
    private click(e: Event): void {
        if (this.submit) {
            this.submit(e);
        }
    }
}
</script>


<template>
	<span>
        <span class="float-right mt-1"><slot name="float-right"></slot></span>
        <h4 class="card-title mt-2"><slot></slot></h4>
	</span>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';;

const Props = Vue.extend({
    props: {
    },
});

@Component
export default class Button extends Props {
}
</script>


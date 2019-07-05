<template>
    <small class="text-muted"><slot></slot></small> 
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SmallText extends Vue {
}
</script>


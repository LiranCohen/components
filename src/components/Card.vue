<template>
<div class="card">
    <header class="card-header">
        <slot name="header"></slot>
    </header>
    <article class="card-body">
        <slot></slot>
    </article> <!-- card-body end .// -->
    <footer class="card-footer">
        <slot name="footer"></slot>
    </footer>
</div> <!-- card.// -->
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
    props: {
    },
});

@Component
export default class Button extends Props {
}
</script>


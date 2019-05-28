<template>
    <div class="form-group" v-if="message">
        <label class="text-danger">{{ message }}</label>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
     props: {
        message: {
            type: String,
            requred: true,
        },
     },
});
@Component
export default class ErrorMessage extends Props {
}
</script>


<template>
    <small class="text-muted"><slot></slot></small> 
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SmallText extends Vue {
}
</script>


<template>
    
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {
    @Prop(String) readonly title!: string 
}
</script>
<style>

</style>


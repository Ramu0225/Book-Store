<template>
	<NavBar />
	<h1>Hello</h1>
	<router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/common/NavBar.vue";
export default defineComponent({
	name: "App",
	components: {
		NavBar,
	},
});
</script>
<style lang="scss">
#app {
	width: 90%;
	margin: 0 auto;
	font-size: 12px;
}
</style>

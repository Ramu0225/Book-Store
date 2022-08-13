<template>
	<NavBar />
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
body {
	background-color: #eefefe;
	#app {
		width: 90%;
		margin: 0 auto;
	}
	ul {
		list-style: none;
	}
}
</style>

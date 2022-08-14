<template>
	<NavBar />
	<router-view />
</template>
<script setup lang="ts">
import NavBar from "./components/common/NavBar.vue";
</script>
<style lang="scss">
$btn-color: #31b73a;
body {
	background-color: #eefefe;
	font-family: "Exo 2", sans-serif, monospace;
	#app {
		width: 90%;
		margin: 0 auto;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
	}
}
</style>

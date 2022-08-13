<template>
	<div class="header">
		<router-link to="/"><AppLogo /></router-link>
		<CartIcon />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLogo from "./AppLogo.vue";
import CartIcon from "./CartIcon.vue";

export default defineComponent({
	name: "NavBar",
	components: {
		AppLogo,
		CartIcon,
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
	height: 70px;
	width: 100%;
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-bottom: 25px;
}
</style>

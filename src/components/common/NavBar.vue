<template>
	<div class="header">
		<router-link to="/"><AppLogo /></router-link>
		<routee-link to="/"><CartIcon /></routee-link>
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
	height: 30px;
	position: fixed;
	top: 0;
	width: 90%;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgb(18, 16, 16);
	color:snow;
	border-radius: 20px;
}
</style>

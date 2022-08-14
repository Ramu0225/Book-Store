<template>
	<div class="header">
		<router-link to="/"><AppLogo /></router-link>
		<div class="nav-items">
			<router-link to="/">SHOP</router-link>
			<router-link to="/cart"><CartIcon /></router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
import CartIcon from "./CartIcon.vue";
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
	background-color: rgba(18, 16, 16, 0.5);
	color: snow;
	border-radius: 20px;
	z-index: 3;
	.nav-items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		width: 100px;
	}
	a {
		color: greenyellow;
		transition: all 0.5s;
		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>

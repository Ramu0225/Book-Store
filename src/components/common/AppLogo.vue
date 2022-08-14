<template>
	<div class="logo-container">
		<img
			src="https://see.fontimg.com/api/renderfont4/mLZ3a/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjODlFOTYwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QlM/terasong.png"
			alt="BS"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AppLogo",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo-container {
	width: 30px;
	height: 30px;
	margin-top: 10px;
	margin-left: 25px;
	transition: all 1s;
	&:hover {
		transform: scale(1.1);
	}
}
</style>

<template>
	<div id="loader"><p>Books Loading</p></div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#loader {
	width: 50px;
	height: 90px;
	position: absolute;
	right: 50%;
	top: 50%;
	transform: translate(50%, -50%);
	background: lightblue;
	animation: rotate 1.2s linear infinite;
	padding: 2px;
	color: green;
	display: flex;
	justify-content: center;
	align-items: center;
	@keyframes rotate {
		0% {
			transform: rotatey(0deg);
		}
		100% {
			transform: rotatey(360deg);
		}
	}
}
</style>

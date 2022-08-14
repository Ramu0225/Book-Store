<template>
	<div id="error">We didn't expect this!! Please try again</div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#error {
	height: 100px;
	line-height: 100px;
	position: absolute;
	right: 50%;
	top: 50%;
	transform: translate(50%, -50%);
	background: lightblue;
	vertical-align: middle;
	text-align: center;
	padding: 20px;
	border-radius: 5px;
}
</style>

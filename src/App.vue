<template>
	<NavBar />
	
	<Footer/>
	<router-view />

</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/common/NavBar.vue";
import Footer from "./components/common/Footer.vue";
export default defineComponent({
	name: "App",
	components: {
    NavBar,
    Footer
},
});
</script>
<style lang="scss">
#app {
	width: 100%;
	height:90vh;
	
}
body{
background-color: #EEFEFE;
}
</style>

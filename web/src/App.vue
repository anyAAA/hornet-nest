<template>
 <f7-app :params="f7params">
        <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
        <f7-statusbar></f7-statusbar>
		<f7-view main url='/'></f7-view>    
      </f7-app>
</template>

<script>
	import routes from './router/index';
	// console.log(routes)
export default{
	 data() {
	    return {
	      f7params: {
	        routes,
	        name: 'My App',
	        id: 'com.myapp.test',
			theme:'auto'
	      }
		  
	    };
	  },
	  
}

</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>

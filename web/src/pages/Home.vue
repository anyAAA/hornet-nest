<template>
	<f7-page>
	  <f7-navbar title="Awesome App"></f7-navbar>
	  <!-- Page content -->
	  <f7-block>
	    <p>Here comes main view page tedasdxqwwet</p>
	  </f7-block>
	  <!-- Buttons to open panels -->
	<f7-row>
	    <f7-col>
	      <f7-button panel-open="left">Left Panel</f7-button>
	    </f7-col>
	    <f7-col>
	      <f7-button panel-open="right">Right Panel</f7-button>
	    </f7-col>
	  </f7-row>
	  <!-- Button to open popup -->
	 <f7-button popup-open="#my-popup">Open Popup</f7-button>
	  <f7-button @click="tankuang">Open Popup</f7-button>
	  <f7-popup id="my-popup">
		
	   <!-- <f7-view>
	      <f7-page>
	        <f7-navbar title="Popup">
	          <f7-nav-right>
	            <f7-link popup-close>Close</f7-link>
	          </f7-nav-right>
	        </f7-navbar>
	        <f7-block>
	          <p>Here comes popup text</p>
	        </f7-block>
	      </f7-page>
	    </f7-view> -->
	  </f7-popup>
	  
	</f7-page>
</template>

<script>
export default{
	methods:{
		tankuang(){
			this.$f7ready((f7) => {
			  // f7.dialog.alert('您目前所在 Home.vue '+JSON.stringify(this.$device));
			  f7.dialog.alert(this.$f7route);
			});
		}
	},
	mounted() {
	      
	    },
}
</script>

<style>
</style>

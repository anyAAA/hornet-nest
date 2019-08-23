  <template>
    <f7-page :page-content="false">    
      <f7-toolbar :position="toolbarPosition" tabbar labels>
        <f7-link tab-link="#home" tab-link-active text="首页" icon-f7="favorites_alt_fill"></f7-link>
        <f7-link tab-link="#location" text="北京" icon-f7="navigation_round_fill"></f7-link>
        <f7-link tab-link="#hotel" text="订酒店" icon-f7="favorites_alt_fill"></f7-link>
		<f7-link tab-link="#tour" text="去旅行" icon-f7="cloud_fill"></f7-link>
        <f7-link tab-link="#me" text="我的" icon-f7="person_round_fill"></f7-link>
	  </f7-toolbar>

      <f7-tabs>
		  <!-- 首页 -->
        <f7-tab id="home" class="page-content" tab-active>
            <f7-view main url="/homeattention/"></f7-view>
		</f7-tab>
		<!-- 位置 -->
        <f7-tab id="location" class="page-content">
           <f7-view main url="/hotel/"></f7-view>
        </f7-tab>
		<!-- 酒店 -->
        <f7-tab id="hotel" class="page-content">
            <p>Tab 3 content</p>
           
        </f7-tab>
		<!-- 旅行 -->
		<f7-tab id="tour" class="page-content">
		
		   <f7-view main url="/tour/"></f7-view>
		   
		</f7-tab>
		<!-- 我的 -->
		<f7-tab id="me" class="page-content">
		 
		    <p>Tab 5 content</p>
		   
		</f7-tab>
		
      </f7-tabs>
    </f7-page>
  </template>
  <script>
    export default {
     
      data() {
        return {
          toolbarPosition: 'bottom',
        }
      },
      methods: {
        toggleToolbarPosition() {
          this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
        },
      },
    };
  </script>
<style lang="scss">
	p{
		margin: 0;
		padding: 0;
	}
</style>
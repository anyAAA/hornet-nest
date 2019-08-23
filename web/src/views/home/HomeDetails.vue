<template>
	<f7-page>
		<div>
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item>1</van-swipe-item>
			  <van-swipe-item>2</van-swipe-item>
			  <van-swipe-item>3</van-swipe-item>
			  <van-swipe-item>4</van-swipe-item>
			</van-swipe>
			<van-search placeholder="请输入搜索关键词" v-model="value" />
			
		</div>

	</f7-page>
	
	</f7-page>
</template>
<script>
	import Vue from 'vue';
	import { Search,Swipe,SwipeItem } from 'vant';

	
	Vue.use(Search).use(Swipe).use(SwipeItem);
	
	export default{
		
	}
	
</script>
<style lang="scss" scoped>
	
</style>

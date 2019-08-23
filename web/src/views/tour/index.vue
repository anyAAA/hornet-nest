<template>
	<f7-page>
		<!-- <f7-swiper  scrollbar>
		  <f7-swiper-slide>Slide 1</f7-swiper-slide>
		  <f7-swiper-slide>Slide 2</f7-swiper-slide>
		  <f7-swiper-slide>Slide 3</f7-swiper-slide>
		</f7-swiper> -->
		<van-swipe :autoplay="3000" indicator-color="white">
		    <van-swipe-item>1</van-swipe-item>
		    <van-swipe-item>2</van-swipe-item>
		</van-swipe>
		<!-- <van-search placeholder="请输入搜索关键词" v-model="value" /> -->
	<div class="header flex">
		<div>
			<f7-icon f7="book_fill" size="30px" color="red"></f7-icon>
			<div>酒店</div>
		</div>
		<div>
			<f7-icon f7="download_round_fill" size="30px" color="blue"></f7-icon>
			<div>机票火车票</div>
		</div>
		<div>
			<f7-icon f7="document_fill" size="30px" color="green"></f7-icon>
			<div>跟团游</div>
		</div>
		<div>
			<f7-icon f7="favorites_alt_fill" size="30px" color="purple"></f7-icon>
			<div>自由行</div>
		</div>
		<div>
			<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
			<div>当地玩乐</div>
		</div>
	</div>
	<f7-block class="oriented">
		<div class="header flex">
			<div>
				<f7-icon f7="book_fill" size="30px" color="yellow"></f7-icon>
				<div>酒店</div>
			</div>
			<div>
				<f7-icon f7="download_round_fill" size="30px" color="yellow"></f7-icon>
				<div>机票火车票</div>
			</div>
			<div>
				<f7-icon f7="document_fill" size="30px" color="yellow"></f7-icon>
				<div>跟团游</div>
			</div>
			<div>
				<f7-icon f7="favorites_alt_fill" size="30px" color="yellow"></f7-icon>
				<div>自由行</div>
			</div>
			<div>
				<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
				<div>当地玩乐</div>
			</div>
		</div>
		
		<div class="header flex">
			<div>
				<f7-icon f7="book_fill" size="30px" color="yellow"></f7-icon>
				<div>酒店</div>
			</div>
			<div>
				<f7-icon f7="download_round_fill" size="30px" color="yellow"></f7-icon>
				<div>机票火车票</div>
			</div>
			<div>
				<f7-icon f7="document_fill" size="30px" color="yellow"></f7-icon>
				<div>跟团游</div>
			</div>
			<div>
				<f7-icon f7="favorites_alt_fill" size="30px" color="yellow"></f7-icon>
				<div>自由行</div>
			</div>
			<div>
				<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
				<div>当地玩乐</div>
			</div>
		</div>
		<van-divider />

		<div class="boon">
			<div class="boon-honey">蜂蜜抵现</div>
			<div class="special-project">专项96折</div>
		</div>
	</f7-block>
	
	</f7-page>
	
</template>
<script>
	import Vue from 'vue';
	import { Search,Swipe,SwipeItem,Row, Col,Divider } from 'vant';

	
	Vue.use(Search).use(Swipe).use(SwipeItem).use(Row).use(Col).use(Divider);
	
	
	export default{
		
	}
	
</script>
<style lang="scss" scoped>
	.van-swipe{
		width: 100%;
		height: 10rem;
		// 
		// div{
		// 	width: 100%;
		// 	height: 100%;
		// 	background: url(../../assets/banner_sad.jpg) no-repeat;
		// 	background-size: 100%;
		// 	object-fit: cover;
		// 	touch-action: none;
		// }
		
	}
	.van-search{
		width: 100%;
		position: fixed;
		top: 0;
		padding:0;
	}
	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.block{
		margin: 0 0.8rem;
		padding-top: 0.5rem;
	}
	.header {
		margin: 0.5rem 0.8rem 0;
		
		// padding-bottom: ;
	
		&>div {
			text-align: center;
			margin: auto;
		}
	}
	.oriented{
		 background: white;
		 margin-top: 0.5rem;
	}
	.boon{
		display: flex;
		height:1rem;
		&>div{
			height:1rem;
			flex: 1;
			text-align: center;
			line-height: 0.1rem;
		}
	}
</style>

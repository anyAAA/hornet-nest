<template>
	<f7-page>
		<div class="search">
			<van-search placeholder="请输入搜索关键词" />
		</div>
		
		  <f7-list-item
		        title="Title"
		        subtitle="Subtitle"
		        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
		      >
		        <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" slot="media"></f7-skeleton-block>
		      </f7-list-item>
		      <f7-list-item
		        title="Title"
		        subtitle="Subtitle"
		        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
		      >
		        <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" slot="media"></f7-skeleton-block>
		      </f7-list-item>
		    </f7-list>
		
		<div class="absolut">
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
				<div class="header flex ">
					<div>
						<f7-icon f7="book_fill" size="30px" color="yellow"></f7-icon>
						<div>定制游</div>
					</div>
					<div>
						<f7-icon f7="download_round_fill" size="30px" color="yellow"></f7-icon>
						<div>酒店度假</div>
					</div>
					<div>
						<f7-icon f7="document_fill" size="30px" color="yellow"></f7-icon>
						<div>高铁游</div>
					</div>
					<div>
						<f7-icon f7="favorites_alt_fill" size="30px" color="yellow"></f7-icon>
						<div>邮轮游</div>
					</div>
					<div>
						<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
						<div>周边游</div>
					</div>
				</div>

				<div class="header flex">
					<div class="">
						<f7-icon f7="book_fill" size="30px" color="yellow"></f7-icon>
						<div>门票</div>
					</div>
					<div>
						<f7-icon f7="download_round_fill" size="30px" color="yellow"></f7-icon>
						<div>用车</div>
					</div>
					<div>
						<f7-icon f7="document_fill" size="30px" color="yellow"></f7-icon>
						<div>签证</div>
					</div>
					<div>
						<f7-icon f7="favorites_alt_fill" size="30px" color="yellow"></f7-icon>
						<div>保险</div>
					</div>
					<div>
						<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
						<div>更多</div>
					</div>
				</div>
				<van-divider />

				<div class="boon">
					<div class="boon-honey">蜂蜜抵现</div>
					<div class="special-project">专项96折</div>
				</div>
			</f7-block>

			<div class="be-bing">
				<div class="user">
					<div class="classify">正在旅行</div>
					<div class="official">北京</div>
				</div>
				<f7-toolbar tabbar>
					<f7-link tab-link="#t-1" tab-link-active>酒店</f7-link>
					<f7-link tab-link="#t-2">北京周边</f7-link>
					<f7-link tab-link="#t-3">当地热销</f7-link>
					<f7-link tab-link="#t-4">限时特惠</f7-link>
				</f7-toolbar>
				<f7-tabs>
					<f7-tab id="t-1" class="page-content" tab-active>
						<f7-block>
							<div data-pagination='{"el": ".swiper-pagination"}' data-space-between="6" data-slides-per-view="3" class="swiper-container swiper-init demo-swiper-multiple">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
								</div>
							</div>

						</f7-block>
					</f7-tab>
					<f7-tab id="t-2" class="page-content">
						<f7-block>
							<div data-pagination='{"el": ".swiper-pagination"}' data-space-between="6" data-slides-per-view="3" class="swiper-container swiper-init demo-swiper-multiple">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</f7-block>
					</f7-tab>
					<f7-tab id="t-3" class="page-content">
						<f7-block>
							<div data-pagination='{"el": ".swiper-pagination"}' data-space-between="6" data-slides-per-view="3" class="swiper-container swiper-init demo-swiper-multiple">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
								</div>
							</div>

						</f7-block>
					</f7-tab>
					<f7-tab id="t-4" class="page-content">
						<f7-block>
							<div data-pagination='{"el": ".swiper-pagination"}' data-space-between="6" data-slides-per-view="3" class="swiper-container swiper-init demo-swiper-multiple">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="carousel-back2">
											<div class="carousel-1 photo">
												<div class="corner-mark">景区/场馆</div>
											</div>
											<div class="title">
												暑期大促·故宫门票·北京故宫博物馆
											</div>
											<div class="price">
												<span><span class="sign">￥</span> 50</span><i>起</i>
											</div>
										</div>
									</div>
								</div>
							</div>

						</f7-block>
					</f7-tab>
				</f7-tabs>
				<!-- 正在旅行 -->
			</div>
			<!-- 每日蜂抢 -->
			<div class="snap-up">
				<div class="fengq-left">
					<div class="title">
						<div class="everyday">每日蜂抢</div>
						<div class="btny">天天都有蜂抢券</div>
					</div>
					<div class="ticket">
						<div class="label">
							<span class="price"><i>￥520</i> 起</span>
							<span class="reduce">已减280元</span>
						</div>
					</div>
					<div class="remind">
						日本三年多次旅游签证
					</div>
				</div>
				<!-- 右 -->
				<div class="feng-right">
					<div class="special-offer">特价机票</div>
					<div class="go">
						<div class="depart">北京出发</div>
						<div class="weigh">低价出发最划算 <span> 特价 </span></div>
					</div>
					<div class="air-ticket">
						<div class="special">特价酒店</div>
						<div class="hongkong">香港住哪里</div>
						<div class="super"><i>￥62</i> 起 <span>超值</span></div>
					</div>
				</div>
			</div>
			<div class="place">
				<h3>推荐目的地</h3>
				<div class="choose">
					<div class="destination">
						<div class="background">
							<div>普吉岛</div>
							<div>皮皮岛·人气</div>
						</div>
						<div class="place-space">
							<div>黔东南</div>
							<div>苗寨吊脚楼</div>
						</div>
						<div class="place-between">
							<div>青海湖</div>
							<div>最美油菜花</div>
						</div>
					</div>
					<div class="destination">
						<div class="background">
							<div>日本</div>
							<div>西瓜卡/ICOCA交通卡</div>
						</div>
						<div class="place-space">
							<div>丽江</div>
							<div>艳遇之都</div>
						</div>
						<div class="place-between">
							<div>泸沽湖</div>
							<div>女儿国</div>
						</div>
					</div>
					<div class="destination">
						<div class="background">
							<div>巴厘岛</div>
							<div>乌布热气球</div>
						</div>
						<div class="place-space">
							<div>长白山</div>
							<div>天地</div>
						</div>
						<div class="place-between">
							<div>肯尼亚</div>
							<div>动物大迁徙</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</f7-page>

</template>
<script>
	import Vue from 'vue';
	import {
		Search,
		Swipe,
		SwipeItem,
		Row,
		Col,
		Divider
	} from 'vant';

	Vue.use(Search).use(Swipe).use(SwipeItem).use(Row).use(Col).use(Divider);


	export default {

	}
</script>
<style lang="scss" scoped>
	.page {
		background: #ededed;
	}

	.absolut {
		width: 100%;
		background: #ededed;
		border-top-left-radius: 1em 1em;
		border-top-right-radius: 1em 1em;
		position: absolute;
		top: 10rem;
		z-index: 2;
	}

	.van-swipe {
		width: 100%;
		height: 10rem;
	}

	.search {
		height: 11rem;
		background: url(../../assets/banner_add.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: 0;
		padding: 0;

		.van-search {
			width: 92%;
			margin: 0 1rem 0;
			padding: 0;
			position: fixed;
			top: 1rem;

			.van-search__content {
				border-radius: 1rem;
			}
		}
	}

	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.block {
		margin: 0 0.8rem;
		padding-top: 0.5rem;
	}

	.header {

		margin: 0.5rem 0 0;
		padding-top: 0.6rem;
		// padding-bottom: ;

		&>div {
			text-align: center;
			margin: auto;
		}
	}

	.oriented {
		margin-top: 0.5rem;
		background: white;
		border-radius: 0.5rem;
		padding: 0;
	}

	// 横线
	.van-divider {
		margin: 0;
		padding-top: 1rem;
	}

	.boon {
		display: flex;
		height: 2rem;

		&>div {
			height: 2rem;
			flex: 1;
			text-align: center;
			line-height: 2rem;
		}

		.boon-honey {
			border-right: 1px solid #ebedf0;
		}
	}

	// 正在旅行
	.be-bing {
		margin: 0.5rem 0.8rem 0;
		background: white;
		border-radius: 0.5rem;

		.user {
			display: flex;
			padding: 0.5rem 0 0 0.5rem;

			.official {
				width: 1.8rem;
				background: orangered;
				font-size: 10px;
				font-weight: normal;
				color: #fed70f;
				line-height: 0.8rem;
				text-align: center;
				border-radius: 0.2rem;
			}

			.classify {
				margin-right: 0.4rem;
			}
		}

		.toolbar-inner {

			.tab-link {
				// width: 10px;
				// height: 5px;
				// font-size: 20px;
				// border: 1px solid #000;
			}
		}

	}

	// 正在旅行 - 滑动
	.carousel-1 {
		background: url(../../assets/share_miniprogram_pic.png);
	}
	.page-content{
		padding-bottom: 0;
	}
	.carousel-back2 {
		width: 5rem;

		.photo {
			position: relative;
			width: 5rem;
			height: 3.2rem;
			background-size: 100%;
			border-radius: 0.5rem;

			.corner-mark {
				position: absolute;
				top: 0;
				left: 0;
				width: 2.7rem;
				height: 0.8rem;
				border-top-left-radius: 1em;
				border-bottom-right-radius: 1em;
				background: rgba(0, 0, 0, 0.7);
				font-size: 8px;
				color: #fff;
				font-weight: normal;
				padding-left: 0.2rem;
			}

		}

		.title {
			font-size: 12px;
			color: #000;
			height: 2rem;
			overflow: hidden;
		}

		.price {
			line-height: 2rem;

			span {
				display: inline-block;

				font-weight: 600;
				color: orangered;
			}

			.sign {
				font-size: 10px;
			}

			i {
				margin-left: 0.2rem;
			}
		}

	}

	// 每日蜂抢 
	.snap-up{
		margin: 0.5rem 0.8rem 0;
		background: white;
		border-radius: 0.5rem;
		display:flex;
		// 每日蜂抢 左部
		.fengq-left{
			flex: 1;
			padding:0.6rem;
			.title{
				height:2rem;
				.everyday{
					display: inline-block;
					font-size:14px;
					font-weight: 600;
				}
				.btny{
					  display: inline-block;
					  font-size: 7px;
					  line-height: 2rem;
					  margin-left: 0.5rem;
				}
			}
			.ticket{
				height: 6rem;
				background:url(img_default_poi.png) no-repeat;
				background-size: 100% 100%;
				position:relative;
				.label{
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height:1.5rem;
					
					.price{
						width: 40%;
						height:1.5rem;
						line-height: 1.5rem;
						display: inline-block;
						background: orangered;
						color: #fff;
						border-top-right-radius:1rem;
						border-bottom-right-radius:1rem;
						position: absolute;
						bottom: -0.1rem;
						left: 0;
						i{
							font-size: 14px;
							font-weight: 600;
						}
					}
					.reduce{
						width: 100%;
						height:1.5rem;
						line-height: 1.5rem;
						display: inline-block;
						width: 100%;
						background: yellow;
						color: #000000;
						text-indent: 4.5rem;
					}
				}
			}
			.remind{
				height: 2rem;
				line-height: 2rem;
				font-size: 14px;
				font-weight: 600;
			}
		}
		.feng-right{
			flex: 1;
			padding:0.6rem;
			.special-offer{
				margin-top: 0.1rem;
				width: 3.5rem;
				height: 1.2rem;
				text-align: center;
				line-height: 1.2rem;
				font-size: 10px;
				font-weight: 600;
				color: royalblue;
				background: #d5f7fc;
			}
			.go{
				display:flex;
				padding-left: 0.4rem;
				flex-direction: column;
				 // align-items:center;/*垂直居中*/
				justify-content: center;/*水平居中*/
				width:100%;
				height:4rem;
				background:#f9fbf8;
				border-radius:0.5rem;
		
				.depart{
					height: 1.5rem;
					line-height: 1.5rem;
					font-weight: 600;
					font-size: 12px;
				}
				
				.weigh{
					height: 1.5rem;
					line-height: 1.5rem;					
					font-weight:normal;
					span{
						background: #fce0e1;
						color: #f28086;
						font-size: 11px;
					}
				}
			}
			.air-ticket{
				display:flex;
				padding-left: 0.4rem;
				flex-direction: column;
			 // align-items:center;/*垂直居中*/
				justify-content: center;/*水平居中*/
				width:100%;
				height:4rem;
				background:#f9fbf8;
				border-radius:0.5rem;
				background: #d3f9f5;
				position:relative;
				.special{
					position:absolute;
					top: 0;
					left: 0;
					width: 3.5rem;
					height: 1rem;
					text-align: center;
					line-height: 1rem;
					font-size: 10px;
					color: #fff;
					background: #20bcdd;
					border-top-left-radius:0.5rem;
					border-bottom-right-radius:0.5rem;
				}
				.hongkong{
					height: 1.6rem;
					line-height: 1.6rem;
					font-weight: 600;
					font-size: 12px;
				}
				.super{
					height: 1rem;
					line-height: 1rem;					
					font-weight:normal;
					i{
						font-size: 12px;
						font-weight: 600;
						color: orangered;
					}
					span{
						background: #fce0e1;
						color: #f28086;
						font-size: 11px;
					}
				}
			}
		}
	}
	// 推荐目的地
	.place{
		margin: 0.5rem 0.8rem 0;
		background: white;
		border-radius: 0.5rem;
		padding:0.5rem;
		h3{
			font-size: 14px;
			line-height: 2rem;
		}
		.choose{
			display:flex;
		}
		.destination{
			flex:1;
			width: 100%;
			
			.background{
				width: 100%;
				height: 4rem;
				background: url(../../assets/banner_add.jpg) no-repeat;
				background-size:100% 100%;
				border-radius: 0.3rem;
				padding-top:1.5rem;
				text-align: center;
				&>div:nth-child(1){
					color: #fff;
					font-size: 12px;
					font-weight: 600;
					line-height: 1.4rem;
					text-align: center;
				}
				&>div:nth-child(2){
					display: inline-block;
					background: rgba(7,17,27,0.4);
					height: 1.2rem;
					font-size: 11px;
					font-weight: normal;
					color: #fff;
					text-align: center;
					padding: 0 0.3rem 0;
					border-radius: 0.8rem;
					overflow:hidden;
				}
			}
			.place-space{
				width:100%;
				text-align:center;
				margin-top:0.5rem;
				&>div:nth-child(1){
					color: #000;
					font-size: 12px;
					font-weight: 500;
					line-height: 1.4rem;
					text-align: center;
					margin: 0 auto;
				}
				&>div:nth-child(2){
					display: inline-block;
					background: rgba(7,17,27,0.1);
					height: 1.2rem;
					line-height: 1.2rem;
					font-size: 11px;
					font-weight: normal;
					color: #000;
					text-align: center;
					padding: 0 0.3rem 0;
					border-radius: 0.8rem;
					overflow:hidden;
				}
			}
			.place-between{
				width:100%;
				text-align:center;
				margin-top:0.5rem;
				&>div:nth-child(1){
					color: #000;
					font-size: 12px;
					font-weight: 500;
					line-height: 1.4rem;
					text-align: center;
					margin: 0 auto;
				}
				&>div:nth-child(2){
					display: inline-block;
					background: rgba(7,17,27,0.1);
					height: 1.2rem;
					line-height: 1.2rem;
					font-size: 11px;
					font-weight: normal;
					color: #000;
					text-align: center;
					padding: 0 0.3rem 0;
					border-radius: 0.8rem;
					overflow:hidden;
				}
			}
		}
	}
</style>

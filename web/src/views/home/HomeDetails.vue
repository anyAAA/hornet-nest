<template>
	<f7-page>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div>
			<f7-link back class="back">
				<f7-icon f7="chevron_left" size="30px" color="white"></f7-icon>
			</f7-link>
			<van-swipe @change="onChange">
				<van-swipe-item>
					<img src="../../assets/carousel1.jpeg" alt="">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/carousel3.jpeg" alt="">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/carousel4.jpeg" alt="">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/person.8.21.1.jpeg" alt="">
				</van-swipe-item>

				<div class="custom-indicator" slot="indicator">
					{{ current + 1 }}/4
				</div>
			</van-swipe>
		</div>
		<!-- 加载状态 -->
		<f7-col v-if="isShow" class="loading">
			<f7-preloader :size="20" class="loadingGo"></f7-preloader>
		</f7-col>
		<f7-block class="main-body">
			<div class="issue">
				<div class="photo">
					<img src="../../assets/head_portrait1.jpeg" alt="">
				</div>
				<div class="text">
					<div class="author">
						<div class="name">我叫肉思 <span>LV.26</span></div>
						<div class="time">03-1发布</div>
					</div>
					<div class="attention">+ 关注</div>
				</div>
			</div>
			<div class="label">
				<div class="classify">种草</div>
				<div class="classify">Z SPACE</div>
			</div>
			<div class="content">
				<p>
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
					Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
				</p>
				<div class="eit">
					<f7-link href="/homedetails/" class="clock-in">
						# 春日不宅打卡挑战
					</f7-link>
					<f7-link href="/homedetails/" class="clock-in">
						# 网红打卡地
					</f7-link>
					<f7-link href="/homedetails/" class="clock-in">
						# 发现一处小众秘境
					</f7-link>
				</div>
			</div>
			 <f7-block strong inset class="cord">
				<div class="pic">
					<img width="50" height="50" src="../../assets/person_8.20_3.jpeg" alt="">
					<div class="foods">美食</div>
				</div>
				<div class="place">
					<div class="title">Z SPACE</div>
					<div class="remark-on"><span>67</span>篇点评</div>
					<div class="space">位于东城区·后海、南锣鼓巷周边</div>
				</div>
			 </f7-block>
		</f7-block>
		<!-- 下拉刷新 -->
		</van-pull-refresh>
		<!-- 相关推荐 -->
	
		
	</f7-page>
</template>
<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem,
		PullRefresh,
		Toast 
	} from 'vant';
	Vue.use(Swipe).use(SwipeItem).use(PullRefresh).use(Toast);
	
	export default {
		data() {
			return {
				isShow: true,
				current: 0,
				isgo: true,
				isLoading: false
			}
		},
		mounted() {
			setTimeout(() => {
				this.isShow = false
			}, 1500)
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
			onRefresh() {
			      setTimeout(() => {
			        this.$toast('刷新成功');	
					this.isLoading = false;
			      }, 1000);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.back {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		z-index: 100;
	}

	.van-swipe {
		position: relative;

		.van-swipe-item {
			img {
				width: 100%;
				height: 100%;
			}
		}

		.custom-indicator {
			position: absolute;
			bottom: 0.5rem;
			right: 0.5rem;
			display: inline-block;
			padding: 0 0.4rem;
			color: #fff;
			font-size: 10px;
			background: rgba(7, 17, 27, 0.8);
			border-radius: 0.5rem;
		}
	}
	
	.loading {
		position: absolute;
		width: 10%;
		top: 50%;
		left: 50%;
		transform: translateY(-50%);
	}

	// 文本
	.page-content {
		margin: 0
	}
	
	.main-body{
		margin-top: 0;
		padding-top: 0.7rem;
	}
	.issue {
		display: flex;

		.photo {
			flex: 0 0 3.8rem;
			width: 2rem;
			hegiht: 2rem;

			img {
				border-radius: 3.8rem;
			}
		}

		.text {
			flex: 1;
			display: flex;
			justify-content: space-between;

			.author {
				display: flex;
				flex-direction: column;

				.name {
					flex: 1;
					font-weight: bold;
					font-size: 13px;

					span {
						display: inline-block;
						background: yellow;
						padding: 0 0.3rem;
						border-radius: 0.1rem;
						color: #000;
						font-size: 11px;
						font-weight: 500;
						margin-left: 0.4rem;
					}
				}

				.time {
					flex: 1;
					font-size: 11px;
					color: #bfbfbf;
				}
			}

			.attention {
				padding: 0 0.4rem;
				border: 1px solid #929292;
				border-radius: 1rem;
				height: 1.5rem;
				line-height: 1.3rem;

			}
		}
	}

	.label {
		padding-top: 0.4rem;

		.classify {
			display: inline-block;
			margin-right: 0.4rem;
			padding: 0 0.8rem;
			background: #d4d4d4;
			border-radius: 1rem;
			height: 1.5rem;
			line-height: 1.5rem;
			color: #515151;

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.content{
		padding-top: 0.5rem;
		margin-bottom:1rem;
		.eit{
			margin-top:0.4rem;
			.clock-in{
				width:38%;
				justify-content: left;
			}
		}
	}
	.cord{
		box-sizing:border-box;
		padding:0.5rem;
		display: flex;
		background:#f7f7f7;
		.pic{
			flex: 0 0 50px;
			position: relative;
				margin-right:0.4rem;
			img{
				border-radius: 0.2rem;
			}
			.foods{
				position: absolute;
				top: 0;
				left: 0;
				border-top-left-radius: 0.2rem;
				border-bottom-right-radius: 0.2rem;
				padding: 0 0.2rem;
				background: #F44336;
				font-size: 10px;
				color: #FFF;
				height: 1.1rem;
				line-height: 1.1rem;
			}
		}
		.place{
			flex:1;
			display:flex;
			flex-direction:column;
			.title{
				font-weight: 600;
			}
			.remark-on{
				font-size: 10px;
				line-height: 1.3rem;
			}
			.space{
				font-size: 8px;
				font-weight: normal;
				align-items:flex-end;
				
			}
		}
	}
	.block.inset{
		margin:0;
	}
	
	// 相关推荐
	.playing-method {
	
		.share-mini {
			overflow: hidden;
			padding-top:0.5rem;
			// 左
			.share-mini-left {
				flex: 1;
				width: 50%;
				padding-right: 0.5rem;
				float: left;
	
				.share-mini-left-gram {
					background: #FFFFFF;
					margin-bottom: 0.2rem;
					padding-bottom: 0.3rem;
					border-radius: 0.4rem;
				}
	
				.pic-video {
					width: 100%;
					background-size: 100% 100%;
					position: relative;
	
					// display: flex;
					// justify-content: space-between;
					// align-items: center;
					// margin: 0.5rem 0 0.5rem 0;
					.place-left {}
	
					.place-left-icon {
						color: #fff;
						position: absolute;
						bottom: 0.1rem;
						left: 0.1rem;
						background: rgba(0, 0, 0, 0.5);
						// bottom: -1rem;
	
					}
				}
	
				.the-writing {
					margin: 0.5rem 0 0.5rem 0;
					padding: 0 0.5rem;
					font-weight: 600;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
				}
	
				.the-author {
					display: flex;
					justify-content: space-between;
					align-items: center;
	
					img {
						height: 1.2rem;
						border-radius: 1.2rem;
					}
	
					.the-author-er {
						font-size: 11px;
						margin-left: 0.4rem;
						font-weight: normal;
					}
	
					.the-author-icon {
						padding: 0 0.5rem;
	
						.the-author-icon-heart {}
	
						span {
							padding-left: 0.3rem;
						}
					}
				}
	
			}
	
			// 右
			.share-mini-right {
				flex: 1;
				width: 50%;
				padding-left: 0.5rem;
				float: left;
	
				.share-mini-left-gram {
					background: #FFFFFF;
					margin-bottom: 0.2rem;
					padding-bottom: 0.3rem;
					border-radius: 0.4rem;
				}
	
				.pic-video {
					width: 100%;
					background-size: 100% 100%;
					position: relative;
	
					.place-left-icon {
						color: #fff;
						position: absolute;
						bottom: 0.1rem;
						left: 0.1rem;
						background: rgba(0, 0, 0, 0.5);
						// bottom: -1rem;	
					}
				}
	
				.the-writing {
					margin: 0.5rem 0 0.5rem 0;
					padding: 0 0.5rem;
					font-weight: 600;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
				}
	
				.the-author {
					display: flex;
					justify-content: space-between;
					align-items: center;
	
					img {
						height: 1.2rem;
						border-radius: 1.2rem;
					}
	
					.the-author-er {
						font-size: 11px;
						margin-left: 0.4rem;
						font-weight: normal;
					}
	
					.the-author-icon {
						padding: 0 0.5rem;
	
						.the-author-icon-heart {}
	
						span {
							padding-left: 0.3rem;
						}
					}
				}
	
			}
	
	
			// 图片高度
			.pic-video-high {
				height: 16rem;
				background: url('../../assets/tiantan.gif') no-repeat;
			}
	
			.pic-video-higher {
				height: 14rem;
				background: url('../../assets/person_8.20_2.jpeg') no-repeat;
			}
	
			.pic-video-low {
				height: 10rem;
				background: url('../../assets/person_8.20_1.jpeg') no-repeat;
			}
	
			.pic-video-lower {
				height: 12rem;
				background: url('../../assets/person_8.20_3.jpeg') no-repeat;
			}
		}
	}
	
</style>

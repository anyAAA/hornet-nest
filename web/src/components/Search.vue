<template>
	<f7-page :page-content="true" @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
		<div class="head">
			<div class="list" id="list">
				<ul>
					<li>
						<a href="#" id="autocomplete-standalone-popup" class="">
							<!-- <f7-button/> -->
							<div class="item-inner">
								<div class="item-title"></div>
								<div class="item-after"></div>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="header flex">
				<div>
					<f7-icon f7="book_fill" size="30px" color="yellow"></f7-icon>
					<div>攻略</div>
				</div>
				<div>
					<f7-icon f7="download_round_fill" size="30px" color="yellow"></f7-icon>
					<div>订酒店</div>
				</div>
				<div>
					<f7-icon f7="document_fill" size="30px" color="yellow"></f7-icon>
					<div>机票火车票</div>
				</div>
				<div>
					<f7-icon f7="favorites_alt_fill" size="30px" color="yellow"></f7-icon>
					<div>去旅行</div>
				</div>
				<div>
					<f7-icon f7="refresh_round_fill" size="30px" color="yellow"></f7-icon>
					<div>游记</div>
				</div>
			</div>

		</div>
		<!-- tab bar -->
		<div class="tabbar">
			<f7-toolbar class="toobar" tabbar scrollable no-hairline="true">
				<f7-link tab-link="#tab-1" href="homeattention/" tab-link-active>关注</f7-link>
				<f7-link tab-link="#tab-2">推荐</f7-link>
				<f7-link tab-link="#tab-3">附近</f7-link>
				<f7-link tab-link="#tab-4">视频</f7-link>
				<f7-link tab-link="#tab-5">国内</f7-link>
				<f7-link tab-link="#tab-6">国外</f7-link>
				<f7-link tab-link="#tab-7">带娃旅行</f7-link>
				<f7-link tab-link="#tab-8">海岛游</f7-link>
				<f7-link tab-link="#tab-9">情侣出行</f7-link>
			</f7-toolbar>
			<f7-tabs swipeable>
				<f7-tab id="tab-1" class="page-content" tab-active>
					<f7-block>
						<div class="user-info">
							<div class="user">
								<img src="../assets/head-photo.jpg" alt="">
								<div class="classify">马蜂窝视频君</div>
								<div class="official">官方</div>
							</div>
							<div class="user-info-video">
								<!-- <video poster="video/head.png" id="video" controls="controls"  style="height: auto;margin: 0px;padding: 0px;" preload="preload">
									<source src="video/ycgx.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
								</video> -->
								<img src="../assets/home-bg.png" alt="">
							</div>
							<div class="place">
								<div class="place-left">
									<!-- <f7-icon fa="location_on" size="44px" color="blue"></f7-icon> -->
									<i class="material-icons place-icon">location_on</i>
									北京欢乐谷·北京
								</div>
								<div class="place-right">
									距你38km
								</div>
							</div>
							<div class="user-">蜂玩系统 - ... <br> 蜂玩系统 - ... <br> 蜂玩系统 - ... </div>
							<div class="subscript">
								<div>
									<i class="material-icons place-icon">grid_on</i>
									<!-- <i class="material-icons place-icon">location_on</i> -->
									跟着视频去旅行
								</div>
								<div> &nbsp;</div>
							</div>
						</div>
						
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-2" class="page-content">
					<f7-block>
						<p>Tab 2 content</p>

					</f7-block>
				</f7-tab>
				<f7-tab id="tab-3" class="page-content">
					<f7-block>
						<p>Tab 3 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-4" class="page-content">
					<f7-block>
						<p>Tab 4 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-5" class="page-content">
					<f7-block>
						<p>Tab 5 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-6" class="page-content">
					<f7-block>
						<p>Tab 6 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-7" class="page-content">
					<f7-block>
						<p>Tab 7 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-8" class="page-content">
					<f7-block>
						<p>Tab 8 content</p>
						...
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-9" class="page-content">
					<f7-block>
						<p>Tab 9 content</p>
						...
					</f7-block>
				</f7-tab>

			</f7-tabs>
		</div>

	</f7-page>
</template>
<script>
	import {
		f7Navbar,
		f7Page,
		f7BlockTitle
	} from 'framework7-vue';

	export default {
		components: {
			f7Page,
			f7Navbar,
			f7BlockTitle,
		},
		data() {
			return {
				fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
				tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				toolbarPosition: 'top',
			};
		},
		methods: {
			toggleToolbarPosition() {
				this.toolbarPosition = this.position === 'top' ? 'bottom' : 'top';
			},
			onPageBeforeRemove() {
				const self = this;
				self.autocompleteStandalonePopup.destroy();
			},
			onPageInit() {
				const self = this;
				const app = self.$f7;
				const fruits = self.fruits;
				const $ = self.$$;

				// Standalone Popup
				self.autocompleteStandalonePopup = app.autocomplete.create({
					openIn: 'popup', // open in page
					openerEl: '#autocomplete-standalone-popup', // link that opens autocomplete
					closeOnSelect: true, // go back after we select something
					source(query, render) {
						const results = [];
						if (query.length === 0) {
							render(results);
							return;
						}
						// Find matched items
						for (let i = 0; i < fruits.length; i += 1) {
							if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
						}
						// Render items by passing array with result items
						render(results);
					},
					on: {
						change(value) {
							// Add item text value to item-after
							$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
							// Add item value to input value
							$('#autocomplete-standalone-popup').find('input').val(value[0]);
						},
					},
				});

				self.searchbar = app.searchbar.create({
					el: '#searchbar-autocomplete',
					customSearch: true,
					on: {
						search(sb, query) {
							console.log(query);
						},
					},
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	#list {
		// width: 100%;
		position: relative;
		z-index: 1;
		font-size: var(--f7-list-font-size);
		margin: var(--f7-list-margin-vertical) 20;
	}

	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	/* 压缩  非常使用*/
	// flex-shrink: 0;
	// justify-content: flex-start;
	.head {
		background: #f1f1f1;
	}

	.header {
		margin-top: 1rem;
		padding-bottom: 0.7rem;

		div {
			text-align: center;
		}
	}

	.tabbar {
		position: relation;

		.toobar {
			position: absolute;
			top: 7.3rem;
			height: 1.8rem;
			font-size: 12px;
		}
	}

	.user-info {

		.user {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			align-items: center;

			img {
				height: 2rem;
				border-radius: 2rem;
				margin-right: 0.5rem;
			}

			.classify {
				font-size: 12px;
				font-weight: 600;
				color: #333;
				margin-right: 0.5rem;
			}
			.official{
				width: 1.8rem;
				background: #000000;
				font-size: 10px;
				font-weight:normal;
				color: #fed70f;
				line-height: 1rem;
				text-align: center;
				border-radius: 0.2rem;
			}
		}
		.user-info-video{
			margin-top:0.8rem;
			img{
				width: 100%;
				border-radius:0.3rem;
			}
		}
		.place{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin:0.5rem 0 0.5rem 0;
			.place-left{
				display: flex;
				padding: 0 0.5rem;
				background: #e6e6e6;
				// line-height: 1.4rem;
				border-radius: 0.5rem;;
				.place-icon{
					font-size: 14px;
					margin-top: 0.2rem;
				}
			}
		}
		
		.subscript{
			width: 40%;
			display: flex;
			padding: 0 0.5rem;
			background: #e6e6e6;
			border-radius: 0.5rem;
			margin-top:0.5rem;
			.place-icon{
				font-size: 14px;
				margin-top: 0.1rem;
				line-height: 0.8rem;
			}
	}
}
</style>

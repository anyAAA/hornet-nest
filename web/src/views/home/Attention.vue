<template>
	<f7-page :page-content="true" @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class="head">
			 <form action="/">
			   <van-search			    
			     placeholder="请输入搜索关键词"
			     show-action
			   />
			 </form>			
			<div class="header flex">
				<div>
					<f7-icon f7="book_fill" size="30px" color="red"></f7-icon>
					<div>攻略</div>
				</div>
				<div>
					<f7-icon f7="download_round_fill" size="30px" color="blue"></f7-icon>
					<div>订酒店</div>
				</div>
				<div>
					<f7-icon f7="document_fill" size="30px" color="green"></f7-icon>
					<div>机票火车票</div>
				</div>
				<div>
					<f7-icon f7="favorites_alt_fill" size="30px" color="purple"></f7-icon>
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
			<f7-toolbar top class="toobar" tabbar scrollable :no-hairline="true">
				<f7-link tab-link="#tab-1" href="homeattention/" tab-link-active>关注</f7-link>
				<f7-link tab-link="#tab-2">推荐</f7-link>
				<f7-link tab-link="#tab-3">附近</f7-link>
				<f7-link tab-link="#tab-4">视频</f7-link>
				<f7-link tab-link="#tab-5">国内</f7-link>
				<f7-link tab-link="#tab-6">国外</f7-link>
				<f7-link tab-link="#tab-7">带娃旅行</f7-link>
				<f7-link tab-link="#tab-8">海岛游</f7-link>
				<f7-link tab-link="#tab-9">情侣出行</f7-link>
				<div class="toobar-div">
					<f7-icon class="toobar-icon" ios="f7:chevron_down" size="20px" aurora="f7:chevron_down" md="material:expand_more"></f7-icon>
				</div>
			</f7-toolbar>
			<f7-tabs swipeable>
				<f7-tab id="tab-1" class="page-content" tab-active>
					<f7-block class="bblock">
						<!-- one -->
						<div class="user-info">
							<div class="user">
								<img src="../../assets/head_portrait2.jpeg" alt="">
								<div class="classify">马蜂窝视频君</div>
								<div class="official">官方</div>
							</div>
							<!-- video -->
							<div class="user-info-video">
								<img src="../../assets/person_8.20.jpeg" alt="">
							</div>
							<div class="place">
								<div class="place-left">
									<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
										<f7-icon slot="media" f7="placemark_fill" size="14px" color="gray"></f7-icon>
									</f7-chip>
								</div>
								<div class="place-right">
									距你38km
								</div>
							</div>
							<div class="user-referral">
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了

							</div>
							<div class="subscript">
								<f7-chip text="跟着视频去旅行" media-bg-color="" class="subscript-icon">
									<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
								</f7-chip>
							</div>
							<!-- 分享 点赞 收藏 评论 -->
							<div class="share">
								<f7-icon ios="f7:share" aurora="f7:share" md="material:share"></f7-icon>
								<div class="share-icon-three">
									<div v-on:click="sort" :class="{golike:isShow}">
										<f7-icon ios="f7:heart" aurora="f7:heart" md="material:favorite_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:star" aurora="f7:star" md="material:star_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:message" aurora="f7:message" md="material:chat">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>
								</div>
								<div class="scale_boder">
								</div>
							</div>
						</div>
						<!-- two -->
						<div class="user-info">
							<div class="user">
								<img src="../../assets/head_portrait1.jpeg" alt="">
								<div class="classify">雪泡儿</div>
								<div class="official">LV.36</div>
							</div>
							<!-- video -->
							<div class="user-info-video">
								<!-- <video poster="video/head.png" id="video" controls="controls"  style="height: auto;margin: 0px;padding: 0px;" preload="preload">
									<source src="video/ycgx.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
								</video> -->
								<img src="../../assets/person.8.21.1.jpeg" alt="">
							</div>
							<div class="place">
								<div class="place-left">
									<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
										<f7-icon slot="media" f7="placemark_fill" size="14px" color="gray"></f7-icon>
									</f7-chip>
								</div>
								<div class="place-right">
									距你38km
								</div>
							</div>
							<div class="user-referral">
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了

							</div>
							<div class="subscript">
								<f7-chip text="跟着视频去旅行" media-bg-color="" class="subscript-icon">
									<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
								</f7-chip>
							</div>
							<!-- 分享 点赞 收藏 评论 -->
							<div class="share">
								<f7-icon ios="f7:share" aurora="f7:share" md="material:share"></f7-icon>
								<div class="share-icon-three">
									<div>
										<f7-icon ios="f7:heart" aurora="f7:heart" md="material:favorite_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:star" aurora="f7:star" md="material:star_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:message" aurora="f7:message" md="material:chat">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>
								</div>
								<div class="scale_boder">
								</div>
							</div>
						</div>
						<!-- three -->
						<div class="user-info">
							<div class="user">
								<img src="../../assets/head-photo.jpg" alt="">
								<div class="classify">马蜂窝视频君</div>
								<div class="official">官方</div>
							</div>
							<!-- video -->
							<div class="user-info-video">
								<!-- <video poster="video/head.png" id="video" controls="controls"  style="height: auto;margin: 0px;padding: 0px;" preload="preload">
									<source src="video/ycgx.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
								</video> -->
								<img src="../../assets/banner_sad.jpg" alt="">
							</div>
							<div class="place">
								<div class="place-left">
									<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
										<f7-icon slot="media" f7="placemark_fill" size="14px" color="gray"></f7-icon>
									</f7-chip>
								</div>
								<div class="place-right">
									距你38km
								</div>
							</div>
							<div class="user-referral">
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了
								蜂玩行动-马蜂窝视频达人大型线下面基活动 上周，马蜂窝的视频达人们进行了一场大型线下面基活动————蜂玩行动！超30位达人在北京欢乐谷，体验了

							</div>
							<div class="subscript">
								<f7-chip text="跟着视频去旅行" media-bg-color="" class="subscript-icon">
									<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
								</f7-chip>
							</div>
							<!-- 分享 点赞 收藏 评论 -->
							<div class="share">
								<f7-icon ios="f7:share" aurora="f7:share" md="material:share"></f7-icon>
								<div class="share-icon-three">
									<div>
										<f7-icon ios="f7:heart" aurora="f7:heart" md="material:favorite_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:star" aurora="f7:star" md="material:star_border">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>

									<div>
										<f7-icon ios="f7:message" aurora="f7:message" md="material:chat">
											<f7-badge id="badgei" color="white"><span class="badgei-color">5</span></f7-badge>
										</f7-icon>
									</div>
								</div>
								<div class="scale_boder">
								</div>
							</div>
						</div>

					</f7-block>
				</f7-tab>
				<f7-tab id="tab-2" class="page-content">
					<f7-block class="bblock">
						<div class="playing-method">
							<f7-swiper  :params="{speed:500, slidesPerView: 4, spaceBetween: 20}">
								<f7-swiper-slide>
									<div class="carousel-back">
										<div>
											<div>热门玩法</div>
											<!-- 加一个icon -->
											<div class="carousel-back-circle">
												<f7-icon class="circle-icon" slot="media" color="red" size="12px" f7="chevron_right"></f7-icon>  
											</div>
										</div>
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-1 carousel-back2">										
										<div>
											<div class="title">九月去哪</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-2 carousel-back2">
										<div>
											<div class="title">自驾游</div>
											<div class="tempt">277.6万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-1 carousel-back2">
										<div>
											<div class="title">无乐队，不音乐</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-2 carousel-back2">
										<div>
											<div class="title">种草中秋小长假</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-1 carousel-back2">
										<div>
											<div class="title">夏日最佳旅行地</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-2 carousel-back2">
										<div>
											<div class="title">周边好去处</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-1 carousel-back2">
										<div>
											<div class="title">发现城市新地标</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
								<f7-swiper-slide>
									<div class="carousel-2 carousel-back2">
										<div>
											<div class="title">八月去哪</div>
											<div class="tempt">三万人正在围观</div>	
										</div>									
									</div>
								</f7-swiper-slide>
							</f7-swiper>
							
							<div class="share-mini">
								<div class="share-mini-left">
									<f7-link href="/homedetails/">
										<div class="pic-video pic-video-low">
											<!-- 定位图标 -->
											<div class="place-left">
												<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
												</f7-chip>
											</div>
										</div>
										<div class="">
											<div class="subscript-two">
												<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
												</f7-chip>
											</div>
											<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
											<div class="the-author">
												<div class="flex">
													<img src="../../assets/head-photo.jpg" alt="">
													<div class="the-author-er">吃货羽沫旅行记</div>
												</div>
												<div class="the-author-icon">
													<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
													<span>164</span>
												</div>
											</div>
										</div>
									</f7-link>
									<f7-link fill popup-open=".demo-popup" class="share-mini-left-gram">
										<div class="pic-video pic-video-lower">
											<!-- 定位图标 -->
											<div class="place-left">
												<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
												</f7-chip>
											</div>
										</div>
										<div class="">
											<div class="subscript">
												<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
												</f7-chip>
											</div>
											<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
											<div class="the-author">
												<div class="flex">
													<img src="../../assets/head-photo.jpg" alt="">
													<div class="the-author-er">吃货羽沫旅行记</div>
												</div>
												<div class="the-author-icon">
													<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
													<span>164</span>
												</div>
											</div>
										</div>
									</f7-link>
								</div>
								<div class="share-mini-right">
									<f7-link fill popup-open=".demo-popup" class="share-mini-left-gram">
										<div class="pic-video pic-video-low">
											<!-- 定位图标 -->
											<div class="place-left">
												<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
												</f7-chip>
											</div>
										</div>
										<div class="">
											<div class="subscript">
												<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
												</f7-chip>
											</div>
											<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
											<div class="the-author">
												<div class="flex">
													<img src="../../assets/head-photo.jpg" alt="">
													<div class="the-author-er">吃货羽沫旅行记</div>
												</div>
												<div class="the-author-icon">
													<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
													<span>164</span>
												</div>
											</div>
										</div>
									</f7-link>
									<!-- 并列 -->
									<div class="share-mini-left-gram">
										<div class="pic-video pic-video-higher">
											<!-- 定位图标 -->
											<div class="place-left">
												<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="gray"></f7-icon>
												</f7-chip>
											</div>
										</div>
										<div class="">
											<div class="subscript">
												<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
												</f7-chip>
											</div>
											<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
											<div class="the-author">
												<div class="flex">
													<img src="../../assets/head-photo.jpg" alt="">
													<div class="the-author-er">吃货羽沫旅行记</div>
												</div>
												<div class="the-author-icon">
													<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
													<span>164</span>
												</div>
											</div>
										</div>
									</div>
									<!-- 并列 -->
									<div class="share-mini-left-gram">
										<div class="pic-video pic-video-high">
											<!-- 定位图标 -->
											<div class="place-left">
												<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
												</f7-chip>
											</div>
										</div>
										<div class="">
											<div class="subscript">
												<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
													<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
												</f7-chip>
											</div>
											<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
											<div class="the-author">
												<div class="flex">
													<img src="../../assets/head-photo.jpg" alt="">
													<div class="the-author-er">吃货羽沫旅行记</div>
												</div>
												<div class="the-author-icon">
													<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
													<span>164</span>
												</div>
											</div>
										</div>
									</div>
									<!-- 并列 -->
								</div>
							</div>
						</div>
						
						
						
						 <!-- <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
						      <f7-page>
									<van-swipe @change="onChange">
									  <van-swipe-item>1</van-swipe-item>
									  <van-swipe-item>2</van-swipe-item>
									  <van-swipe-item>3</van-swipe-item>
									  <van-swipe-item>4</van-swipe-item>
									
									  <div class="custom-indicator" slot="indicator">
									    {{ current + 1 }}/4
									  </div>
									</van-swipe>
						      </f7-page>
						    </f7-popup> -->
					</f7-block>
				</f7-tab>
				<f7-tab id="tab-3" class="page-content">
					<f7-block class="bblock">
							<div class="playing-method">
								
								<div class="share-mini">
									<div class="share-mini-left">
										<f7-link fill popup-open=".demo-popup" class="share-mini-left-gram">
											<div class="pic-video pic-video-low">
												<!-- 定位图标 -->
												<div class="place-left">
													<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
													</f7-chip>
												</div>
											</div>
											<div class="">
												<div class="subscript-two">
													<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
													</f7-chip>
												</div>
												<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
												<div class="the-author">
													<div class="flex">
														<img src="../../assets/head-photo.jpg" alt="">
														<div class="the-author-er">吃货羽沫旅行记</div>
													</div>
													<div class="the-author-icon">
														<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
														<span>164</span>
													</div>
												</div>
											</div>
										</f7-link>
										<f7-link fill popup-open=".demo-popup" class="share-mini-left-gram">
											<div class="pic-video pic-video-lower">
												<!-- 定位图标 -->
												<div class="place-left">
													<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
													</f7-chip>
												</div>
											</div>
											<div class="">
												<div class="subscript">
													<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
													</f7-chip>
												</div>
												<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
												<div class="the-author">
													<div class="flex">
														<img src="../../assets/head-photo.jpg" alt="">
														<div class="the-author-er">吃货羽沫旅行记</div>
													</div>
													<div class="the-author-icon">
														<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
														<span>164</span>
													</div>
												</div>
											</div>
										</f7-link>
									</div>
									<div class="share-mini-right">
										<f7-link fill popup-open=".demo-popup" class="share-mini-left-gram">
											<div class="pic-video pic-video-low">
												<!-- 定位图标 -->
												<div class="place-left">
													<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
													</f7-chip>
												</div>
											</div>
											<div class="">
												<div class="subscript">
													<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
													</f7-chip>
												</div>
												<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
												<div class="the-author">
													<div class="flex">
														<img src="../../assets/head-photo.jpg" alt="">
														<div class="the-author-er">吃货羽沫旅行记</div>
													</div>
													<div class="the-author-icon">
														<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
														<span>164</span>
													</div>
												</div>
											</div>
										</f7-link>
										<!-- 并列 -->
										<div class="share-mini-left-gram">
											<div class="pic-video pic-video-higher">
												<!-- 定位图标 -->
												<div class="place-left">
													<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="gray"></f7-icon>
													</f7-chip>
												</div>
											</div>
											<div class="">
												<div class="subscript">
													<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
													</f7-chip>
												</div>
												<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
												<div class="the-author">
													<div class="flex">
														<img src="../../assets/head-photo.jpg" alt="">
														<div class="the-author-er">吃货羽沫旅行记</div>
													</div>
													<div class="the-author-icon">
														<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
														<span>164</span>
													</div>
												</div>
											</div>
										</div>
										<!-- 并列 -->
										<div class="share-mini-left-gram">
											<div class="pic-video pic-video-high">
												<!-- 定位图标 -->
												<div class="place-left">
													<f7-chip text="北京欢乐谷·北京" media-bg-color="" class="place-left-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="white"></f7-icon>
													</f7-chip>
												</div>
											</div>
											<div class="">
												<div class="subscript">
													<f7-chip text="北京经典一日打卡游" media-bg-color="" class="subscript-icon">
														<f7-icon slot="media" f7="placemark_fill" size="14px" color="#000"></f7-icon>
													</f7-chip>
												</div>
												<div class="the-writing">北京：往日尘烟，绕不开的南锣鼓巷南锣鼓巷里的游客从来都不会少，瞥见大户人家的门厅</div>
												<div class="the-author">
													<div class="flex">
														<img src="../../assets/head-photo.jpg" alt="">
														<div class="the-author-er">吃货羽沫旅行记</div>
													</div>
													<div class="the-author-icon">
														<f7-icon class="the-author-icon-heart" size="14px" ios="f7:heart" aurora="f7:heart" md="material:favorite_border"></f7-icon>
														<span>164</span>
													</div>
												</div>
											</div>
										</div>
										<!-- 并列 -->
									</div>
								</div>
							</div>
							
							
							
							 
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
		</van-pull-refresh>
	</f7-page>
</template>
<script>

	import Vue from 'vue';
	import { Search,Swipe,SwipeItem,PullRefresh,Toast} from 'vant';
	Vue.use(Search).use(Swipe).use(SwipeItem).use(PullRefresh).use(Toast);

	export default {
		
		data() {
			return {
				fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
				tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				toolbarPosition: 'top',
				current: 0,
				isShow:false,
				isLoading:true
			};
		},
		methods: {
			onRefresh() {
			      setTimeout(() => {
			        this.$toast('刷新成功');
			        this.isLoading = false;	
			      }, 1000);
			},
			sort:function(){
				this.isShow=!this.isShow
			},
			onChange(index) {
			      this.current = index;
			    },
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
		// position: fixed;
		// top:0;
		// left:0;
		z-index: 1;
		font-size: var(--f7-list-font-size);
		margin: var(--f7-list-margin-vertical) 20;
	}

	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	// 图标+定位地点
	.place {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.5rem 0 0.5rem 0;

		.place-left {
			display: flex;
			border-radius: 0.5rem;
			background: #ebebeb;

			.place-left-icon {
				font-size: 12px;
				background: #e6e6e6;
				height: 1.2rem;
				// line-height: 1.2rem;
				font-weight: normal;
			}
		}
	}

	// 图标+介绍
	.subscript {
		margin-top: 0.5rem;
		font-size: 12px;

		.subscript-icon {
			height: 1.2rem;
			background: #e6e6e6;
			font-weight: normal;
			color: #2196f3;
		}
	}

	//tab2
	// 图标+介绍
	.subscript-two {
		margin-top: 0.5rem;
		font-size: 8px;

		.subscript-icon {
			height: 1.2rem;
			background: #fff;
			font-weight: normal;
			color: #2196f3;
		}
	}

	// 爱心icon
	#badgei {
		margin-left: 0rem;

		.badgei-color {
			color: #303030;
		}
	}
	.golike{
		color: red;
	}

	// block margin padding
	.bblock {
		margin: 0;
	}

	.page-content {}

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
	
	// header
	.searchbar-inner{
		// padding: 0;
		// border-radius: 2rem;
	}
	.search-all{
		width:90%;
		overflow:hidden;
		
		.search{
			
		}
		.search-icon{
			position: absolute;
			top: 0.8rem;
			right: 1rem;
		}
	}


	.tabbar {
		// position: relation;

		.toobar {
			// position: absolute;
			// top: 7.3rem;
			height: 1.8rem;
			font-size: 12px;

			.toobar-div {
				position: fixed;
				right: 0rem;
				z-index: 11;
				background: #F4F4F4;

				.toobar-icon {}
			}

		}
	}

	.user-info {
		padding-top: 1.2rem;
		padding-bottom: 0.6rem;
		position: relative;

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

			.official {
				width: 1.8rem;
				background: #000000;
				font-size: 10px;
				font-weight: normal;
				color: #fed70f;
				line-height: 1rem;
				text-align: center;
				border-radius: 0.2rem;
			}
		}

		.user-info-video {
			margin-top: 0.8rem;

			img {
				width: 100%;
				height: 12rem;
				border-radius: 0.3rem;
			}
		}



		//文字描述  
		.user-referral {
			height: 3.2rem;
			// overflow: hidden;
			// white-space: normal;
			// text-overflow: ellipsis;
			-webkit-line-clamp: 3;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.share {
			display: flex;
			margin-top: 0.5rem;
			justify-content: space-between;
			align-items: center;

			.share-icon-three {
				display: flex;

				&>div {
					width: 3rem;
				}
			}


		}

		.scale_boder {
			border-bottom: 1px solid darkgray;
			margin: 0 auto;
			position: absolute;
			top: -50%;
			bottom: -50%;
			left: -50%;
			right: -50%;
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
			border-radius: 10px;
		}
	}

	.playing-method {

		.share-mini {
			overflow: hidden;
			padding-top:0.5rem;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
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
	
	// tab-2
	// tab-2
	
	.carousel-back{
		width: 5rem;
		color:#fff;
		display:flex;
		height: 3.2rem;		
		font-size:12px;				
		text-align:center;		
		background: orangered;
		border-radius:0.5rem;
		&>div{
			margin: auto;
		}
		.carousel-back-circle{
			width: 1rem;
			height: 1rem;
			background: white;
			border-radius: 1rem;
			margin:0 auto;
			
			.circle-icon{
				line-height: var(--f7-tabbar-icon-size) 18px;
			
			}
		}
	}
	.carousel-1{
		background: url(../../assets/carousel1.jpeg) no-repeat;
	}
	.carousel-2{
		background: url(../../assets/carousel2.jpeg) no-repeat;
	}
	.carousel-back2{
		width: 5rem;
		height: 3.2rem;	
		background-size: 100%;
		border-radius:0.5rem;
		&>div{
			height: 3.2rem;	
			background: rgba(0,0,0,0.7);
			border-radius:0.5rem;
			.title{
				height:2.2rem;
				color:white;
				font-size: 11px;
				font-weight:500;
				padding-left: 0.4rem;
				padding-top: 0.2rem;
				
				-webkit-line-clamp:2;   display: -webkit-box;   -webkit-box-orient:vertical;  overflow:hidden;text-overflow: ellipsis;
			}
			.tempt{
				font-size: 9px;
				color:white;
				font-weight:normal;
				text-indent: 0.5rem;
				
				overflow: hidden;  white-space: normal;  text-overflow: ellipsis;
			}
		}
	}
</style>

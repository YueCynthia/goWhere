<template>
	<div class="icon-wraper">
		<swiper :options="swiperOption" ref="mySwiper" >
		    <!-- slides -->
		    <swiper-slide>
		    	<div class="area-con">
		    		<div class="area-item">1</div>
		    		<div class="area-item">2</div>
		    		<div class="area-item">3</div>
		    		<div class="area-item">4</div>
		    		<div class="area-item">5</div>
		    		<div class="area-item">6</div>
		    		<div class="area-item">7</div>
		    		<div class="area-item">8</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>2
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name:"index-icons",
		data () {
			return {
				swiperOption:{
					pagination: '.swiper-pagination'
				}
			}	
		}
	}
</script>
<style lang="stylus">
	.icon-wraper
		height: 3.8rem
		background: #fcc
		.area-con
			display: flex
			flex-wrap: wrap
			.area-item
				width:25%
				height:1.9rem
				
</style>
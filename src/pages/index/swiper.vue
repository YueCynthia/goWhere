<template>
	<div class="swiper-container">
		<swiper :options="swiperOption" ref="mySwiper" >
		    <!-- slides -->
		    <swiper-slide v-for="item in swiperInfo" :key="item.id">
	    		<img :src="item.imgUrl">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default{
		name: 'index-swiper',
		props: {
			swiperInfo: Array
		},
		data () {
			return {
				swiperOption:{
					loop: true,
					pagination: '.swiper-pagination'
				}
			}	
		}
	}
</script>
<style lang="stylus" scoped>
	.swiper-pagination >>> .swiper-pagination-bullet-active
		background:red !important
	.swiper-container
		overflow: hidden
		height: 0
		padding-bottom: 31.25%
		//height:31.25vm //这个值是图片的宽高比，兼容性不够好
	.swiper-container img{
		width: 100%;
	}
</style>

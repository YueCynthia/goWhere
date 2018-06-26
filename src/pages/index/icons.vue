<template>
	<swiper class="icons" :options="swiperOption" v-if="iconsInfo.length">
	    <!-- slides -->
	    <swiper-slide class="icons-page"  v-for="(data,index) in pages" :key="index">
	    	<div class="icons-list">
	    		<div class="icons-item" v-for="item in data" :key="item.id">
					<img :src="item.img" class="icons-img">
					<p class="icons-title">{{item.title}}</p>
	    		</div>
	    	</div>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>
<script>
	export default {
		name:"index-icons",
		props: {
			iconsInfo: Array
		},
		data () {
			return {
				swiperOption:{
					pagination: '.swiper-pagination'
				}
			}	
		},
		computed: {
			pages () {
				const pages = []
				this.iconsInfo.forEach((value,index) => {
					const page = Math.floor(index / 8)
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(value)
				})
				return pages
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.swiper-pagination >>> .swiper-pagination-bullet-active
    background: $bgColor
	.icons
		width:100%
		overflow:hidden
		position:relative
		height:0
		padding-bottom: 3.4rem
		.icons-list
			display: flex
			flex-wrap: wrap
			.icons-item
				width: 25%
				text-align: center
				padding-top: .3rem
				.icons-img
					width: .66rem
					height: .66rem
				.icons-title
					color: #333
					font-size: .28rem
					margin-top: .16rem		
</style>
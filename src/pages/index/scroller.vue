<template>
	<div ref="scroller">
		<div class="content">
			<transition name="loading">
				<div v-if="isLoading" class="loading">Loading ...</div>
			</transition>
			<div class="item" v-for = 'item in list' :key="item.id">
				<img class="item-img" v-lazy="item.img">
				<div class="item-content">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<p class="item-price">
						<span class="price-tag">&yen;</span>
						{{item.price}}
						<span class="price-start"></span>
					</p>
				</div>
			</div>
		</div>
	</div>
	
</template>
//安装npm i better-scroll
<script>
	import BScroll from 'better-scroll'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default {
		name: 'index-scroller',
		props:{
			sightsInfo: Array
		},
		data () {
			return {
				isLoading: false,
				moreSights: []
			}
		},
		watch:{
			list () {
				this.$nextTick(() => {
					this.scroller.refresh()
				})
			}
		},
		computed : {
			list () {
				return this.sightsInfo.concat(this.moreSights)
			},
			...mapState(['city'])
		},
		methods: {
			createScroller () {
				this.scroller = new BScroll(this.$refs.scroller,{
					probeType:2
				})
			},
			bindEvents () {
				this.scroller.on('scroll',this.handleScroll.bind(this))
				this.scroller.on('scrollEnd',this.handleScrollEnd.bind(this))
			},
			handleScroll (e) {
				if(e.y > 60 && !this.isLoading){
					this.getListInfo()
					this.isLoading = true
				}
			},
			handleScrollEnd (e) {
				this.isLoading = false
			},
			getListInfo () {
				axios.get('/api/sightlist.json?city=' + this.city)
					.then(this.handleGetListSucc.bind(this))
					.catch(this.handleGetListErr.bind(this))
			},
			handleGetListSucc (res) {
				res && (res = res.data)
				if(res && res.ret && res.data){
					if(res.data.list){
						this.moreSights = this.moreSights.concat(res.data.list.sights)
					}
				}else{
					this.handleGetListErr()
				}
			},
			handleGetListErr () {
				console.log("error")
			}
		},
		mounted () {
			this.createScroller()
			this.bindEvents()
		}
	}
</script>
<style lang="stylus" scoped>
	@import '../../assets/stylus/varibles.styl'
	.loading-enter,.loading-leave-to
		height:0
		opacity: 0
	.loading-enter-active
		transition: 0.5s all ease
	.loading-enter-to,.loading-leave
		height: .28rem
		opacity: 1
	.loading-leave-active
		transition: .5s height ease,0.5s opacity ease
	.loading
		text-align: center
		font-size: .28rem
		color: $lightFontColor
	.item
		display: flex
		padding:.24rem
		.item-img
			width: 1.4rem
			height: 1.4rem
			margin-right: .2rem
		.item-content
			flex: 1
			
			.item-title
				margin: .04rem 0 .1 rem 0
				font-size: .3rem
				color: $fontColor
			.item-desc
				margin-top: .1rem
				margin-bottom: .1rem
				font-size: .28rem
				color: $lightFontColor
			.item-price
				margin-top: .2rem
				font-size: .36rem
				color: $enlightFontColor
				.price-tag
					font-size: .24rem
				.price-start
					font-size: .24rem
					color: $lightFontColor
</style>
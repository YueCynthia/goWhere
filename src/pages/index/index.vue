<template>
	<div class="main">
		<index-header></index-header>
		<index-swiper :swiperInfo="swiperInfo"></index-swiper>
		<index-icons :iconsInfo = "iconsInfo"></index-icons>
		<index-scroller class="scroller" :sightsInfo = 'sightsInfo'></index-scroller>
	</div>
</template>
<script>
	import IndexHeader from './header'
	import IndexSwiper from './swiper'
	import IndexIcons from './icons'
	import IndexScroller from './scroller'
	import Vue from 'vue'
	import Axios from 'axios'
	import VueAxios from 'vue-axios'
	import { mapState,mapMutations } from 'vuex'
	

	Vue.use(VueAxios,Axios)

	export default{
		name:'index',
		components: {
			IndexHeader,
			IndexSwiper,
			IndexIcons,
			IndexScroller
		},
		data () {
			return {
				swiperInfo: [],
				iconsInfo: [],
				sightsInfo: []
			}
		},
		computed: {
			...mapState(['city'])
		},
		methods: {
			...mapMutations (['changeCity']),
			getIndexData () {
				Axios.get("/api/index.json?city"+this.city)
				.then(this.getDataSucc.bind(this))
				.catch(this.getDataErr.bind(this))
			},
			getDataSucc(res) {
				res = res ? res.data : null
				if(res && res.ret && res.data) {
					res.data.city && (this.changeCity(res.data.city))
					res.data.swiperList && (this.swiperInfo = res.data.swiperList)
					res.data.icons && (this.iconsInfo = res.data.icons)
					res.data.sights && (this.sightsInfo = res.data.sights)
				}else{
					this.getDataErr()
				}
			},
			getDataErr() {
				console.log("error");
			}
		},
		created() {
			this.getIndexData();
		}
	}
</script>
<style lang="stylus" scoped>
	.main
		display:flex
		flex-direction: column
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		.scroller
			flex: 1
			overflow:hidden
</style>
    
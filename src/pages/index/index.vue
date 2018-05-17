<template>
	<div>
		<index-header></index-header>
		<index-swiper :swiperInfo="swiperInfo"></index-swiper>
		<index-icons></index-icons>
	</div>
</template>
<script>
	import IndexHeader from './header'
	import IndexSwiper from './swiper'
	import IndexIcons from './icons'
	import Vue from 'vue'
	import Axios from 'axios'
	import VueAxios from 'vue-axios'

	Vue.use(VueAxios,Axios)

	export default{
		name:'index',
		components:{
			IndexHeader,
			IndexSwiper,
			IndexIcons
		},
		data(){
			return {
				swiperInfo: []
			}
		},
		methods:{
			getIndexData() {
				Axios.get("/api/index.json")
				.then(this.getDataSucc.bind(this))
				.catch(this.getDataErr.bind(this))
			},
			getDataSucc(res) {
				const data = res.data.data
				this.swiperInfo = data.swiperList
			},
			getDataErr(err) {
				console.log("error");
			}
		},
		created() {
			this.getIndexData();
		}
	}
</script>
    
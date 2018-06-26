<template>
	<div class="main">
		<city-header></city-header>
		<city-search></city-search>
		<city-list class="list"
				  :list="list"
				  :hotcity="hotcity"></city-list>
	</div>
</template>
<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import axios from 'axios'
export default{
	name:'city',
	data () {
		return {
			list: {},
		hotcity: []
		}
	},
	components: {
		CityHeader,
		CitySearch,
		CityList
	},
	methods : {
		getListInfo () {
			axios.get('/api/city.json')
				.then(this.handleGetListSucc.bind(this))
				.catch(this.handleGetListErr.bind(this))
		},
		handleGetListSucc (res) {
			// res = res ? res.data : null
			res && (res = res.data)
			if (res && res.data) {
				// res.data.list && this.list = res.data.list
				// res.data.hotcity && this.hotcity = res.data.hotcity

			}else{
				this.handleGetListErr()
			}
		},
		handleGetListErr () {
			console.log("error")
		}
	},
	created () {
		this.getListInfo()
	},
}
</script>
<style scoped lang="stylus">
	.main
		display:flex
		flex-direction:column
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		.list
			flex:1
</style>

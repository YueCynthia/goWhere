<template>
	<div class="header">
		<div class="back iconfont">&#xe624;</div>
		<div class="search"><span class="searchicon iconfont">&#xe632;</span>请输入搜索内容</div>
		<div class="city">{{city}}</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default{
		name: 'index-header',
		computed: {
			...mapState(['city'])
		}
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.header
		display: flex
		height: .88rem
		line-height: .88rem
		background: $bgColor
		color: #fff
		.back
			width: .58rem
			text-align: center
			font-size: .4rem
			font-weight: bold
		.search
			flex: 1
			height: .6rem
			line-height: .6rem
			margin: .14rem .2rem
			padding-left: .3rem
			background: #fff
			border-radius: .2rem
			color: #ccc
		.city
			padding: 0 .6rem 0 .2rem
		.searchicon
			margin: 0 .1rem
			&:before
				position: absolute
				top: .4rem
				right: .2rem
				content: "\0020"
				width: 0
				height: 0
				border-left: .14rem solid transparent
				border-right: .14rem solid transparent
				border-top: .14rem solid #fff
</style>
<template>
	<div class="header">
		<div class="back iconfont">&#xe624;</div>
		<div class="search">
			<div class="search-content">
				<span class="iconfont">&#xe632;</span>请输入搜索内容
			</div>
		</div>
		<router-link to="/city">
			<div class="city">{{city}}</div>
		</router-link>
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
		background: $bgColor
	.back
		width: .8rem
		line-height: .88rem
		text-align: center
		font-size: .44rem
		font-weight: 700
		color: #fff
	.search
		flex: 1
		.search-content
			width: 100%
			height: .6rem
			line-height: .6rem
			margin-top: .14rem
			background: #fff
			border-radius: .1rem
			text-indent: .2rem
			color: #ccc
	.city
		white-space: nowarp
		overflow: hidden
		text-overflow: ellipsis
		position: relative
		float: right
		max-width: 2rem
		line-height: .88rem
		font-size: .28rem
		padding: 0 .46rem 0 .22rem
		color: #fff
		&::before
			position: absolute
			top: .36rem
			right: .16rem
			content: '\0020'
			width: 0
			height: 0
			border-left: .13rem solid transparent
			border-right: .13rem solid transparent
			border-top: .13rem solid #fff
</style>
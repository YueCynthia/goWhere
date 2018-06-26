<template>
	<div class="header">
		<div class="title">
			<div class="back iconfont" 
				 @click="handleBackClick">&#xe624;</div>
			城市选择
		</div>
	</div>
</template>
<script>
export default{
	name:'city-header',
	methods: {
		handleBackClick () {
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
	.title
		height: .88rem
		line-height: .88rem
		position: relative
		background: $bgColor
		text-align: center
		font-size: .36rem
		color: #fff
		.back
			position:absolute
			left: 0
			top: 0
			width: .84rem
			line-height: .88rem
			font-weight: bold
			font-size: .44rem
</style>
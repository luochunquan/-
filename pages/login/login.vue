<template>
	<view class="loginContain">
		<view class="title">
			欢迎来到泰木谷商脉
		</view>
		<view class="form">
			<view class="form_phone">
				<text>手机号</text>
				<input type="number" maxlength="11" placeholder="请输入手机号码" v-model="form.mobile" />
			</view>
			<view class="form_password">
				<text>密码</text>
				<input type="password"  placeholder="请输入密码" v-model="form.password" @confirm="handleLogin" ref="password"/>
				<image :src="eyes" mode="" @tap="isShow"></image>
			</view>
			<view class="form_btn">
				<text class="button" @tap="handleLogin">登录</text>
			</view>
			<view class="form_registReset">
				<navigator class="regist" url="regist">立即注册</navigator> <text>|</text>
				<navigator>重置密码</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					mobile: '',
					password: '',
					client: '' ,//import { getClient } from '@/utils/app'
				},
					eyes:'../../static/img/hideEyes.png',
					show:false
			}
		},
		methods: {
			async handleLogin() {
				if (this.form.mobile == '') {
					this.$msg('请输入手机号')
					return false
				}
				if (this.form.password == '') {
					this.$msg('请输入密码')
					return false
				}
				if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)) {
					this.$msg('手机号码有误，请重填')
					return false
				}
				const res = await UserApi.login(this.form)
				console.log(res)
				if (res.token) {
					Token.set(res.token)
					Cookies.set('uid', res.user_id, {
						path: '/',
						domain: '000111.cn'
					})
					this.$msg.success('登录成功')
					this.timer = setTimeout(() => {
						window.location.href = this.$route.query.redirect || router.user
					}, 1000)

					// Token.set(res.token)
					// Storage.set('user_id', res.user_id)
					// this.$router.go(-1)
				}
			},
			isShow(e){
					console.log(this.$refs.password)
				if(!this.show){
					this.eyes="../../static/img/showEyes.png"
					this.$refs.password.type='text'
					this.show=true
				}else{
					this.$refs.password.type='password'
					this.eyes="../../static/img/hideEyes.png"
					this.show=false
				}
			}
		}
	}
</script>
<style src=""></style>
<style lang="stylus">
	.title 
		display inline-block
		margin 192rpx 0rpx 160rpx 72rpx
		color #000000
		font-size 48rpx
		// padding 40rpx 0 60rpx 0
	.form
		padding 0 60rpx
		&_phone,&_password
			text
				color #1A1A1A
				font-size 36rpx
				display block
			input
				width 597rpx
				border-bottom 2rpx solid #e6e6e6
				padding 42rpx 0 23rpx 0
				color #2C2C2C
				font-size 28rpx
		&_password
			margin-top 60rpx
			position relative
			image
				width 34rpx
				height 17rpx
				position absolute
				top 50%
				right 82rpx
		&_btn
			margin-top 131rpx
			.button
				width 100%
				height 88rpx
				display block
				line-height 88rpx
				text-align center
				border-radius 44rpx
				color #FFFFFF
				background linear-gradient(to left,#1BA2E8,#36EAE8)
		&_registReset
			margin-top 74rpx
			padding 0 65rpx
			display flex
			justify-content  space-between
			navigator,text
				font-size 28rpx
				color #999999
			.regist
				color rgba(27, 162, 232, 1)
				
</style>

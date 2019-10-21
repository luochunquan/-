<template>
	<view class="loginContain">
		<view class="logo">
			<image class="logo_img" src="../../static/logo.png" mode=""></image>
		</view>
		<view class="form">
			<view class="form_phone">
				<input type="number" maxlength="11" placeholder="请输入手机号码" v-model="form.mobile" />
			</view>
			<view class="form_password">
				<input type="text" password placeholder="请输入密码" v-model="form.password" @confirm="at" />
			</view>
			<view class="form_btn">
				<button @tap="Login">登录</button>
			</view>
			<view class="form_registReset">
				<navigator url="regist">立即注册</navigator> <text>|</text>
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
					client: '' //import { getClient } from '@/utils/app'
				},
			}
		},
		methods: {
			async handleLogin() {
				if (this.form.mobile == '') {
					Toast.fail('请输入手机号')
					return false
				}
				if (this.form.password == '') {
					Toast.fail('请输入密码')
					return false
				}
				if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)) {
					Toast.fail('手机号码有误，请重填')
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
					this.$toast.success('登录成功')
					this.timer = setTimeout(() => {
						window.location.href = this.$route.query.redirect || router.user
					}, 1000)

					// Token.set(res.token)
					// Storage.set('user_id', res.user_id)
					// this.$router.go(-1)
				}
			},
			at() {
				alert("回车")
			}
		}
	}
</script>
<style lang="stylus">
	.logo_img 
		width 200rpx
		height 200rpx
		display block
		margin auto
		padding 40rpx 0 60rpx 0
	.form
		&_phone
			input
		&form_password
			input
		&_btn
			button
				width 80%
		&_registReset
			width 360rpx;
			display flex
			justify-content  space-between
			margin  10rpx auto 0 auto
			navigator,text
				font-size 28rpx
				color #C0C0C0
</style>

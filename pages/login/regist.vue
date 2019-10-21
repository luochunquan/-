<template>
	<view class="registContain">
		<view class="title">新用户注册</view>
		<view class="form">
			<view class="form_phone">
				<input type="number" maxlength="11" placeholder="请输入手机号码" v-model="form.mobile" />
			</view>
			<view class="form_name">
				<input type="text" placeholder="您的名称" v-model="form.mobile" />
			</view>
			<view class="form_password">
				<input type="text" password placeholder="请输入密码" v-model="form.password"  />
			</view>
			<view class="form_code">
				<input type="number" maxlength="10" placeholder="请输入验证码" :value="form.code" />
			</view>
			<view class="form_getCode">
				<button class="form_getCode_btn1" type="primary">获取验证码</button>
				<button class="form_getCode_btn2" type="primary">语音验证码</button>
			</view>
		</view>
		<view class="registBtn">
			<button type="primary">注册</button>
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
					code: ''
				}
			}
		}
	}
</script>

<style>

</style>

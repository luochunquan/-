<template name="page-head">
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view>{{title}}</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				iStatusBarHeight: 0
			}
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight
		},
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>

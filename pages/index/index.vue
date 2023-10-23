<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<u-button @click="getAll" type="primary" :plain="true" size="small" class="button">查询所有</u-button>
		<view class="text-area">
			<!-- <u-button>查询所有</u-button> -->
			<u-list>
				<u-list-item v-for="(item,index) in data" :key="index">
					<u-cell :title="`姓名:${item.name}  工资:${item.salary}`"></u-cell>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		computed,
		ref
	} from 'vue'
	import {
		getAllUser
	} from '../service/user.js'

	const title = ref("Hello")
	let data = ref([])
	const getAll = async () => {
		const res = await getAllUser()
		data.value = res
		console.log(data.value)
	}
	onLoad(() => {
		// getAll()
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.button{
			width:150rpx;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
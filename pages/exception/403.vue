<template>
	<div class="flex justify-center">
		<div class="w-96 m-5 flex flex-col items-center">
			<el-image src="/403.svg"></el-image>
			<div class="text-3xl m-5">403</div>
			<div class="text-md m-5">抱歉，您无权限浏览此页</div>
			<nuxt-link to="/">
				<el-button type="primary">回到首页</el-button>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup>
	useHead({
		title: '403'
	});
</script>

<style>
</style>
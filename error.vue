<template>
	<div class=" flex ">
		<div class="flex-1"></div>
		<div class="w-96 m-10 flex flex-col items-center">
			<el-image src="/404.svg"></el-image>
			<div class="text-3xl m-5">{{ error.statusCode }}</div>
			<div class="text-md m-5">{{ error.statusMessage }}</div>
			<nuxt-link to="/">
				<el-button type="primary">回到首页</el-button>
			</nuxt-link>
		</div>
		<div class="flex-1"></div>
	</div>
</template>
<script setup>
	const props = defineProps({
		error: Object
	})
	const error = useError();
	console.log(error)
</script>
<template>
	<div class="">
		<el-result icon="error" title="提交失败"
			sub-title="请核对并修改以下信息后，再重新提交。">
			<template #extra>
				<el-button type="primary">返回修改</el-button>
			</template>
		</el-result>
	</div>
</template>

<script setup>
	useHead({
		title: '失败页'
	});
</script>

<style>
</style>
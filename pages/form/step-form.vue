<template>
	<div class="p-10">
		<div class="">
			<el-steps align-center :active="activeStep">
				<el-step title="步骤1" description="填写转账信息" />
				<el-step title="步骤2" description="确认转账信息" />
				<el-step title="步骤3" description="完成" />
			</el-steps>
		</div>
		<div class="mt-10 flex justify-center">
			<div v-if="activeStep==0" class="w-96">
				<el-form :model="form" label-width="120px" label-position="top">
					<el-form-item label="收款账户" prop="account">
						<el-input v-model="form.account" />
					</el-form-item>
					<el-form-item label="收款人姓名">
						<el-input v-model="form.name" />
					</el-form-item>
					<el-form-item label="转账金额">
						<el-input :prefix-icon="Rmb" v-model="form.fee" />
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="activeStep++">下一步</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div v-if="activeStep==1">
				<el-alert title="确认转账后，资金将直接打入对方账户，无法退回。" type="warning" show-icon />
				<el-descriptions border :column='1' class="my-5">
					<el-descriptions-item label='收款账户'>{{form.account}}</el-descriptions-item>
					<el-descriptions-item label='收款人姓名'>{{form.name}}</el-descriptions-item>
					<el-descriptions-item label='转账金额'>{{form.fee}}</el-descriptions-item>
				</el-descriptions>

				<el-form :model="form" label-width="120px" label-position="top">
					<el-form-item label="支付密码">
						<el-input v-model="form.password" show-password />
					</el-form-item>
					<el-form-item>
						<el-button @click="activeStep--">上一步</el-button>
						<el-button type="primary" @click="activeStep++">下一步</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div v-if="activeStep==2">
				<el-result icon="success" title="转账成功" sub-title="预计两小时内到账">
					<template #extra>
						<el-button type="primary" @click="activeStep=0">再转一笔</el-button>
					</template>
				</el-result>
			</div>
		</div>
	</div>
</template>

<script setup>
	useHead({
		title: '分步表单'
	});
	const activeStep = ref(0);
	const form = ref({
		account: '',
		name: '',
		fee: '',
		password: ''
	})
</script>

<style>
</style>
<template>
	<div class="w-screen h-screen flex bg-gradient-to-r from-sky-500 to-indigo-500">
		<div class="hidden md:flex w-1/2 justify-center items-center h-full ">
			<div class="w-5/6">
				<!-- <el-image src='/bg.png'></el-image> -->
				<div class='text-white text-3xl text-center' id='typed'></div>
				<div id="typed-strings">
					<p>我是<strong>Nuxt Pro</strong>,<br> 开箱即用的中后台管理系统.</p>
					<p>我服务于开发者，<br> 让开发者生活更美好...</p>
					<p>我是响应式，<br> 手机平板PC全搞定...</p>
					<p>我内嵌微信登陆，<br> 二维码生成、fontawesome图标</p>
				</div>
			</div>
		</div>
		<div class="w-full md:w-1/2 p-5 flex  justify-center items-center">
			<div class="bg-white w-96 p-5 flex flex-col">
				<div class="text-3xl mb-10">{{ appConfig.app.name }}</div>
				<el-tabs v-model="activeName">
					<el-tab-pane label="验证码登录" name="mobile">
						<el-form ref="mobileFormRef" :rules="mobileRules" :model="mobileForm">
							<el-form-item prop="mobile">
								<el-input v-model="mobileForm.mobile" :prefix-icon="User" placeholder="手机号"></el-input>
							</el-form-item>
							<el-form-item prop="captcha">
								<el-input v-model="mobileForm.captcha" :prefix-icon="Lock" placeholder="验证码">
									<template #append>
										<div v-if="codeText == '发送验证码'" class='h-full flex items-center text-blue-500'
											@click='sendCode'>{{ codeText }}</div>
										<div v-else class='h-full flex items-center'>{{ codeText }}</div>

									</template>
								</el-input>
							</el-form-item>
							<el-form-item>
								<el-button class='w-full' @click="submit(mobileFormRef)" type='primary'>登录</el-button>
							</el-form-item>

						</el-form>
					</el-tab-pane>
					<el-tab-pane label="密码登录" name="account">
						<el-form ref="formRef" :rules="rules" :model="form">
							<el-form-item prop="account">
								<el-input v-model="form.account" :prefix-icon="User" placeholder="用户名或手机号"></el-input>
							</el-form-item>
							<el-form-item prop="password">
								<el-input v-model="form.password" show-password :prefix-icon="Lock" placeholder="密码">
								</el-input>
							</el-form-item>
							<el-form-item>
								<el-button class='w-full' @click="submit(formRef)" type='primary'>登录</el-button>
							</el-form-item>
						</el-form>
						<div class="text-sm">首次登录请使用验证码登录方式</div>
					</el-tab-pane>
					<el-tab-pane label="扫码登陆" name="qrcode">
						<div>使用微信扫码登陆<el-button class='mx-2' @click='refresh' link type='primary'>刷新<i
									class="fa fa-refresh"></i></el-button></div>
						<div class="flex justify-center">
							<div class="w-48 h-48" v-qrcode="wxlogin_url"></div>
						</div>
					</el-tab-pane>
				</el-tabs>
				<div class="text-sm mt-5">登录代表同意{{ appConfig.app.name }}<a class="text-blue-500"
						:href="appConfig.app.userAgreement" target="_blank">用户协议</a>、<a class="text-blue-500"
						:href="appConfig.app.privacyPolicy" target="_blank">隐私政策</a></div>

			</div>
		</div>
	</div>
</template>
<script setup>
import {
	User,
	Lock
} from '@element-plus/icons-vue'
definePageMeta({
	layout: false,
});
const appConfig = useAppConfig();
useHead({
	title: '登陆',
});
const route = useRoute();
const router = useRouter();
const store = useMainStore();
const activeName = ref('mobile');
const codeText = ref('发送验证码');
const mobileForm = ref({
	mobile: '',
	captcha: ''
});
const form = ref({
	account: 'admin',
	password: '123456',
});
const mobileRules = ref({
	mobile: [{
		required: true,
		message: '请输入手机号',
		trigger: 'blur',
	},
	{
		min: 11,
		max: 11,
		message: '手机号长度不对',
		trigger: 'blur',
	},
	],
	captcha: [{
		required: true,
		message: '请输入验证码',
		trigger: 'blur',
	},
	{
		min: 4,
		max: 4,
		message: '验证码长度不对',
		trigger: 'blur',
	},
	],
});
const rules = ref({
	account: [{
		required: true,
		message: '请输入用户名',
		trigger: 'blur',
	},
	{
		min: 3,
		max: 11,
		message: '长度在 3 到 11 个字符',
		trigger: 'blur',
	},
	],
	password: [{
		required: true,
		message: '请输入密码',
		trigger: 'blur',
	},
	{
		min: 4,
		max: 20,
		message: '长度在 4 到 20 个字符',
		trigger: 'blur',
	},
	],
});
const mobileFormRef = ref();
const formRef = ref()
const submit = async (formEl) => {
	let path = route.query.path || '/';
	await formEl.validate(async (valid) => {
		// 此处user信息用于模拟登录，正式开发时应当删除
		const user = {
			avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
			nickname: 'Admin',
			mobile: '13312345678',
			token:'example-token'
		}
		if (valid) {
			if (formEl === mobileFormRef.value) {

				if (mobileForm.value.mobile !== '' && mobileForm.value.captcha == '1234') {
					store.login(user);
					ElMessage.success('登陆成功');
					router.replace(path);
				} else {
					ElMessage.error('验证码错误');

				}
			}
			if (formEl === formRef.value) {
				if (form.value.account == 'admin' && form.value.password == '123456') {
					store.login(user);
					ElMessage.success('登陆成功');
					router.replace(path);
				} else {
					ElMessage.error('账号或密码错误');

				}
			}

		}
	});
};
const sendCode = async () => {
	let mobile = mobileForm.value.mobile;
	let regEx = /^[1][\d]{10}/
	if (!regEx.test(mobile)) {
		ElMessage.error('手机号格式错误');
		return false;
	}
	ElMessage.success('验证码为1234');
	codeText.value = 60;
	let timer = setInterval(() => {
		codeText.value--;
		if (codeText.value < 0) {
			clearInterval(timer)
			codeText.value = '发送验证码';
		}
	}, 1000)

}
// 微信登陆
const wxlogin_url = useWxLogin();
// 打字效果
import Typed from 'typed.js'
onMounted(() => {
	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 80,
		loop: true,
		showCursor: false,
	});
})
</script>
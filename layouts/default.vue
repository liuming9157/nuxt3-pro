<template>
	<div>
		<el-container>
			<el-menu :collapse="$device.isMobile ? $device.isMobile : collapse" default-active="/">
				<el-sub-menu :index="item.url" v-for="(item, index) in appConfig.menu" :key="index">
					<template #title>
						<i class="mx-2 fa" :class="item.icon"></i>
						<span>{{ item.title }}</span>
					</template>
					<el-menu-item :index="subItem.url" v-for="(subItem, subIndex) in item.sub" :key="subIndex"
						@click="router.replace(subItem.url)">{{ subItem.title
						}}</el-menu-item>
				</el-sub-menu>
			</el-menu>
			<el-container>
				<el-header class="flex items-center">

					<div class="hidden md:block cursor-pointer hover:bg-gray-200" @click="toggleMenu()">
						<el-icon>
							<ElIcon-Expand v-if="collapse" />
							<ElIcon-Fold v-else />
						</el-icon>
					</div>
					<div class="flex-1"></div>
					<el-icon class="cursor-pointer" @click="toggleDark()">
						<ElIcon-Moon v-if="isDark" />
						<ElIcon-Sunny v-else />
					</el-icon>
					<el-icon class="ml-5 cursor-pointer" @click="toggleScreen">
						<ElIcon-FullScreen />
					</el-icon>
					<el-popover trigger="click" :width="400" placement="bottom-end" :show-arrow="false">
						<template #reference>
							<el-badge class="mx-5 cursor-pointer" :value="12">
								<i class="fa fa-bell-o"></i>
							</el-badge>
						</template>
						<div class="w-full">
							<div class="text-lg text-center py-5 border-b">通知</div>


							<div v-for="(item, index) in 4" :key="index"
								class="border-b py-5 cursor-pointer hover:bg-blue-100">
								<div class="mx-5">小超牛{{ index + 1 }}期项目已成功上线</div>
							</div>
							<div class="py-5 text-center text-blue-500 cursor-pointer">查看全部</div>
						</div>
					</el-popover>


					<div class="flex items-center">
						<el-dropdown @command="handleCommand">
							<div class="flex items-center">
								<el-avatar shape="circle" :size="30" :src="squareUrl" />
								<div class="ml-2">{{ store.$state.user.mobile }}</div>
							</div>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item command="/account/settings"><i
											class="fa fa-gear"></i>个人设置</el-dropdown-item>
									<el-dropdown-item command="logout"><i class="fa fa-sign-out"></i>退出</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>

					</div>
				</el-header>

				<el-main class="main">
					<slot />
				</el-main>
				<el-footer v-if="appConfig.copyright.show" class="flex justify-center">
					<el-link target="_blank" :href="appConfig.copyright.url">{{ appConfig.copyright.text }}</el-link>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
const store = useMainStore();
const router = useRouter();
// 未登录跳转
onMounted(() => {
	if (store.isLogin == false) {
		router.replace('/login');
		return false;
	}
});

const squareUrl = ref(store.$state.user.avatar);
const appConfig = useAppConfig();
// 头像栏命令

const handleCommand = (command) => {
	if (command == 'logout') {
		store.logout();
		router.replace('/login');
	} else {

		router.push(command)
	}
}
// 全屏
import { useFullscreen, useDark, useToggle } from '@vueuse/core'
const { toggle: toggleScreen } = useFullscreen();
// darkMode
const isDark = useDark()
const toggleDark = useToggle(isDark)
// 菜单折叠
const collapse = ref(false);
const toggleMenu = useToggle(collapse);


</script>
<style>
.main {
	height: calc(100vh - 120px)
}
</style>
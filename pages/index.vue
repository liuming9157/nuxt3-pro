<template>
	<div class="w-full">
		<div class="flex flex-wrap">
			<div class="p-5 w-full md:w-1/3 lg:w-1/4" v-for="(item, index) in 8" :key="index">
				<div class="border p-5">
					<div class="text-gray-500">销售额</div>
					<div class="text-3xl my-5">{{ item * 1000 }}</div>
					<el-progress :percentage="item * 10" />
				</div>
			</div>
		</div>
		<div ref='echartsRef' class='w-full h-96'></div>
	</div>
</template>
<script setup>
useHead({
	title: '首页'
});
// echarts图标
const echarts = useEcharts();
const echartsRef = ref();
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	myChart.setOption({
		title: {
			text: '产品销量'
		},
		tooltip: {},
		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		},
		yAxis: {},
		series: [
			{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}
		]
	});
})

</script>
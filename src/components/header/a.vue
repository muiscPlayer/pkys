<template>
	<div class="a">
		a组件
		<p>{{a}}</p>
		<div>{{arr}}</div>
		<button @click='changeA'>changeA</button>
	</div>
</template>

<script>

	export default {
		created(){
			this.$store.dispatch('setArr')
		},
		computed: {
			a() {
				return this.$store.getters.getprice
			},
			arr(){
				return this.$store.getters.getArr
			}
		},
		methods: {
			changeA() {
				this.$store.dispatch('Addprice',5)
			}
		}
	}
</script>

<style></style>
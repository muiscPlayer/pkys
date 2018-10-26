<template>
	<div class="a">
		b组件
		<p>{{getprice}}</p>
		<button @click='Addprice1'>changeA</button>
	</div>
</template>

<script>
	import {mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		computed: {
			// a() {
			// 	return this.$store.getters.getprice
			// }
			...mapGetters([
				'getprice',
				'getArr'
			])
			
		},
		methods: {
			// changeA() {
			// 	this.$store.dispatch('Addprice',5)
			// }
			...mapMutations([
				'Addprice'
			]),
			...mapActions([
				'Addprice'
			]),
			Addprice1(){
				this.Addprice(5)
			}
		}
	}
</script>

<style></style>
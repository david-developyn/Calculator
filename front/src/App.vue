<template>
	<input type="number" v-model="number_1" @input="get_answer()" />
	<span>{{symbol}}</span>
	<input type="number" v-model="number_2" @input="get_answer()" />
	<span id="answer">=0</span>
	<br />
	<button @click="get_answer('+')">+</button>
	<button @click="get_answer('-')">-</button>
	<button @click="get_answer('×')">×</button>
	<button @click="get_answer('÷')">÷</button>
</template>

<script setup>
	import { ref } from "vue";
	import axios from "axios";

	const number_1 = ref(0);
	const number_2 = ref(0);
	const symbol = ref("+");
	
	const get_answer = (change_symbol = symbol.value) => {
		symbol.value = change_symbol;
		let endpoint;
		switch (symbol.value) {
			case "+":
				endpoint = "add";
				break;
			case "-":
				endpoint = "sum";
				break;
			case "×":
				endpoint = "multiply";
				break;
			case "÷":
				endpoint = "divide";
				break;
		}
		axios.post(`http://localhost:3000/${endpoint}`, {
			number_1: number_1.value,
			number_2: number_2.value
		}).then(qwe => window.answer.innerText = `=${qwe.data}`).catch(error => console.error(error));
	};
</script>

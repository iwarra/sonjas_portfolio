<script setup>
import { poems } from '../content/introspektion.js';
</script>

<template>
	<div class="wrapper">
		<h1 class="title">Introspektion</h1>
		<div class="intro">
			<img
				src="/src/assets/introspektion_bok.jpg"
				alt="" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente harum corrupti. Ut
				minus in, repudiandae, culpa aliquid porro voluptate rem ab magnam, est at ad iusto quisquam
				reprehenderit enim.
			</p>
		</div>
		<ul class="poems-list">
			<li
				v-for="poem in poems"
				:key="poem.title">
				<h2>
					{{ poem.title }}
				</h2>
				<p v-html="poem.poem"></p>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.title {
	overflow: hidden;
	white-space: nowrap;
	border-right: 2px solid transparent;
	width: 0;
	max-width: max-content;
	animation: typing 2s steps(30, end) forwards, blinking 2.5s 1;
}

@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}

@keyframes blinking {
	0% {
		border-color: transparent;
	}
	50% {
		border-color: black;
	}
	100% {
		border-color: transparent;
	}
}

.intro {
	display: flex;
	flex-direction: row;
	gap: 2rem;
	/* flex-wrap: wrap;
	flex: 0 1 40%; */

	img {
		max-width: 40%;
		flex: 0 1 40%;
	}

	p {
		display: inline-block;
	}
}

.poems-list {
	list-style: none;
}
</style>

<script setup>
import { poems } from '../content/introspektion.js';
</script>

<template>
	<div class="wrapper">
		<h1>
			<span class="accent">Introspektion</span>
		</h1>
		<div class="intro">
			<img
				src="/src/assets/introspektion_bok.jpg"
				alt="" />
			<div>
				<p class="text-large">
					Introspektion är en diktsamling och Sonjas första bok på svenska. Den innehåller 104
					dikter som reflekterar över människor, livet och vår plats i det. Den täcker olika känslor
					och stämningar - kärlek, kamp, självutforskning och tillståndet i världen omkring oss.
				</p>
				<p class="text-large">
					Boken talar om mörker och ljus och våra känslor och vårt humör, och hur vi kan vara som
					människor - både de goda och de fula sidorna av vår natur.
				</p>
				<p class="text-large">Ta en djupdykning inuti och se vad du hittar.</p>
			</div>
		</div>
		<div class="quote">
			<q>Who looks outside, dreams; who looks inside, awakes.</q>
			<span style="margin-left: 1rem">Carl Jung</span>
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
	}

	p {
		display: inline-block;
	}
}

.poems-list {
	list-style: none;
}

@media (max-width: 600px) {
	.intro {
		flex-direction: column;
		align-items: center;

		img {
			max-width: 80svw;
		}

		p {
			text-align: center;
		}
	}

	.poems-list {
		padding: 0;
		text-align: center;
	}
}
</style>

<script setup lang="ts"></script>

<template>
	<div>
		<h1>
			<span class="accent">Om Sonja Josipovic</span>
		</h1>
		<div class="about">
			<img
				src="/src/assets/sonja_josipovic.jpg"
				alt="" />
			<div>
				<p class="text-large">
					Sonja föddes i ex-Jugoslavien. Hon skrev sin första dikt när hon bara var sju år gammal.
					Hon har skrivit sedan dess, i olika former, språk och för olika publikationer. Hennes verk
					inkluderar många tidningsartiklar, sångtexter och en roman. Alla hennes verk förenas av
					hennes ordspel och djupa reflektioner av den mänskliga naturen som kommer från Sonjas
					psykologexamen.
				</p>
				<p class="text-large">
					Sonja flyttade till Sverige 2012 och är nu en publicerad författare på svenska. Med mycket
					ansträngning och beslutsamhet erövrade hon språkbarriärerna och skrev på ett främmande
					språk. Hennes första bok i Sverige kom ut 2024. Det är en diktsamling som heter
					Introspektion.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	gap: 2rem;
}

img {
	max-width: 30vw;
}

@media (max-width: 600px) {
	.about {
		flex-direction: column;
		align-items: center;
		img {
			max-width: 80svw;
		}

		p {
			text-align: center;
		}
	}
}
</style>

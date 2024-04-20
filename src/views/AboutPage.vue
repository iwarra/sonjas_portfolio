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
			<div class="about-text">
				<p class="text-large">
					Sonja Josipovic är författare, frilansjournalist och psykolog. Hon föddes i
					ex-Jugoslavien. Första dikten skrev hon när hon bara var sju år gammal och då började
					hennes resa där papper och penna blev en oundviklig del av hennes liv. Hon har skrivit
					sedan dess, i olika former, språk och för olika publikationer. Hennes verk inkluderar
					många tidningsartiklar, sångtexter och en roman. Hon har skrivit och publicerat allt från
					artiklar i modemagasin, låttexter för olika popartister, dikter, noveller och en roman som
					fick stor uppmärksamhet i hennes hemland.
				</p>
				<p class="text-large">
					Sonja flyttade till Sverige 2012. Med mycket ansträngning och beslutsamhet erövrade hon
					språkbarriärerna och skrev på ett främmande språk. Hennes första bok i Sverige kom ut
					2024. Introspektion är en diktsamling där hon skriver om vanliga människor, deras känslor,
					livet och den oundvikliga - döden. Sonjas största inspiration är människor och hennes
					skrivande är en blandning av poesi, psykologi och filosofi.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	gap: 2rem;
	padding-block: 2rem;
}

.about-text {
	padding: 1rem;
}

img {
	max-width: 30vw;
}

@media (max-width: 600px) {
	h1 {
		text-align: center;
	}

	.about {
		flex-direction: column;
		align-items: center;
		padding-inline: 1rem;

		img {
			max-width: 80svw;
		}

		p {
			text-align: center;
		}
	}
}
</style>

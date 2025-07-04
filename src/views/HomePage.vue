<script setup>
import BookList from '/src/components/BookList.vue';
import { books } from '../data/books';
</script>

<template>
	<div class="hero">
		<div class="hero-content">
			<picture class="hero-image">
				<source
					srcset="/src/assets/sonja_and_nikki_smaller.webp"
					media="(max-width: 800px)" />
				<img
					src="/src/assets/sonja_and_nikki.webp"
					alt="" />
			</picture>
			<div class="hero-info">
				<h1>
					<span class="accent">Välkommen</span>
				</h1>
				<p class="text-large">Upptäck mer om Sonjas böcker, kommande evenemang och alla nyheter</p>
				<a
					class="cta"
					href="https://www.adlibris.com/se/bok/introspektion-9789189884830"
					target="_blank"
					>Köp Introspektion</a
				>
			</div>
		</div>
		<div class="divider"></div>
	</div>

	<div class="about">
		<q class="quote">För mig att skriva är som att andas - något som jag kunde inte leva utan.</q>
		<div class="about-text">
			<p>
				Sonja Josipovic är författare, frilansjournalist och psykolog. Hon föddes i ex-Jugoslavien.
				Första dikten skrev hon när hon var ungefär sju år gammal och då började hennes skrivresa
				där papper och penna blev en oundviklig del av hennes liv. Hon har skrivit sedan dess, i
				olika former, språk och för olika publikationer. Hennes verk inkluderar många
				tidningsartiklar, sångtexter och en roman som fick stor uppmärksamhet i hennes hemland.
			</p>
			<p>
				Sonja flyttade till Sverige 2012. Med mycket ansträngning och beslutsamhet erövrade hon
				språkbarriärerna och skrev på ett främmande språk. Introspektion, hennes första bok på
				svenska, kom ut 2024. Introspektion är en diktsamling där hon skriver om oss, vanliga
				människor, våra känslor, livet och den oundvikliga - döden. Människor är Sonjas största
				inspiration och hennes skrivande är en blandning av poesi, psykologi och filosofi.
			</p>
		</div>
		<button class="button-primary">
			<RouterLink
				to="/om"
				style="color: white"
				>Mer om Sonja</RouterLink
			>
		</button>
		<div class="divider"></div>
	</div>

	<section class="books">
		<h2><span class="accent">Sonjas böcker</span></h2>
		<BookList :books="books" />
		<div
			class="divider"
			style="margin-top: 3rem"></div>
	</section>

	<section class="instagram">
		<div
			class="elfsight-app-a5d52e43-8708-4fb5-8db3-274897213fb5"
			data-elfsight-app-lazy></div>
	</section>
</template>

<style scoped>
.button-primary {
	margin: 0 auto;
	background-color: black;
	color: white;
	border: none;
	text-align: center;
	border-radius: 33px;
	padding: 22px 38px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.26) 2.8px 2.8px 3.8px;
}

.hero {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.hero-content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2.6rem;
	min-height: 50svh;
}

.hero-info {
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	max-width: 45%;

	p {
		padding: 0;
		margin: 0;
	}
}

.hero-image {
	max-width: 45%;
}

.cta {
	align-self: flex-start;
	border: 1px solid #979696;
	background-color: white;
	text-align: center;
	border-radius: 34px;
	padding: 22px 38px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.cta:hover {
	border-color: #707070;
	box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 4px;
	cursor: pointer;
}

.about {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding-top: 5rem;
	margin-bottom: 2rem;
}

.about-text {
	display: grid;
	gap: 4rem;
	grid-template-columns: 1fr 1fr;
	text-align: justify;
	padding-inline: 1rem;
}

.books {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 4rem 1rem 0rem 1rem;
}

.instagram {
	margin-top: 5rem;
}

@media (max-width: 600px) {
	.about-text {
		grid-template-columns: 1fr;
		gap: 0;
		text-align: center;
	}

	.divider {
		order: 3;
	}

	.instagram {
		max-width: 95svw;
	}
}

@media (max-width: 800px) {
	.hero-content {
		flex-direction: column;
	}

	.hero-info {
		order: 1;
		max-width: 100%;
		align-items: center;
		padding-inline: 1rem;
		gap: 0;

		p {
			text-align: center;
			padding-top: 0.5rem;
			padding-bottom: 2.5rem;
		}

		.cta {
			align-self: center;
			padding: 18px 28px;
		}
	}

	.hero-image {
		order: 2;
		max-width: 80svw;
	}

	.books h2 {
		text-align: center;
	}
}
</style>

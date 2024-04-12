<script setup>
import { books } from '../content/books';
</script>

<template>
	<div class="hero">
		<div class="hero-content">
			<img
				class="hero-image"
				src="/src/assets/sonja_and_nikki.jpg"
				alt="" />
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
				Första dikten skrev hon när hon bara var sju år gammal och då började hennes resa där papper
				och penna blev en oundviklig del av hennes liv. Hon har skrivit sedan dess, i olika former,
				språk och för olika publikationer. Hennes verk inkluderar många tidningsartiklar, sångtexter
				och en roman.
			</p>
			<p>
				Sonja flyttade till Sverige 2012. Med mycket ansträngning och beslutsamhet erövrade hon
				språkbarriärerna och skrev på ett främmande språk. Hennes första bok i Sverige kom ut 2024.
				Introspektion är en diktsamling där hon skriver om vanliga människor, deras känslor, livet
				och den oundvikliga - döden. Sonjas största inspiration är människor och hennes skrivande är
				en blandning av poesi, psykologi och filosofi.
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
		<ul class="books-list">
			<li
				class="book-row"
				v-for="book in books"
				:key="book.title">
				<div>
					<h3>{{ book.title }}</h3>
					<img
						src="/src/assets/introspektion.jpg"
						alt="" />
				</div>
				<div class="book-text">
					<p v-html="book.description"></p>
					<RouterLink
						to="/introspektion"
						style="text-decoration: underline"
						>Läs mer</RouterLink
					>
				</div>
			</li>
		</ul>
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

	h1,
	p {
		padding: 0;
		margin: 0;
	}
}

.hero-image {
	max-width: 45%;
}

.book-row {
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 2rem;
	align-items: center;

	h3 {
		margin-top: 0;
	}

	img {
		height: 380px;
	}
}

ul {
	padding: 0;
}

.cta {
	align-self: flex-start;
	border: 1px solid #cecece;
	background-color: white;
	text-align: center;
	border-radius: 33px;
	padding: 22px 38px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
}

.cta:hover {
	border-color: #979696;
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
}

.books {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding-top: 4rem;
}

@media (max-width: 600px) {
	.about-text {
		grid-template-columns: 1fr;
		gap: 0;
		text-align: center;
	}

	.book-row {
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 1rem;
	}

	.book-text {
		text-align: center;
	}

	.divider {
		order: 3;
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

		p {
			text-align: center;
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
}
</style>

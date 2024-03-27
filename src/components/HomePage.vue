<script setup>
import { books } from '../content/books';
</script>

<template>
	<div class="hero">
		<!-- <div class="hero-decoration"></div> -->
		<div class="hero-content">
			<img
				class="hero-image"
				src="/src/assets/sonja_and_nikki.jpg"
				alt="" />
			<span></span>
			<div class="hero-info">
				<h1>
					<span class="accent">Välkommen</span>
				</h1>
				<p class="text-large">
					Upptäck mer om Sonjas böcker, kommande evenemang och alla nya releaser
				</p>
				<button class="cta">
					<a
						href="https://www.adlibris.com/se/bok/introspektion-9789189884830"
						target="_blank"
						>Köp Introspektion</a
					>
				</button>
			</div>
		</div>
		<div class="divider"></div>
	</div>
	<div class="about">
		<!-- <h2>Om Sonja</h2> -->
		<q class="quote">För mig att skriva är som att andas - något som jag kunde inte leva utan.</q>
		<div class="about-text">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique dignissimos
				molestias modi voluptates debitis molestiae tempora eveniet, ratione aut, optio fugiat ipsa
				incidunt commodi vitae! Inventore maxime odit omnis! Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. In, dolores neque pariatur voluptatibus voluptate atque quibusdam
				recusandae excepturi aperiam ipsum quia? Some extra text to make for equal length as this
				column is a bit shorter.
			</p>
			<p>
				Consequatur omnis voluptate veritatis qui dignissimos rem illo. Earum? Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Expedita dolore fuga recusandae debitis rerum nulla
				veritatis et, accusantium porro corporis perspiciatis odio repellat necessitatibus
				aspernatur aliquam excepturi ullam. Unde, molestias? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Consectetur similique dignissimos molestias modi voluptates debitis
				molestiae tempora eveniet, ratione aut, optio fugiat ipsa incidunt commodi vitae!
			</p>
		</div>
		<button class="button-primary">
			<RouterLink
				to="/om-sonja"
				style="color: white"
				>Mer om Sonja</RouterLink
			>
		</button>
	</div>

	<section class="books">
		<h2><span class="accent">Sonja's Böcker</span></h2>
		<ul>
			<li
				class="book-row"
				v-for="book in books"
				key="book.title">
				<img
					style="height: 380px"
					:src="book.photoUrl"
					alt="" />
				<div>
					<h3>{{ book.title }}</h3>
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
.divider {
	width: 100%;
	border-top: 2px solid #0c0d0e;
}

.wave-divider {
	position: absolute;
	top: 100%;
	color: yellow;
}

.button-primary {
	margin: 0 auto;
	background-color: black;
	color: white;
	border: none;
	text-align: center;
	border-radius: 33px;
	padding: 24px 40px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
}

.hero-content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	gap: 2.6rem;
	min-height: 50svh;
}

.hero-info {
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	max-width: 40%;

	h1,
	p {
		padding: 0;
		margin: 0;
	}
}

.hero {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.hero-decoration {
	position: absolute;
	top: -4rem;
	bottom: 0;
	left: 0;
	background-color: #f9f8f4;
	width: 40%;
	z-index: -1;
}

.hero-image {
	max-width: 45%;
}

.book-row {
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 2rem;
	/* display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	gap: 2rem; */

	h3 {
		margin-top: 0;
	}
}

/* section,
.hero {
	margin-bottom: 5rem;
} */

ul {
	padding: 0;
}

.cta {
	align-self: flex-start;
	border: 1px solid #cecece;
	background-color: white;
	text-align: center;
	/* transform-style: preserve-3d; */
	border-radius: 33px;
	padding: 24px 40px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
}

.cta:hover {
	border-color: #f9f8f4;
	background-color: #fbf4f8;
}

.quote {
	text-align: center;
	color: #181b1f;
	font-family: 'Josefin Sans', Sans-serif;
	font-size: 48px;
	font-weight: 400;
	line-height: 1.11em;
	letter-spacing: -1.4px;
}

.about {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	/* background-color: #f9f8f4; */
	padding-top: 5rem;
	padding-bottom: 3rem;
	position: relative;
}

.about-text {
	display: grid;
	gap: 3rem;
	grid-template-columns: 1fr 1fr;
}

.accent {
	-webkit-text-fill-color: inherit;
	background-image: url('../assets/highlighter.svg');
	background-position: 50% 90%;
	background-repeat: no-repeat;
	background-size: auto;
	background-clip: content-box;
}

.books {
	padding-top: 5rem;
}
</style>

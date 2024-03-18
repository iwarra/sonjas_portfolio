<script setup>
import { books } from '../content/books';
</script>

<template>
	<div class="hero">
		<!-- <div class="hero-decoration"></div> -->
		<div class="hero-content">
			<img
				class="hero-image"
				src="/src/assets/book_heart.jpg"
				alt="" />
			<span></span>
			<div class="hero-info">
				<h1>Välkommen till min sida</h1>
				<p class="text-large">
					Upptäck mer om Sonjas böcker, kommande evenemang och alla nya releaser
				</p>
				<button class="cta">
					<a
						href="https://www.adlibris.com/se/bok/introspektion-9789189884830"
						target="_blank"
						>Köp min bok</a
					>
				</button>
			</div>
		</div>
	</div>
	<section class="about">
		<h2>Om mig</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique dignissimos
			molestias modi voluptates debitis molestiae tempora eveniet, ratione aut, optio fugiat ipsa
			incidunt commodi vitae! Inventore maxime odit omnis! Lorem ipsum dolor sit amet consectetur,
			adipisicing elit. In, dolores neque pariatur voluptatibus voluptate atque quibusdam recusandae
			excepturi aperiam ipsum quia? <br />
			Consequatur omnis voluptate veritatis qui dignissimos rem illo. Earum? Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Expedita dolore fuga recusandae debitis rerum nulla
			veritatis et, accusantium porro corporis perspiciatis odio repellat necessitatibus aspernatur
			aliquam excepturi ullam. Unde, molestias? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Consectetur similique dignissimos molestias modi voluptates debitis molestiae tempora
			eveniet, ratione aut, optio fugiat ipsa incidunt commodi vitae! Inventore maxime odit omnis!
			<br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, dolores neque pariatur
			voluptatibus voluptate atque quibusdam recusandae excepturi aperiam ipsum quia? Consequatur
			omnis voluptate veritatis qui dignissimos rem illo. Earum? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Expedita dolore fuga recusandae debitis rerum nulla veritatis
			et, accusantium porro corporis perspiciatis odio repellat necessitatibus aspernatur aliquam
			excepturi ullam. Unde, molestias?
		</p>
	</section>
	<section class="books">
		<h2>Mina Böcker</h2>
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
.hero {
	position: relative;
}

.hero-content {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3rem;
}

.hero-info {
	display: flex;
	flex-direction: column;
	gap: 1.3rem;

	h1,
	p {
		padding: 0;
		margin: 0;
	}
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
	max-width: 500px;
}

.book-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;

	h3 {
		margin-top: 0;
	}
}

section,
.hero {
	margin-bottom: 2rem;
}

ul {
	padding: 0;
}

.cta {
	align-self: flex-start;
	border: 1px solid #cecece;
	background-color: white;
	text-align: center;
	/* transform-style: preserve-3d; */
	border-radius: 3px;
	padding: 24px 40px;
	font-family: Manrope, sans-serif;
	font-size: 16px;
	line-height: 1.125em;
	transition: transform 0.35s, border-color 0.35s, background-color 0.35s;
}

.cta:hover {
	border-color: #f9f8f4;
	background-color: #f9f8f4;
}

-webkit-text-fill-color: inherit;
background-image: url('https://assets-global.website-files.com/600a053d63ba7783aa0038a1/600af3e9fc1c9b23a782642a_bg-home-text-book-template.svg');
background-position: 50% 90%;
background-repeat: no-repeat;
background-size: auto;
background-clip: content-box;
</style>

<script setup>
import { RouterLink } from 'vue-router';
import InstagramIcon from './components/icons/InstagramIcon.vue';
import LinkedinIcon from './components/icons/LinkedinIcon.vue';
import MailIcon from './components/icons/MailIcon.vue';
</script>

<template>
	<div class="container">
		<header>
			<div class="header-logo">
				<img
					class="logo"
					src="/js.png"
					alt="logo" />
				<span>Sonja Josipovic</span>
			</div>
			<nav class="nav-links">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/press">Press</RouterLink>
				<RouterLink to="/events">Events</RouterLink>
			</nav>
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
			<div><small>Sonja Josipovic &copy; 2024</small></div>
			<div class="footer-icons">
				<a
					href="mailto:sonja.josipovic@gmail.com"
					class="border-icon"
					><MailIcon
				/></a>
				<a
					href="https://www.linkedin.com/in/sonja-josipovic-34897148/"
					class="border-icon"
					><LinkedinIcon
				/></a>
				<a
					href="https://www.instagram.com/sonja_josipovic/"
					class="border-icon">
					<InstagramIcon />
				</a>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 4rem;
	max-width: 1000px;
	height: 100svh;
}

header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 2rem;
	border-bottom: 1px solid #e9e9e9;

	.header-logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		color: #808080;
	}

	.logo {
		height: 20px;
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
}

footer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	background-color: #f2f2eb;

	.border-icon {
		border: 1px solid rgb(116, 115, 115);
		border-radius: 50%;
		height: 40px;
		line-height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(116, 115, 115);
	}

	.border-icon:hover {
		border: 1px solid black;
		color: black;
		cursor: pointer;
	}

	svg {
		font-size: 1rem;
		color: rgb(116, 115, 115);
	}

	.footer-icons {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
}

main {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
import InstagramIcon from './components/icons/InstagramIcon.vue';
import LinkedinIcon from './components/icons/LinkedinIcon.vue';
import MailIcon from './components/icons/MailIcon.vue';
</script>

<template>
	<div class="container">
		<header>
			<div>
				<a
					href="/"
					class="header-logo">
					<img
						class="logo"
						src="/js.png"
						alt="logo" />
					<span>Sonja Josipovic</span>
				</a>
			</div>
			<nav class="nav-links">
				<RouterLink to="/">Hem</RouterLink>
				<RouterLink to="/nyheter">Nyheter</RouterLink>
				<!-- <RouterLink to="/events">Events</RouterLink> -->
			</nav>
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
			<div class="footer-text"><small>Sonja Josipovic &copy; 2024</small></div>
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

<style>
header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 2rem;

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

main {
	display: flex;
	flex-direction: column;
	/* gap: 3rem; */
	flex: 1;
}

footer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	border-top: 1px solid #e9e9e9;
	/* background-color: #f9f8f4; */

	.border-icon {
		border: 1px solid rgb(186, 186, 186);
		border-radius: 50%;
		height: 40px;
		line-height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(177, 177, 177);
		background-color: #c3dfe2;
	}

	.border-icon:hover {
		border: 1px solid #7a9093;
		cursor: pointer;

		svg {
			color: #425565;
		}
	}

	svg {
		font-size: 1rem;
		color: rgb(95, 94, 94);
	}

	.footer-icons {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
}

@media (max-width: 500px) {
	footer {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		.footer-icons {
			order: 1;
		}
		.footer-text {
			order: 2;
		}
	}
}
</style>

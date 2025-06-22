<script setup>
defineProps(['books']);
</script>

<template>
	<ul class="books-list">
		<li
			class="book-row"
			v-for="book in books"
			:key="book.title">
			<h3 class="book-title">{{ book.title }}</h3>
			<div class="book-info">
				<img
					:src="book.photoUrl"
					:alt="`${book.title} bokomslag`" />
				<div class="book-text">
					<p v-html="book.description"></p>
					<RouterLink
						:to="book.link"
						class="book-link"
						>Läs mer</RouterLink
					>
				</div>
			</div>
		</li>
	</ul>
</template>

<style scoped>
ul {
	padding: 0;
}
.book-row {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: start;

	.book-title {
		margin-top: 0;
	}

	.book-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	img {
		width: 100%;
		max-width: 300px;
		height: auto;
		object-fit: cover;
	}

	.book-link {
		text-decoration: underline;
	}
}

.book-text {
	p {
		margin-top: 0px;
	}
}

@media (max-width: 800px) {
	.book-info {
		flex-direction: column !important;
		align-items: center !important;
		gap: 1rem;
		padding-inline: 1rem;

		img {
			width: 100%;
			max-width: 300px;
			height: auto;
			object-fit: cover;
		}
	}

	.book-title {
		font-size: 20px;
	}

	.book-row {
		flex-direction: column;
		align-items: center;
	}

	.book-text {
		text-align: center;
		margin-top: 20px;
	}
}
</style>

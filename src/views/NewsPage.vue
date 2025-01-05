<script setup>
import { ref } from 'vue';
const posts = ref();
const getJsonFiles = import.meta.glob('../blog/_posts/*.json', { eager: true });

posts.value = Object.entries(getJsonFiles).map((entry) => {
	console.log(entry);
	const url = entry[0].replace('../blog/_posts/', '').replace('.json', '');
	const title = entry[1].title;
	const data = entry[1].default;
	const slug = entry[1].summary;
	let coverImg;
	if (entry[1].thumbnail) {
		coverImg = entry[1].thumbnail.replace('/public', '');
	}

	return {
		...data,
		slug,
		url,
		title,
		coverImg,
	};
});
</script>

<template>
	<div>
		<div class="frame">
			<h1><span class="accent">Nyheter</span></h1>
			<div
				v-for="post in posts"
				:key="post.title">
				<RouterLink
					:to="`/nyheter/${post.url}`"
					class="wrapper">
					<img
						class="coverImage"
						:src="post.coverImg"
						alt="" />
					<div>
						<h2>{{ post.title }}</h2>
						<p>{{ post.summary }}</p>
					</div>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.frame {
	max-width: 90svw;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 20px;
}

.wrapper {
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: #f4f4f4;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;
}

.coverImage {
	width: 100%;
	max-height: 100%;
	min-height: 200px;
	object-fit: cover;
}

.wrapper div {
	padding: 15px;
	display: flex;
	flex-direction: column;
}

h2 {
	font-size: 1.25rem;
	margin: 10px 0;
}

p {
	color: #555;
	font-size: 1.1rem;
}

@media (min-width: 768px) {
	.wrapper {
		flex-direction: row;
		align-items: stretch;
	}

	.coverImage {
		min-height: 200px;
		height: 100%;
		width: 200px;
		object-fit: cover;
	}

	h2 {
		font-size: 1.5rem;
	}
}
</style>

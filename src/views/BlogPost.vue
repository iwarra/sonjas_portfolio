<template>
	<div
		v-if="post"
		class="wrapper">
		<h1>{{ post.title }}</h1>
		<span>Publicerad: {{ post.date.slice(0, 10) }}</span>
		<div v-html="markdownContent"></div>
		<!-- <img
			:src="post.thumbnail.replace('/public', '')"
			alt="" /> -->
		<ul class="imagesList">
			<li v-for="image in images">
				<img
					:src="image"
					alt="" />
			</li>
		</ul>
	</div>
	<div v-else>
		<p>Loading post...</p>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { ref, onMounted } from 'vue';
const markdownContent = ref('');
const route = useRoute();
const images = ref(null);
const post = ref(null);

async function loadPost(slug) {
	try {
		const postModule = await import(`../blog/_posts/${slug}.json`);
		post.value = postModule.default;
		console.log(post.value.body);
		const rawHtml = marked(post.value.body);
		markdownContent.value = DOMPurify.sanitize(rawHtml);

		images.value = post.value.galleryImages.map((entry) =>
			entry.image.image.replace('/public', ''),
		);
		console.log(images.value);
	} catch (error) {
		console.error(`Could not load post with slug: ${slug}`, error);
	}
}

onMounted(() => {
	const slug = route.params.title; // Access slug after the component is mounted
	if (slug) {
		loadPost(slug);
	} else {
		console.error('Slug is undefined');
	}
});
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: start;
	max-width: 90svw;
}
.imagesList {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
}

@media (min-width: 768px) {
	.imagesList {
		flex-wrap: nowrap;
	}
}
</style>

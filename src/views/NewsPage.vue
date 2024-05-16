<script setup>
import { ref } from 'vue';
const posts = ref();
const getJsonFiles = import.meta.glob('../blog/_posts/*.json', { eager: true });

posts.value = Object.entries(getJsonFiles).map((entry) => {
	const url = entry[0].replace('../blog/_posts/', '').replace('.json', '');
	const title = entry[1].title;
	const data = entry[1].default;
	const slug = entry[1].summary;

	return {
		...data,
		slug,
		url,
		title,
	};
});
</script>

<template>
	<div>
		<div>
			<h1>Nyheter</h1>
			<h2 style="margin-top: 1rem">Under uppbyggnad...</h2>
			<!-- <div
				v-for="post in posts"
				:key="post.title">
				<RouterLink :to="`/nyheter/${post.url}`">
					<h2>{{ post.title }}</h2>
				</RouterLink>
				<span>{{ post.summary }}</span>
			</div> -->
		</div>
	</div>
</template>

<style scoped></style>

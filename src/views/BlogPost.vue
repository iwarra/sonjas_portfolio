<template>
	<div>
		<!-- <h1>{{ post.title }}</h1>
		<span>Publicerad: {{ post.date.slice(0, 10) }}</span>
		<p>{{ post.body }}</p> -->
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { Octokit } from 'https://esm.sh/octokit';
import { ref } from 'vue';

const route = useRoute();
const postTitle = route.params.title + '.json';
const post = ref();

const octokit = new Octokit({
	auth: import.meta.env.API_TOKEN,
});

async function getFile(owner, repo, path) {
	try {
		const response = await octokit.request(`GET /repos/{owner}/{repo}/contents/{path}`, {
			owner,
			repo,
			path,
		});
		// Decode the content from base64
		const content = atob(response.data.content);
		return content;
	} catch (error) {
		console.error('Error fetching file:', error);
		return null;
	}
}

getFile('iwarra', 'sonjas_portfolio', `src/blog/_posts/${postTitle}`).then((content) => {
	post.value = JSON.parse(content);
	console.log(post.value);
});
</script>

<style scoped></style>

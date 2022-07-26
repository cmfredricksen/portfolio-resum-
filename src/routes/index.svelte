<script>
	import Card from '../lib/components/card.svelte';

	const links = [
		{
			url: 'https://amandas-computing.netlify.app',
			description: "Hardware Engineer's website",
			title: `Amanda's Custom Computing`,
			img: '/images/computers.jpg'
		},
		{
			url: 'https://technotesbycmfred.netlify.app',
			description: 'A simple guide to Git & GitHub for Beginners',
			title: 'Tech Notes',
			img: '/images/water-lilies.jpg'
		},
		{
			url: 'https://cmfred-dev.netlify.app',
			description: 'My Homepage & Freelance Service Website',
			title: 'CM Fredricksen Development',
			img: '/images/tree-home.jpg'
		},
		{
			url: 'https://ewc-annual-sale.netlify.app',
			description: 'A web poster for a local art show',
			title: 'Ely Watercolor Club',
			img: '/images/dragonfly.jpg'
		},
		{
			url: 'https://web-dev-prep.netlify.app/',
			description: 'Basic foundations in web development',
			title: 'Web Dev Prep',
			img: '/images/trees-from-rocks.jpg'
		},
		{
			url: 'https://ai-therapist.netlify.app/',
			description: "Generating Art using AI is calming and relaxing",
			title: 'AI Therapist',
			img: '/images/forest-path.png'
		}
	];
</script>

<div class="intro">
	<p>
		Welcome to my Web Folio! Here are links to some of the recent personal projects I have done
		while learning web development. You can also find a link to my GitHub page which contains some
		of the repos for these projects, along with others I am working on, and some from when I started
		learning too. Some of these sites are hosted on Netlify using GitHub for integration. Above you
		will find a link to my resumé. Thanks for stopping by!
	</p>
</div>

<div class="main">
	<div class="container">
		{#each links as link}
			<Card {...link} />
		{/each}
	</div>
</div>

<style>
	.intro {
		padding: 1rem 3rem;
		font-size: large;
	}

	.main {
		max-width: 1200px;
		margin: auto;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		margin: 2rem auto;
		padding: 0;
		align-items: center;
		justify-content: center;
	}
</style>

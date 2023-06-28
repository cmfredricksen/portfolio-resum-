<script>
	import Card from '../lib/components/card.svelte';

	const links = [
		{
			url: 'https://cooking-with-fred.netlify.app/',
			description: 'My favorite recipes, some are my own!',
			title: 'Cooking with Fred',
			img: '/images/worlds-collide.jpg'
		},
		{
			url: '/',
			description: 'Educational Quiz Website',
			title: 'US Civics Quiz',
			img: '/images/swamp-nymph.jpg'
		},
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
			description: 'Generating Art using AI is calming and relaxing',
			title: 'AI Therapist',
			img: '/images/forest-path.png'
		}
	];
</script>

<svelte:head>
	<title>Web &middot; Folio by CM Fredricksen</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
	/>
</svelte:head>

<div class="intro">
	<p>
		Welcome to my Web Folio! The samples below will show my sense of design and color, very clean
		and beautiful. Ease of reading and navigation are my top priorities when creating web
		experiences, but I also love vibrant colors. Every project has custom chosen colors and fonts
		which I test for accessibility. Layout is also extremely important to making your website easy
		to read and navigate.
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
		margin: 0 auto;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		padding: 0;
		align-items: center;
		justify-content: center;
	}
</style>

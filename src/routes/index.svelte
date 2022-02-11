<script>
	import Card from '../lib/components/card.svelte';

	const links = [
		{
			url: 'https://gaylord-computing.netlify.app',
			description: "Hardware Engineer's website",
			title: 'Gaylord Custom Computing',
			img: '/images/008-image.png'
		},
		{
			url: 'https://technotesbycmfred.netlify.app',
			description: 'A simple guide to Git & GitHub for Beginners',
			title: 'Tech Notes',
			img: '/images/026-coding.png'
		},
		{
			url: 'https://cmfred-dev.netlify.app',
			description: 'My Homepage & Freelance Service Website',
			title: 'CM Fredricksen Development',
			img: '/images/027-coding-1.png'
		},
		{
			url: 'https://kramer-bay-dog-obedience.netlify.app/',
			description: 'A brochure site for a local dog obedience class',
			title: 'Kramer Bay Dog Obedience',
			img: '/images/017-border-collie.png'
		},
		{
			url: 'https://github.com/cmfredricksen',
			description: 'My Github Repos',
			title: 'GitHub of CM Fredricksen',
			img: '/images/004-github-big-logo.png'
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

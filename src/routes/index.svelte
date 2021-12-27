<script>
	import Card from '../lib/components/card.svelte';

	const links = [
		{
			url: 'https://technotes.cmfred.com',
			description: 'A simple guide to Git & GitHub for Beginners',
			title: 'Tech Notes',
			img: '../static/images/026-coding.png'
		},
		{
			url: 'https://cmfred.com',
			description: 'My Homepage & Freelance Service Website',
			title: 'CM Fredricksen Development',
			img: '../static/images/027-coding-1.png'
		},
		{
			url: 'https://art.cmfred.com',
			description: 'I made a little gallery showcasing my own paintings',
			title: 'Art by Chris',
			img: '../static/images/008-image.png'
		},
		{
			url: 'https://kramer-bay-dog-obedience.netlify.app/',
			description: 'A brochure site for a local dog obedience class',
			title: 'Kramer Bay Dog Obedience',
			img: '../static/images/017-border-collie.png'
		},
		{
			url: 'https://artshop.cmfred.com',
			description: 'A shop to sell my artwork built with WooCommerce',
			title: 'Art Shop',
			img: '../static/images/010-online-shopping.png'
		},
		{
			url: 'https://github.com/cmfredricksen',
			description: 'My Github Repos',
			title: 'GitHub of CM Fredricksen',
			img: '../static/images/004-github-big-logo.png'
		}
	];
</script>

<div class="intro">
	<p>
		Welcome to my Web Folio! Here are links to some of the personal projects I have done while
		learning web development. You can also find a link to my GitHub page which contains the repos
		for these projects along with others I am working on and some from when I started learning.
		Above you will find a link to my resumé. Thanks for stopping by!
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
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
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

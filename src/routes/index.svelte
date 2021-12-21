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
			img: '../static/images/001-dev.png'
		},
		{
			url: 'https://art.cmfred.com',
			description: 'I made a little gallery showcasing my own paintings',
			title: 'Art by Chris',
			img: '../static/images/007-fine-art.png'
		},
		{
			url: 'https://github.com/cmfredricksen',
			description: 'My Github Repos',
			title: 'GitHub of CM Fredricksen',
			img: '../static/images/005-github.png'
		}
	];
</script>

<div class="main">
	<div class="container">
		{#each links as link}
			<Card {...link} />
		{/each}
	</div>
</div>

<style>
	.main {
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		margin: 2rem auto;
		/* align-items: center; */
		/* justify-content: center; */
	}
</style>

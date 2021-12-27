<script>
	import Nav from '$lib/nav.svelte';
	import '../../static/global.css';
</script>

<header>
	<div class="title">
		<h1>Web Portfolio</h1>
		<h3>by <a href="https://cmfred.com" target="blank">Chris Fredricksen</a></h3>
	</div>
	<Nav />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 2px solid var(--clr-headings);
	}

	.title {
		display: flex;
		align-items: center;
	}

	h1 {
		text-shadow: 1px 1px 1px var(--clr-text);
		font-weight: lighter;
	}

	h3 {
		margin-left: 1rem;
		font-style: italic;
	}
</style>

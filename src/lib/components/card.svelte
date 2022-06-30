<script>
	import '../../../static/global.css';

	export let url;
	export let description;
	export let img;
	export let title;
</script>

<div class="card">
	<a href={url} target="blank">
		<img src={img} alt="Icon for site" />
	</a>
	<h3 class="title">
		<a href={url} target="blank">{title}</a>
	</h3>
	<p>{description}</p>
</div>

<style>
	.card {
		border: 4px solid var(--clr-headings);
		width: 300px;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--clr-accent);
		outline: 3px solid var(--clr-text);
	}

	h3 {
		text-align: center;
		margin: 0.5rem 0;
		font-weight: bold;
	}

	a {
		color: var(--clr-headings);
		text-align: center;
		margin: 0.5rem 0;
	}

	a:hover {
		color: var(--clr-text);
	}

	img {
		width: 100px;
		background-color: var(--clr-text);
		padding: 0.25rem;
		outline: 4px solid var(--clr-text);
		border: 4px solid var(--clr-accent);
		border-radius: 0.5rem;
	}

	img:hover {
		outline: 4px solid var(--clr-headings);
		background-color: var(--clr-text);
		border: 2px solid var(--clr-secondary);
		border-radius: 0.5rem;
	}

	p {
		color: white;
	}
</style>

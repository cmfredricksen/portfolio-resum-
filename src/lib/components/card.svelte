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
		border: 3px solid var(--clr-text);
		/* max-width: 20%; */
		width: 300px;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--clr-secondary);
		/* box-shadow: 3px 3px 1px var(--clr-headings); */
		outline: 4px solid var(--clr-headings);
	}

	h3 {
		text-align: center;
		margin: 0.5rem 0;
		font-weight: bold;
	}

	a {
		color: var(--clr-primary);
		text-align: center;
		margin: 0.5rem 0;
		text-shadow: 1px 1px 1px var(--clr-secondary);
	}

	a:hover {
		color: var(--clr-headings);
	}

	img {
		width: 100px;
		background-color: var(--clr-text);
		padding: 0.25rem;
		outline: 4px solid var(--clr-text);
		border: 4px solid var(--clr-headings);
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

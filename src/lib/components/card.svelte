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
		width: 300px;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--clr-accent);
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
		width: 150px;
		background-color: var(--clr-primary);
		padding: 0.75rem;
		border-radius: 0.5rem;
	}

	img:hover {
		border: 2px solid var(--clr-primary);
		border-radius: 0.5rem;
		outline: 1px solid var(--clr-text);
	}

	p {
		color: white;
	}
</style>

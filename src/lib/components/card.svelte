<script>
	import '../../../static/global.css';

	export let url;
	export let description;
	export let img;
	export let title;
</script>

<div class="card">
	<img src={img} alt="Icon for site" />
	<h3 class="title">
		<a href={url} target="blank">{title}</a>
	</h3>
	<p>{description}</p>
</div>

<style>
	.card {
		border: 2px solid var(--clr-text);
		max-width: 20%;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--clr-secondary);
	}

	h3 {
		text-align: center;
		margin: 0.5rem 0;
	}

	a {
		color: var(--clr-accent);
		text-align: center;
		margin: 0.5rem 0;
	}

	img {
		width: 100px;
		background-color: var(--clr-text);
		padding: 0.25rem;
		border-radius: 0.5rem;
	}

	p {
		color: white;
	}
</style>

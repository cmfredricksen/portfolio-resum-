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
		max-width: 30%;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		background-color: var(--clr-secondary);
	}

	a {
		color: var(--clr-accent);
	}

	img {
		width: 100px;
	}
</style>

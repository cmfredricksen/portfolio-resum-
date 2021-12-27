<script>
	import { page } from '$app/stores';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Resumé', path: '/resume' }
	];
</script>

<nav>
	<ul>
		{#each nav as item}
			<li>
				<a class:active={$page.path === item.path} href={item.path}>{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
	}
	li {
		list-style: none;
		margin-right: 1rem;
		font-size: large;
	}

	.active {
		text-decoration: underline;
	}
</style>

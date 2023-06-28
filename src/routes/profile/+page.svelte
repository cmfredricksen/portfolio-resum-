<svelte:head>
	<title>Developer Profile</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
	/>
</svelte:head>
<div class="title">
	<h2>Developer Profile</h2>
	<h1>Chris Fredricksen</h1>
	<h2><a href="/resume-2022-07.pdf" target="_blank">PRINT Resumé</a></h2>
</div>

<div class="current-stack">
	<h2>My Current Web Development Stack</h2>
	<p>The stack I am currently using for my projects is:</p>
	<ul>
		<li>
			<p>SvelteKit</p>
		</li>
		<li>
			<p>Typescript</p>
		</li>
		<li>
			<p>Node JS / NPM</p>
		</li>
		<li>
			<p>HTML / CSS / Markdown</p>
		</li>
		<li>
			<p>Vite</p>
		</li>
	</ul>
</div>

<div class="learning">
	<h2>Learning</h2>
	<p>
		I am always learning more, both deepening and expanding my knowledge of development. I have
		recently taken classes and built small projects using:
	</p>
	<ul>
		<li>
			<p>Python</p>
		</li>
		<li>
			<p>Angular</p>
		</li>
		<li>
			<p>PostGreSql</p>
		</li>
		<li>
			<p>C# & .Net</p>
		</li>
	</ul>
</div>

<style>
	.title {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 1rem;
		color: var(--clr-text);
	}

	.title h1,
	h2 {
		color: var(--clr-text);
	}
</style>

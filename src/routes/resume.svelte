<script>
	import '../../static/global.css';
</script>

<svelte:head>
	<title>Resumé of CMF</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
	/>
</svelte:head>

<div class="title">
	<h1>Chris Fredricksen</h1>
	<h2>Resumé</h2>
</div>

<div class="info">
	<ul>
		<li>
			<h3><a href="mailto:chris@cmfred.com">chris@cmfred.com</a></h3>
		</li>
		<li>
			<h3>218-504-9155</h3>
		</li>
		<li>
			<h3>Ely, Minnesota</h3>
		</li>
	</ul>
</div>

<div class="icons">
	<i class="devicon-javascript-plain " />
	<i class="devicon-html5-plain" />
	<i class="devicon-css3-plain" />
	<i class="devicon-sass-plain" />
	<i class="devicon-nodejs-plain" />
	<i class="devicon-express-original-wordmark" />
	<i class="devicon-svelte-plain" />
	<i class="devicon-mongodb-plain" />
	<i class="devicon-apple-plain " />
	<i class="devicon-jamstack-plain" />
	<i class="devicon-bash-plain " />
	<i class="devicon-vscode-plain" />
	<i class="devicon-vim-plain" />
	<i class="devicon-linux-plain" />
	<i class="devicon-ubuntu-plain" />
	<i class="devicon-chrome-plain" />
	<i class="devicon-filezilla-plain" />
	<i class="devicon-google-plain" />
	<i class="devicon-git-plain" />
	<i class="devicon-github-plain" />
	<i class="devicon-markdown-plain" />
	<i class="devicon-npm-original-wordmark" />
	<i class="devicon-typescript-plain" />
	<i class="devicon-wordpress-plain" />
	<i class="devicon-woocommerce-plain" />
</div>

<style>
	.icons {
		padding: 2rem;
		/* background-color: var(--clr-secondary); */
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 40vw;
	}
	i {
		font-size: 3rem;
		color: var(--clr-text);
		margin: 1rem 0;
	}
</style>

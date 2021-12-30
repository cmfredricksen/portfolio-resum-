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
	<i class="devicon-npm-original-wordmark" />
	<i class="devicon-express-original" />
	<i class="devicon-svelte-plain" />
	<i class="devicon-vscode-plain" />
	<i class="devicon-vim-plain" />
	<i class="devicon-mongodb-plain" />
	<i class="devicon-typescript-plain" />
	<i class="devicon-jamstack-plain" />
	<i class="devicon-bash-plain " />
	<i class="devicon-linux-plain" />
	<i class="devicon-apple-plain " />
	<i class="devicon-ubuntu-plain" />
	<i class="devicon-chrome-plain" />
	<i class="devicon-filezilla-plain" />
	<i class="devicon-google-plain" />
	<i class="devicon-git-plain" />
	<i class="devicon-github-plain" />
	<i class="devicon-markdown-plain" />
	<i class="devicon-wordpress-plain" />
	<i class="devicon-woocommerce-plain" />
</div>

<div class="experience">
	<h1>Relevant Experience</h1>
	<ul>
		<li>
			<h3>Javascript</h3>
			<p>
				Working knowledge of Javascript, ES6, Async/Await, Methods, Objects, OOP & Functional
				programming. In-depth understanding including scope and props.
			</p>
		</li>
		<li>
			<h3>CSS 3 & Sass</h3>
			<p>
				Ability to design a page using colors and fonts with layout. Proficient with Sass, CSS
				variables, CSS Grid, Flexbox, Cascading Stylesheets, and Responsive Designs.
			</p>
		</li>
		<li>
			<h3>HTML 5</h3>
			<p>
				I can put the content on the page and know how to format the head, use classes & IDs, import
				fonts & stylesheets and develop forms.
			</p>
		</li>
		<li>
			<h3>Nodejs & NPM</h3>
			<p>
				I use Node and NPM with every project, to run scripts, start servers, download packages and
				much more.
			</p>
		</li>
		<li>
			<h3>Express JS, Mongoose, MongoDb Atlas</h3>
			<p>
				Ability to build a server and an app, using CRUD functions, routing, controllers, models and
				testing HTTP routes using Postman or REST Client.
			</p>
		</li>
		<li>
			<h3>Svelte & SvelteKit</h3>
			<p>
				I really love these tools, I find them very intuitive for combining the elements of the
				projects. It is also very light and fast. I have done some work with ReactJS and VueJS, but
				am focused on Svelte right now.
			</p>
		</li>
		<li>
			<h3>VSCode, Powershell, Notepad++, Git Bash & Vim</h3>
			<p>
				Proficient and efficient use of various editors and shells. Knowledge of settings, keyboard
				shortcuts, built in tools such as emmet and extensions in VSCode. I use Powershell for all
				file & directory manipulation, and Git Bash for all Git functions. Notepad++ to open files
				for quick viewing or edits.
			</p>
		</li>
		<li>
			<h3>Windows, Mac & Linux</h3>
			<p>Lots of experience with all 3 major operating sysytems, also used MSDos long ago.</p>
		</li>
		<li>
			<h3>Google & Chrome</h3>
			<p>
				Ability to find solutions and answers to programming problems and bugs, use documentation
				provided by developers to learn and understand tools, debug software and CSS using Chrome.
			</p>
		</li>
		<li>
			<h3>Git, GitHub & Netlify</h3>
			<p>
				Knowledge of Version control using local repos and GitHub for online repos. <a
					href="https://technotes.cmfred.com">My Beginners Guide to Git & Github</a
				>. I also deploy some websites to Netlify, using GitHub for continuous deployment.
			</p>
		</li>
		<li>
			<h3>WordPress & WooCommerce</h3>
			<p>
				Over ten years of experience building WordPress sites. I have built stores using Woo
				Commerce and know how to customize themes.
			</p>
		</li>
	</ul>
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

<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import '../../static/global.css';
</script>

<svelte:head>
	<title>Web • Folio by CMF</title>
</svelte:head>

<Header />
<slot />
<Footer />

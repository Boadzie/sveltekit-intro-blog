<script>
	import '../app.postcss';
</script>

<nav class="p-4 text-white bg-slate-700 display flex items-center justify-start gap-4">
 <a class="font-bold text-lg hover:text-blue-500" href="/">SvelteKit Intro Blog</a>
 <a class="font-bold text-lg  hover:text-blue-500"  href="/about">About page</a>
</nav>

<main>
<slot />
</main>

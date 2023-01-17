<script>
// import {page} from "$app/stores"
export let data;
</script>
<section class="container mx-auto px-4 py-4">
<h1 class="text-4xl text-blue-400">Welcome to SvelteKit</h1>
<p class="text-lg my-3">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a class="underline text-blue-500"  href="/about">About page</a>
<div class="grid lg:grid-cols-3 gap-4 ">
  {#each data.posts as post }
    <div class="rounded-sm bg-slate-50 p-5">
     <a class="text-blue-400 text-xl font-bold" href="/{post.id}">{post.title}</a>
     <p class="text-md text-slate-500">{post.body}</p>
    </div>
  {/each}
</div>
</section>
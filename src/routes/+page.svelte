<script>
// import {page} from "$app/stores"
export let data;
</script>
<section class="container mx-auto px-4 py-4">

<div class="grid lg:grid-cols-3 gap-4 ">
  {#each data.posts as post }
    <div class="rounded-sm bg-slate-50 p-5">
     <a class="text-blue-400 text-xl font-bold" href="/{post.id}">{post.title}</a>
     <p class="text-md text-slate-500">{post.body}</p>
    </div>
  {/each}
</div>
</section>
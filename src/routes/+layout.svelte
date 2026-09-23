<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
	import { trackState } from "$lib/store/cancion.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between py-2 bg-fondo text-amber-50">
	<h1 class="flex items-center text-2xl">
		<Icon icon="arcticons:music-ai" />Nocturne Audio
	</h1>
	<div class="flex items-center gap-7">
		<form action="bu"></form>
		<div>
			<p>Library</p>
		</div>
		<div>
			<p>Explore</p>
		</div>
		<div class="">
			<button><Icon icon="akar-icons:bell" /></button>
			<button><Icon icon="ant-design:user-outlined" /></button>
		</div>
	</div>
</nav>
{@render children()}

{#if trackState.song}
	<footer
		class="flex items-center bg-fondo text-amber-50 sticky bottom-0 px-10 py-4 gap-4"
	>
		<div class="w-12 h-12">
			<img src={trackState.song.album.image} alt="" />
		</div>

		<div>
			<p>{trackState.song.title}</p>
			<p>{trackState.song.album.title}</p>
		</div>

		<div>controles</div>
	</footer>
{/if}

<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
	import { trackState } from "$lib/store/cancion.svelte";
	import "../lib/styles.css";
    import BarraDeMusica from "$lib/components/BarraDeMusica.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between py-2 bg-fondo2 text-amber-50 px-4">
	<h1 class="flex items-center text-2xl">
		<Icon 	icon="arcticons:music-ai" />Nocturne Audio
	</h1>
	<div class="flex items-center gap-10">
		<form action="/buscar" class="search-bar flex">
			<span class="icon">🔍</span>
			<input type="search" placeholder="Que escucharas?" />
		</form>
		<div>
			<p class="rounded-3xl px-2 bg-texto text-fondo">Library</p>
		</div>
		<div>
			<p class="rounded-3xl px-2 bg-texto text-fondo">Explore</p>
		</div>
		<div class="">
			<button><Icon icon="akar-icons:bell" /></button>
			<button><Icon icon="ant-design:user-outlined" /></button>
		</div>
	</div>
</nav>
{@render children()}


<BarraDeMusica/>
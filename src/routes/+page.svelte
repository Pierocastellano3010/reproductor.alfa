<script>
    import Tarjetacancion from "$lib/components/tarjetacancion.svelte";
    import axios from "axios";

    const ResListaMusical = axios.get(
        "https://leonardoapi.vercel.app/api/tracks",
    );
</script>

<p>Nuevo spotifitis 2.1</p>

{#await ResListaMusical}
    Cargando
{:then ResListaMusical}
<div class="flex flex-col">

    {#each ResListaMusical.data.tracks as track}
        <Tarjetacancion {track}></Tarjetacancion>
    {/each}
</div>
{/await}

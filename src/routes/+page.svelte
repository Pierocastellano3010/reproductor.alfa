<script>
// @ts-nocheck

    import Tarjetacancion from "$lib/components/tarjetacancion.svelte";
    import axios from "axios";

    const { data } = $props()
    
</script>

<p class="bg-fondo2 text-amber-50 gap-4">Nuevo spotifitis 2.1</p>

<div class="p-6 text-white">
  <p class="px-4">Destacados</p>
  <h2 class="text-2xl font-bold mb-4 px-4">Lo más escuchado</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
    {#each data.tracklist.slice(0, 4) as track}
      <button onclick={() => actualizarCancion(track)} class="bg-[#181818] hover:bg-fondo2 p-3 rounded-lg text-left">
        <img src={track.album.image} alt={track.title} class="w-full aspect-square object-cover rounded-md mb-2" />
        <p class="font-bold text-sm truncate">{track.title}</p>
        <p class="text-xs text-gray-400 truncate">{track.album.title}</p>
      </button>
    {/each}
  </div>
</div>


<div class="flex flex-col gap-3 px-4">

    {#each data.tracklist as track}
        <Tarjetacancion {track}></Tarjetacancion>
    {/each}
</div>



<script>
    import Tarjetacancion from "$lib/components/tarjetacancion.svelte";
    import axios from "axios";

    const ResListaMusical = axios.get(
        "https://leonardoapi.vercel.app/api/tracks",
    );
</script>

<p class="bg-fondo2 text-amber-50 gap-4">Nuevo spotifitis 2.1</p>
{#await ResListaMusical}
  <p class="text-white p-4">Cargando...</p>
{:then ResListaMusical}
  <div class="p-6 text-white">
    <!-- 4 Tarjetas Grandes -->
    <h2 class="text-2xl font-bold mb-4">Lo más escuchado</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {#each ResListaMusical.data.tracks.slice(0, 4) as track}
        <button onclick={() => actualizarCancion(track)} class="bg-[#181818] hover:bg-[#282828] p-3 rounded-lg text-left">
          <img src={track.album.image} alt={track.title} class="w-full aspect-square object-cover rounded-md mb-2" />
          <p class="font-bold text-sm truncate">{track.title}</p>
          <p class="text-xs text-gray-400 truncate">{track.album.title}</p>
        </button>
      {/each}
    </div>
  </div>
{/await}
{#await ResListaMusical}
    Cargando
{:then ResListaMusical}
<div class="flex flex-col">

    {#each ResListaMusical.data.tracks as track}
        <Tarjetacancion {track}></Tarjetacancion>
    {/each}
</div>
{/await}

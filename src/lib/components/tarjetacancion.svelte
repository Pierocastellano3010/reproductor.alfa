<script>
  import { setSong } from "$lib/store/cancion.svelte";
  const { track } = $props();

  const handlerClick = () => {
    setSong(track);
  };
</script>

<button 
  onclick={handlerClick}
  class="grid grid-cols-12 items-center w-full px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition group text-left"
>

  <div class="col-span-6 flex items-center gap-3 overflow-hidden pr-2">
    <img
      src={track.album.image}
      alt={track.title}
      class="w-10 h-10 rounded object-cover shrink-0 shadow"
    />
    <div class="flex flex-col overflow-hidden">
      <p class="font-semibold text-sm text-texto truncate group-hover:underline cursor-pointer">
        {track.title}
      </p>
      <p class="text-xs text-gray-400 truncate">
        {track.artist?.name || track.artist || track.album.title}
      </p>
    </div>
  </div>


  <div class="col-span-4 text-sm text-gray-400 truncate px-2">
    {track.album.title}
  </div>


  <div class="col-span-2 text-right text-sm font-medium text-texto pr-2">
    {track.duration || "3:48"}
  </div>
</button>

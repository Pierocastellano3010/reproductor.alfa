<script>
// @ts-nocheck

  import { trackState } from "$lib/store/cancion.svelte";

  let audioRef = $state(null);
  let isPlaying = $state(false);
  let currentTime = $state(0);
  let duration = $state(0);
  let volume = $state(1);

  function togglePlay() {
    if (!audioRef) return;
    isPlaying ? audioRef.pause() : audioRef.play();
    isPlaying = !isPlaying;
  }

  function formatTime(secs) {
    if (isNaN(secs) || secs === 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
</script>

{#if trackState.Song}
  <audio
    bind:this={audioRef}
    src={trackState.Song.audio}
    autoplay
    onplay={() => (isPlaying = true)}
    onpause={() => (isPlaying = false)}
    ontimeupdate={() => (currentTime = audioRef?.currentTime || 0)}
    onloadedmetadata={() => (duration = audioRef?.duration || 0)}
  ></audio>

  <footer class="fixed bottom-0 left-0 w-full bg-[#121212] text-white px-6 py-3 flex items-center justify-between z-50">
    
    <!-- 1. Izquierda: Portada y Canción -->
    <div class="flex items-center gap-3 w-1/4 min-w-[180px]">
      <img 
        src={trackState.Song.album.image} 
        alt={trackState.Song.title} 
        class="w-14 h-14 rounded object-cover shadow"
      />
      <div class="overflow-hidden">
        <p class="font-bold text-sm truncate">{trackState.Song.title}</p>
        <p class="text-xs text-gray-400 truncate">{trackState.Song.album.title}</p>
      </div>
    </div>

    <!-- 2. Centro: Botón Verde + Barra con tiempos -->
    <div class="flex flex-col items-center gap-2 w-2/4 max-w-2xl">
      <!-- Solo el botón circular verde de Play / Pausa -->
      <button 
        onclick={togglePlay} 
        class="bg-[#1db954] hover:scale-105 text-black rounded-full w-9 h-9 flex items-center justify-center transition shadow-md"
      >
        {#if isPlaying}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        {:else}
          <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        {/if}
      </button>

      <!-- Barra de tiempo con minutos a los lados -->
      <div class="flex items-center gap-3 w-full text-xs text-gray-400 font-sans">
        <span>{formatTime(currentTime)}</span>
        <input 
          type="range" 
          min="0" 
          max={duration || 100} 
          value={currentTime} 
          oninput={(e) => {
            if (audioRef) audioRef.currentTime = parseFloat(e.target.value);
          }}
          class="w-full h-1 bg-[#4d4d4d] rounded-lg appearance-none cursor-pointer accent-[#1db954] hover:accent-[#1ed760]"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>

    <!-- 3. Derecha: Solo Volumen -->
    <div class="flex items-center justify-end gap-2 w-1/4 min-w-[180px] text-gray-400">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume} 
        oninput={(e) => {
          const v = parseFloat(e.target.value);
          volume = v;
          if (audioRef) audioRef.volume = v;
        }}
        class="w-24 h-1 bg-[#4d4d4d] rounded-lg appearance-none cursor-pointer accent-white hover:accent-[#1db954]"
      />
    </div>

  </footer>
{/if}

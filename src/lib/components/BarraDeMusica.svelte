<script>
    import { trackState } from "$lib/store/cancion.svelte";
</script>

{#if trackState.song}
    <footer
        class="flex items-center bg-fondo2 text-amber-50 sticky bottom-0 px-10 py-4 gap-8"
    >
        <div class="w-12 h-12">
            <img src={trackState.song.album.image} alt="" />
        </div>

        <div>
            <p>{trackState.song.title}</p>
            <p>{trackState.song.album.title}</p>
        </div>

        <div>
            <audio src="{trackState.song.audio}" controls></audio>
        </div>
    </footer>
{/if}

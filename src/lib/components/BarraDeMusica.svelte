<script>
    import { trackState } from "$lib/store/cancion.svelte";
</script>

{#if trackState.Song}
    <footer
        class="flex items-center bg-fondo2 text-amber-50 sticky bottom-0 px-10 py-4 gap-8"
    >
        <div class="w-12 h-12">
            <img src={trackState.Song.album.image} alt="" />
        </div>

        <div>
            <p>{trackState.Song.title}</p>
            <p>{trackState.Song.album.title}</p>
        </div>

        <div>
            <audio src="{trackState.Song.audio}" controls></audio>
        </div>
    </footer>
{/if}

<script>
import { setSong } from "$lib/store/cancion.svelte";
    const { track } = $props();

    const handlerClick = () => {
        // La interaccion para que suene
        setSong (track)
    };
</script>

<button onclick={handlerClick}>
    <div class="flex items-center gap-4 bg-fondo">

        <img
            src={track.album.image}
            alt={"imafen de album " + track.album.title}
            class="rounded-full w-16"
        />

        <div class="flex flex-col items-start tex">
            <p class=" font-bold text-amber-50">{track.title}</p>

            <p class="opacity-60 text-texto">{track.album.title}</p>
        </div>
        
    </div>
</button>

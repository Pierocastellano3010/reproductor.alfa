<script>
import { actualizarCancion } from "$lib/store/cancion.svelte";
    const { track } = $props();

    const handlerClick = () => {
        // La interaccion para que suene
        actualizarCancion(track)
    };
</script>

<button onclick={handlerClick}>
    <div class="flex items-center gap-4">

        <img
            src={track.album.image}
            alt={"imafen de album " + track.album.title}
            class="rounded-full w-16"
        />

        <div class="flex flex-col items-start">
            <p class=" font-bold">{track.title}</p>

            <p class="opacity-60">{track.album.title}</p>
        </div>
        
    </div>
</button>

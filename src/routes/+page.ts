import axios from "axios";
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    const ResListaMusical = await axios.get('https://leonardoapi.vercel.app/api/tracks')

    return {
        tracklist: ResListaMusical.data.tracks
    }
}
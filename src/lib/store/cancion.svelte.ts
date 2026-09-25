export interface Song {
    title: string
    album: {
        title: string
        image: string
        thumbnail: string
    }
    artist: {
        name: string
        image: string
        thumbnail: string
    }
    audio: string
}


export const trackState = $state<{
    Song: null | Song
}>({
    Song: null
})

// @ts-ignore
export const setSong = (newSong: Song) => {
    trackState.Song = newSong
}
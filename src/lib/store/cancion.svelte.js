export const trackState = $state({
    song: null
})

// @ts-ignore
export const actualizarCancion = (nuevaCancion) => {
    trackState.song = nuevaCancion
}
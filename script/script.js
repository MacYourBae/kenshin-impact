$(document).ready(()=>{
    $('.carousel-left').one('click', handleLeft)
    $('.carousel-right').one('click', handleRight)
})

function handleLeft(e){
    const left = $(e.target).parent()
    const show = $(left).prev()
    const mid = $(left).next()
    const hide = $(mid).next()
    
    console.log(show, mid)

    show.toggleClass('carousel-left', true) //kiri kiri
    left.toggleClass('carousel-left', false) //kiri mid
    left.toggleClass('carousel-mid', true) // kiri mid
    mid.toggleClass('carousel-mid', false) // mid kanan
    mid.toggleClass('carousel-right', true) // mid kanan
    hide.toggleClass('carousel-right', false) // kanan kanan

    $(show).one('click', handleLeft)
    $(mid).one('click', handleRight)
}

function handleRight(e){
    const right = $(e.target).parent()
    const show = $(right).next()
    const mid = $(right).prev()
    const hide = $(mid).prev()

    show.toggleClass('carousel-right', true) // kanan kanan
    right.toggleClass('carousel-right', false) //  kanan mid
    right.toggleClass('carousel-mid', true) // kanan mid
    mid.toggleClass('carousel-mid', false) // mid kiri
    mid.toggleClass('carousel-left', true) // mid kiri
    hide.toggleClass('carousel-left', false) // kiri kiri

    $(show).one('click', handleRight)
    $(mid).one('click', handleLeft)
}
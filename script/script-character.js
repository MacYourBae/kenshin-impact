$(document).ready(()=>{
    $('.card').on('click', showChar)
    
})

function showChar(e){
    const target = $(e.target).parents('.card')
    const active = $('.active')
    const data = target[0].dataset.char
    active.toggleClass('active', false)
    
    $('.char-item').each((index, element)=>{
        if(element.dataset.char === data){
            $(element).toggleClass('active', true)
        }
    })

    $('.character-box-inside').each((index, element)=>{
        if(element.dataset.char === data){
            $(element).toggleClass('active', true)
        }
    })
}
console.log('hello world')

const testEl = document.getElementById('test-el')

testEl.textContent = 'bye bye'

testEl.addEventListener('click', ()=>{
    console.log('clicked')
    testEl.innerHTML = "<b>clicked</b>"
})

testEl.addEventListener('mouseover', ()=>{
    console.log('on')
})

testEl.addEventListener('mouseout', ()=>{
    console.log('off')
})

document.addEventListener('scroll', ()=>{
    const positionY = window.scrollY
    console.log(positionY)
})
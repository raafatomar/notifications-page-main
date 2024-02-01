let noti = document.querySelectorAll('.notification');
let markAll = document.querySelector('.button');
let dot = document.querySelectorAll('.dot');
let num = document.getElementById('num');
let i = dot.length
num.innerHTML = `${i}`;

markAll.addEventListener('click',()=>{
        noti.forEach(noti=>{
        noti.style.backgroundColor = 'white';
        })

        dot.forEach(dot=>{
        dot.style.display = 'none';
        })

        i = '';
        num.innerHTML = `${i}`;
})

noti.forEach(Element=>{
    Element.addEventListener('click',()=>{
        Element.style.backgroundColor = 'white';
        let dots = Element.querySelector('.dot').remove(); 
        i--;
        num.innerHTML = `${i}`;
    })
}) 



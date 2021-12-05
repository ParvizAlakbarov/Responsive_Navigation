let tryItFreeButton = document.querySelector('#tryItFreeAnchor');
let loginButton = document.querySelector('#loginAnchor');

tryItFreeButton.addEventListener('mouseenter',function(e) {
    document.documentElement.style.setProperty('--leftForTF',`${e.clientX-(window.innerWidth*0.82)}px`);
    document.documentElement.style.setProperty('--topForTF',`${e.clientY-67}px`);
})

loginButton.addEventListener('mouseenter',function(e) {
    document.documentElement.style.setProperty('--leftForLogin',`${e.clientX-(window.innerWidth*0.92)}px`);
    document.documentElement.style.setProperty('--topForLogin',`${e.clientY-70}px`);
})


const menuBtn = document.querySelector('.menu_btn');
const dotOptions = document.querySelector('.navigation__responsive_dot')
let responsiveMain = document.querySelector('.navigation_responsive__main');


dotOptions.addEventListener('click',()=>{
    console.log(document.querySelector('.navigation__responsive__options'))
    document.querySelector('.navigation__responsive__options').classList.toggle('changeScale');
})


window.addEventListener("resize", ()=>{
    if (window.innerWidth > 960) {
        responsiveMain.classList.add('activeMain');
        menuBtn.classList.remove('open')
    }
});

// let number  = 0 ;
menuBtn.addEventListener('click', () => {
  
   menuBtn.classList.toggle('open');  

   responsiveMain.classList.toggle('activeMain');

});

const listItem = document.querySelectorAll('.dropDownItem');
listItem.forEach(function (item) {

    item.addEventListener('click',(event)=>{
        
        event.preventDefault();
        
        event.target.children[0].classList.toggle('fa-plus')
        event.target.children[0].classList.toggle('fa-minus')
        console.log(event.target.children)
        event.target.nextElementSibling.classList.toggle('active')

    })
})









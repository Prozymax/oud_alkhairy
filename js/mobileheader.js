if(window.innerWidth <= 950) {
 const mobileNavBurger = document.getElementsByClassName('nav')[0],
 navList = document.getElementsByClassName('nav-list')[0],
 navListItem = document.querySelectorAll('#nav-list-item'),
 addOn = document.getElementsByClassName('addon-list')[0],
 olList = document.getElementsByClassName('ol-list');

 mobileNavBurger.addEventListener('click', () => {
     navList.style.display = 'block';
     navList.style.animationDelay = '.05s';
     navList.style.animationName = 'enter'
  for(let i = 0; i < navListItem.length; i++) {
      navListItem[i].style.animationName = 'enter';
  }
 })
 const exitFunction = () => {
     navList.style.animationDelay = '.3s';
      navList.style.animationName = 'exit';
      addOn.style.animationName = 'exit2'
      for(let i = 0; i < navListItem.length; i++) {
       navListItem[i].style.animationName = 'exit';
     }
     
     setTimeout(() => {
      navList.style.display = 'none';
   }, 1200)
 }

 
 document.getElementsByClassName('abs-close')[0].addEventListener('click', () => { 
     exitFunction() 
 })

 navListItem[1].addEventListener('click', () => {
  addOn.style.animationName = 'enter2';
  for(let n = 0; n < olList.length; n ++) {
     olList[n].style.animationName = 'enter2'
 }
})
}
// const hamburger = document.querySelector('.hamburger')
// const nav_content = document.querySelector('.nav-content')
// const navlinks = document.querySelectorAll('.nav-content a')
// const currentURL = window.location.href;
// const nav_top = document.querySelector('.navbar-top')
// const menubar = document.querySelector(".menubar")
// const menu_close = document.querySelector('.menu-close')
// const user_close = document.querySelector('.user-close')
// const menu_open = document.querySelector('.menu-open')
// const userimg = document.querySelector('.user .image img')
// const userdet = document.querySelector('.user .details')


// hamburger.addEventListener('click', function () {
//     nav_content.classList.toggle('navbar-active')
//     hamburger.classList.toggle('active')
//     nav_top.classList.toggle('nav-active')

// })


// for (let i = 0; i < navlinks.length; i++) {
//     if (navlinks[i].href === currentURL) {
//         navlinks[i].classList.add('navactive')
//     }
// }







// menu_open.addEventListener('click', () => {
//     menubar.classList.add('active')
// })
// menu_close.addEventListener('click', () => {
//     menubar.classList.remove('active')
// })
// document.addEventListener('click', (event) => {
//     if (event.target !== menubar && event.target !== menu_close && event.target !== menu_open) {

//         menubar.classList.remove('active')
//     }
// })




// const userbar = document.querySelector('.userbar')
// const user = document.querySelector('.user')
// userbar.addEventListener('click', () => {
//     user.classList.toggle('active')
// })
// user_close.addEventListener('click', () => {
//     user.classList.remove('active')
// })
// document.addEventListener('click', (event) => {
//     if (event.target !== userdet && event.target !== user && event.target !== userimg && event.target !== userbar) {

//         user.classList.remove('active')
//     }
// })

// const profile = document.querySelector('.profile')
// profile.addEventListener('click', () => {
//     user.classList.toggle('us-active')
// })
// document.addEventListener('click', (event) => {
//     if (event.target !== userdet && event.target !== user && event.target !== userimg && event.target !== profile) {

//         user.classList.remove('us-active')
//     }
// })



// var like = document.querySelectorAll('.lni-heart')
// like.forEach(e => {
//     e.addEventListener('click', (x)=>{
//         x.target.classList.toggle('lni-heart')
//         x.target.classList.toggle('lni-heart-filled')
//     })
    
    
   
    
// });
// var cart = document.querySelectorAll('.lni-cart')
// cart.forEach(e => {
//     e.addEventListener('click', (x)=>{
//         x.target.classList.remove('lni-cart')
//         x.target.classList.add('lni-checkmark')
//     })
    
    
// });
    


// const categorybtn = document.querySelector('.container .top .categories .span')
// const searchbtn = document.querySelector('.container .top .search ion-icon')
// const searchb = document.querySelector('.container .top .search')
// const searchspan = document.querySelector('.container .top .search .span')
// const searchbar = document.querySelector('.container .top .search .searchbar')
// const closebtn = document.querySelector('.container .top .search .searchbar ion-icon')



// const inlinecat = document.querySelector('.inlinecat')
// const cat = document.querySelector('.container .top .categories')
// cat.addEventListener('click', ()=>{
//     inlinecat.classList.toggle('active')
// })
// document.addEventListener('click', (event) => {
//     if (event.target !== inlinecat ) {

//         inlinecat.classList.remove('active')
//     }
// })


// let cartUpdate = document.querySelectorAll('.content .items .item .content .quantity .update')
// let cartInput = document.querySelectorAll('.content .items .item .content .quantity input[type=number]')
// for(let i=0; i<cartInput.length; i++){
//     cartInput[i].addEventListener('input', function(){
//         cartUpdate[i].classList.add('active')
    
// })}


// let paymentMethods = document.getElementsByClassName('pay-method')
// let paymentDesc = document.querySelectorAll('.payment-method .methods .desc')
// for (let i=0; i<paymentMethods.length; i++){
//     paymentMethods[i].addEventListener('click', function(){
//             for(let i=0; i<paymentDesc.length; i++){
//                 if(paymentDesc[i].style.maxHeight)
//                 paymentDesc[i].style.maxHeight = null;
//             }
//             paymentDesc[i].style.maxHeight = paymentDesc[i].scrollHeight + "px";
//     })}


// let coupon = document.querySelector('.coupon .code .main-text span')
// let couponForm = document.querySelector('.coupon-code')
// coupon.addEventListener('click', function(){
//     if(couponForm.style.maxHeight){
//         couponForm.style.maxHeight = null;
//     }
//     else{
//     couponForm.style.maxHeight = couponForm.scrollHeight + "px";
// }})









// // product search--------------------
// let productSearch = document.querySelector('.outer-store .search')
//     searchedItem = productSearch.querySelector('input:nth-child(1)')

// productSearch.addEventListener('submit',function(e){
//     e.preventDefault();
//     if(searchedItem.value.trim() != ''){
//         console.log(searchedItem.value.trim())
//         searchedItem.value = '';
//     }
//     else{
//         searchedItem.classList.add('invalid')
//     }
//     searchedItem.addEventListener('keyup',function(){
//         searchedItem.classList.remove('invalid')

//     })
//     window.addEventListener('click',function(e){
//         if(e.target != searchedItem){
//             searchedItem.classList.remove('invalid')
//         }
//     })
// })


// // product Category ba------------
// let categoryBarIcon = document.querySelector('.inner_store .catTop')
// let categoryBar = document.querySelector('.inner_store .catBar')
// let categoryCloseIcon = document.querySelector('.inner_store .catBar span')
// let categoryCat = document.querySelector('.inner_store .catBar .cat')
// categoryBarIcon.addEventListener('click',function(){
//     categoryBar.classList.toggle('active')
// })
// categoryCloseIcon.addEventListener('click',function(){
//     categoryBar.classList.remove('active')
// })

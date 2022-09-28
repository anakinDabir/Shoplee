// ---------------PRODUCT PAGE-----------
let mainProdImg = document.querySelector('.prod-images .active-img img')
let prodImg = document.querySelectorAll('.prod-images .inactive-img img')
for(let i=0; i<prodImg.length; i++){
    let prodImgAttr = prodImg[i].getAttribute("src")
    prodImg[0].classList.add('active')
    mainProdImg.setAttribute("src", prodImg[0].getAttribute("src"))
    prodImg[i].addEventListener('click', function(){
        mainProdImg.setAttribute("src", prodImgAttr)
        for(let i=0; i<prodImg.length; i++){
        if(prodImg[i].classList.contains('active')){
            prodImg[i].classList.remove('active')
        }}
        
        prodImg[i].classList.add('active')
        
})}



let prodReview = document.querySelector('.prod-additional .add-review .add-container')
let clickProdReview = document.querySelector('.prod-additional .add-review .add .clickable')
clickProdReview.addEventListener('click',function(){
    if(prodReview.style.maxHeight){
        prodReview.style.maxHeight = null;
    }
    else{
        prodReview.style.maxHeight = (prodReview.scrollHeight + 30) + "px";
    }
})

let aReviews = document.querySelector('.prod-subMain .prod-star a')
let additionalInfo = document.querySelector('.prod-additional .prod-info')
let reviewsOnProd = document.querySelector('.prod-additional .prod-reviews')
let reviewHead = document.querySelector('.prod-additional .head:nth-child(1)')
let additionalInfoHead = document.querySelector('.prod-additional .head:nth-child(2)')

reviewsOnProd.classList.add('active')
reviewHead.classList.add('active')

reviewHead.addEventListener('click', function(){
    if(additionalInfo.classList.contains('active')){
        additionalInfo.classList.remove('active')
        additionalInfoHead.classList.remove('active')
        reviewHead.classList.add('active')
        reviewsOnProd.classList.add('active')
    }
})
aReviews.addEventListener('click', function(){
    if(additionalInfo.classList.contains('active')){
        additionalInfo.classList.remove('active')
        additionalInfoHead.classList.remove('active')
        reviewHead.classList.add('active')
        reviewsOnProd.classList.add('active')
    }
})
additionalInfoHead.addEventListener('click', function(){
    if(reviewsOnProd.classList.contains('active')){
        reviewsOnProd.classList.remove('active')
        reviewHead.classList.remove('active')
        additionalInfo.classList.add('active')
        additionalInfoHead.classList.add('active')
    }
})


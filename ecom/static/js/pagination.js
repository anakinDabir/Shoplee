// const storePagination = {
//     start: ()=>{
// let prevBtn = document.querySelector('.storePagination .pageBtn:nth-child(1)')
// let nextBtn = document.querySelector('.storePagination .pageBtn:nth-child(3)')

// let contentToShow = document.querySelectorAll('.inner_store .products .prod')

// let pageNum = document.querySelector('.storePagination .pageNo')

// contentToShow.forEach(content => {
//     content.style.display = 'none'
// });
// let pageCounter = 1
// let lim = 6;
// showPages(pageCounter,lim)

// nextBtn.addEventListener('click',function(){
//     pageCounter++;
//     showPages(pageCounter,lim)
//     pageNum.innerHTML = pageCounter;
// })
// prevBtn.addEventListener('click',function(){
//     pageCounter--;
//     showPages(pageCounter,lim)
//     pageNum.innerHTML = pageCounter;
// })
// function showPages(counter,lim){
//     let limitOfCOntent = lim;
//     let numberOfPages = Math.ceil(contentToShow.length / limitOfCOntent);
// let prevPage = (counter-1)* limitOfCOntent;
// let newPage = counter*limitOfCOntent;
// contentToShow.forEach((content,index) => {
//     if(index>=prevPage && index<newPage){
//         content.style.display = 'block';

//     }
//     else{
//         content.style.display = 'none';

//     }
// });
// if(pageCounter === 1){
//     prevBtn.classList.add('disabled');

// }
// if(pageCounter > 1){
//     prevBtn.classList.remove('disabled');
// }
// if(pageCounter === numberOfPages){
//     nextBtn.classList.add('disabled');
// }
// if(pageCounter < numberOfPages){
//    nextBtn.classList.remove('disabled')
//  }
    
// }
//     }
// }

// storePagination.start();






// //review adding
let reviewForm = document.querySelector('.new-review')
addNewReview = reviewForm.querySelector('textarea')
invalidMsg = reviewForm.querySelector('.invalidReviewMsg')
revRatings = reviewForm.querySelectorAll('[name="ratings"]')
revSubmitButton = reviewForm.querySelector('input[type="submit"]')
ratingValues = reviewForm.querySelectorAll('.ratings input')
reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //--------  Review --------
    console.log(addNewReview.value.trim())
    //--------  Rating --------
    ratingValues.forEach(ratingValue => {
        if(ratingValue.checked === true){
            console.log(ratingValue.value)
        }
    });


    if (addNewReview.value.trim() != '') {
        addNewReview.value = '';
        addNewReview.classList.remove('valid')
        revSubmitButton.style.pointerEvents = 'none'
        setTimeout(() => {
            revSubmitButton.style.pointerEvents = 'all'
        }, 300)

        for (let i = 0; i < revRatings.length; i++) {
            if (revRatings[i].checked === true) {
                revRatings[i].checked = false;
            }
            revRatings[revRatings.length - 1].checked = true;
        }

        
//         // ------- notification function call ----------
         notification("Review has been submitted");
        


    }
    else {
        console.log('no')
        invalidMsg.classList.add('active')
        addNewReview.classList.add('invalid')

    }
window.addEventListener('click',function(e){
    if(e.target != addNewReview){
        invalidMsg.classList.remove('active')
            addNewReview.classList.remove('invalid')
    }
})

})
reviewForm.addEventListener('keyup', function (e) {
    e.preventDefault();
    invalidMsg.classList.remove('active')
    addNewReview.classList.remove('invalid')
})






//------> Blog page Form <-------
// let blogForm = document.querySelector('.blog-inner .blogTop')
//     blogSearch = blogForm.querySelector('input:nth-child(1)')

//     blogForm.addEventListener('submit', function(e){
//         if(blogSearch.value.trim() == ''){
//             e.preventDefault();
//             blogSearch.classList.add('invalid')
//         }
//         else{
//             console.log(blogSearch.value)
//             blogSearch.value = '';
            

//         }
//         blogSearch.addEventListener('keyup', function(){
//             blogSearch.classList.remove('invalid')
//         })
//         window.addEventListener('click',function(e){
//     if(e.target != blogSearch){
//         blogSearch.classList.remove('invalid')
//         }
//     })

        
//     })












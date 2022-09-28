// // // ------    Replies --------
// let replyClick = document.querySelectorAll('.postComment .likes span:nth-child(1)')
// let spanForm = document.querySelectorAll('.postComment .likes .spanForm')



// for (let i = 0; i < replyClick.length; i++) {
//     replyClick[i].addEventListener('click', function () {

//         if (spanForm[i].style.maxHeight) {
//             spanForm[i].style.maxHeight = null;
//         }
//         else {
//             spanForm[i].style.maxHeight = spanForm[i].scrollHeight + "px";
//         }
//     })


// }

// let postReplyForm = document.querySelectorAll('.postComment .likes .reply')
// for (i = 0; i < postReplyForm.length; i++) {
//     let postReply = postReplyForm[i].querySelector('.postComment .likes .reply textarea')
//     console.log(postReply)
//     postReplyForm[i].addEventListener('submit',  function (e) {
//         e.preventDefault();
//         if (postReply.value.trim() == '') {
//             postReply.classList.add('invalid')
//             postReply.addEventListener('keyup', function () {
//                 postReply.classList.remove('invalid')
//             })
//         }
//         else {
//             console.log(postReply.value.trim())
//             postReply.value = ''
//             //ajax
//             notification("Reply has been posted")
//         }
//         window.addEventListener('click', function (e) {
//             if (e.target != postReply) {
//                 postReply.classList.remove('invalid')
//             }
//         })
//     });
// }



// //comments

// let commentSpan = document.querySelector('.inner-blog .addComment .heading span')
//     commentContainer = document.querySelector('.inner-blog .addNewComment')
//     commentSpan.addEventListener('click', function () {

//         if (commentContainer.style.maxHeight) {
//             commentContainer.style.maxHeight = null;
//         }
//         else {
//             commentContainer.style.maxHeight = commentContainer.scrollHeight + "px";
//         }})


// let commentForm = document.querySelector('.inner-blog .addNewComment form')
//     commentTextarea = commentForm.querySelector('.inner-blog .addNewComment form textarea')
//     commentForm.addEventListener('submit',  function (e) {
//         e.preventDefault();
//         if (commentTextarea.value.trim() == '') {
//             commentTextarea.classList.add('invalid')
//             commentTextarea.addEventListener('keyup', function () {
//                 commentTextarea.classList.remove('invalid')
//             })
//         }
//         else {
//             console.log(commentTextarea.value.trim())
//             commentTextarea.value = '';
//             //ajax
//             notification("Comment has been posted")
//         }
//         window.addEventListener('click', function (e) {
//             if (e.target != commentTextarea) {
//                 commentTextarea.classList.remove('invalid')
//             }
//         })
//     });



// //REGREXX--------------------------------------------------------
// let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// let regName = /^[A-Z a-z'_-]+$/
// //REGREXX--------------------------------------------------------

// //------> Contant form Validation <-------




// let contactForm = document.querySelector('.contact .container .content .form')
//     contactName = contactForm.querySelector('.contact .container .content .form input[name="contactName"]')
//     contactEmail = contactForm.querySelector('.contact .container .content .form input[name="contactEmail"]')
//     contactMessage = contactForm.querySelector('.contact .container .content .form textarea')




//     function cEmailPass(){
//         if(!(contactEmail.value.trim().match(regEmail))){
//          contactEmail.classList.add('invalid')
//          return false
            
//         }
        
//         contactEmail.classList.remove('invalid')
//         return true


        
        
//     }
//     function cNamePass(){
//         if(!(contactName.value.trim().match(regName))){
//         contactName.classList.add('invalid')
//         return false
//         }
        
//         contactName.classList.remove('invalid')
//         return true
        
        
//     }
//     function cMessagePass(){
//         if((contactMessage.value.trim() === '')){
//             contactMessage.classList.add('invalid')
//             return false
//         }
//         contactMessage.classList.remove('invalid')
//         return true
//     }

//     contactForm.addEventListener('submit',function(e){
//         e.preventDefault();
//         a = cNamePass();
//         b = cEmailPass();
//         c = cMessagePass()
//         if((a  && b && c ) === true){ 
//             console.log(contactName.value)
//             console.log(contactEmail.value)
//             console.log(contactMessage.value)
//             notification("Contact form has been submitted")
//             contactName.value = ''
//             contactEmail.value = ''
//             contactMessage.value = ''
//         }
//         contactEmail.addEventListener('keyup',function(){
//             if(contactEmail.value.trim().match(regEmail)){
//                 contactEmail.classList.remove('invalid')
//             }
            
//         })
//         contactName.addEventListener('keyup',function(){
//             if(contactName.value.trim().match(regName)){
//                 contactName.classList.remove('invalid')
//             }
//         })
//         contactMessage.addEventListener('keyup',function(){
//             contactMessage.classList.remove('invalid')
//         })
//         window.addEventListener('click',function(e){
//             if(!(e.target == contactEmail || e.target ==contactName || e.target ==contactMessage)) {
//                 contactMessage.classList.remove('invalid')
//                 contactEmail.classList.remove('invalid')
//                 contactName.classList.remove('invalid')
//             }
//         })
    

//     })

        
// //------> Contant form Validation <-------





// // --------------------- Checkout form validation ----------------




// // --------------------- Checkout form validation ----------------









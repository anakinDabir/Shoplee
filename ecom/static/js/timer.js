// const time = document.querySelector('.time')
// const expired = document.querySelector('.container .deal-expired')
// const btn = document.querySelector('.container .inside .img .btn')
// const img = document.querySelector('.container .inside .img')

// var timerDate = new Date("Aug 15, 2022 14:30:00").getTime()
// var x = setInterval(function(){
//     var now = new Date().getTime();
//     var distance = timerDate - now;

//     var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
//     var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
//     var seconds = Math.floor((distance % (1000*60)) / 1000);

//     const hr = document.querySelector('.hr')
//     const min = document.querySelector('.min')
//     const sec = document.querySelector('.sec')
//     hr.innerHTML = hours
//     min.innerHTML = minutes
//     sec.innerHTML = seconds

//     if(distance < 0){
//         clearInterval(x);
//         console.log(expired)
//         console.log(time)
//         console.log(btn)
//         time.classList.add('disabled')
//         btn.classList.add('disabled')
//         expired.classList.add('active')
//         img.classList.add('disabled')
//     }
// })
let toastMain = document.querySelector('.notification-inner')
let toastInside = document.querySelector('.notification-hidden .notification')


function notification(msg) {
    let mesg = msg;
    function notificationShow(mesg) {
        toastMain.append(toastInside.cloneNode(true))
        let toastNotify = toastMain.querySelectorAll('.notification')

        toastNotify.forEach(tt => {
            toastMessages = tt.querySelectorAll('.not-content .not-message span:nth-child(2)')
            toastMessages.forEach(toastMessage => {
                toastMessage.innerHTML = mesg;
            });
            setTimeout(() => {
                tt.classList.add('active')
            }, 10);
        });
    }

    function notificationRemoval() {
        // -------- Timeout removal event -----------
        let toastNotify = toastMain.querySelectorAll('.notification')
        setTimeout(() => {
            toastNotify.forEach(tt => {
                tt.classList.remove('active')
            })
        }, 2000);
        setTimeout(() => {
            toastNotify.forEach(tt => {
                tt.remove()
            })
        }, 2200);

        // -------- CLose Button Event ---------
        toastNotify.forEach(tt => {
            toastCloseBtns = tt.querySelectorAll('.not-content ion-icon:nth-child(2)')
            toastCloseBtns.forEach(toastCloseBtn => {
                toastCloseBtn.addEventListener('click', function () {
                    tt.remove()
                })
            });
        });


    }

    notificationShow(mesg)
    notificationRemoval()

}


// => Upper Function maded using ForEach Loops





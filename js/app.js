// initial counter
let count = 0;

// value
const value = document.querySelector('#value');
// btn
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(event){
        const btnClicked = event.currentTarget.classList;
        if(btnClicked.contains("decrease")){
            count--;
        } else if (btnClicked.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        value.innerHTML = count;
    })
})

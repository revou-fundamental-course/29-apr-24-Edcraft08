//ini script

// function validation() {
//     let username = document.getElementById('form-username');
//     console.log(username.value);
//     if (username.value == ''|| username.value == null) {
//         username.style.border = '1px solid red'
//         // alert ('harap isi bidang ini');
//     } else {
//        alert ('welcome ' + username.value);
       
//     }
// }

// function validateEmail () {
//     let email =document.getElementById('form-email');
//     let emailRegex = /\s+@\s+\.s+/;
//     return emailRegex.test(email)
    
// }


// document.getElementById('send-form').addEventListener('click', () => validation ());


// // section slide
// let indexslide = 1;
// showslide (1);

// // triger slide
// function nextslide(n) {
//     console.log('nextslide ' + n);
//     showslide(indexslide += n);
// }

// // slide show logic 
// function showslide(index) {
//     let listimage = document.getElementsByClassName('banner-item');
//     console.log(listimage);
//     console.log(listimage.length);


//     // reset index images
//     if (index > listimage.length) {
//         indexslide=1;
//     }

//     // hide all images
//     let i = 0;
//     while (i < listimage.length) {
//         listimage[i].style.display = 'None';
//         i++;
//     }

//     // show only one images
//     listimage [indexslide -1].style.display= 'block';

//     console.log('showslide ' + index)
// }   

// // timer slide (set interval)
// setInterval(() =>  {nextslide(1)
// }, 5000);

// document.getElementById('next-slide').addEventListener('click', () => nextslide (1));
// document.getElementById('prev-slide').addEventListener('click', () => nextslide (-1));


function validation() {
    let username = document.getElementById('form-username');
    console.log(username.value);
    if (username.value == ''|| username.value == null) {
        username.style.border = '1px solid red'
        // alert ('harap isi bidang ini');
    } else {
       alert ('welcome ' + username.value);
       
    }
}

function validateEmail () {
    let email =document.getElementById('form-email');
    let emailRegex = /\s+@\s+\.s+/;
    return emailRegex.test(email)
    
}


document.getElementById('send-form').addEventListener('click', () => validation ());


// section slide
let indexslide = 1;
showslide (1);

// triger slide
function nextslide(n) {
    console.log('nextslide ' + n);
    showslide(indexslide += n);
}

// slide show logic 
function showslide(index) {
    let listimage = document.getElementsByClassName('banner-item');
    console.log(listimage);
    console.log(listimage.length);


    // reset index images
    if (index > listimage.length) {
        indexslide=1;
    }

    // hide all images
    let i = 0;
    while (i < listimage.length) {
        listimage[i].style.display = 'None';
        i++;
    }

    // show only one images
    listimage [indexslide -1].style.display= 'block';

    console.log('showslide ' + index)
}   

// timer slide (set interval)
setInterval(() =>  {nextslide(1)
}, 5000);

document.getElementById('next-slide').addEventListener('click', () => nextslide (1));
document.getElementById('prev-slide').addEventListener('click', () => nextslide (1));


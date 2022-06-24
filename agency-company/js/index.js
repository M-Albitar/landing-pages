function scrollPage() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('navbar').classList.add('noTransparrent');
    } else {
        document.getElementById('navbar').classList.remove('noTransparrent');
    }
}

window.onscroll = function () {
    scrollPage();
}
///////////////////////////////////////////////////////////////////////////////////////////////////

var project = setInterval(projectDone, 15);
let webCounter = 1;
var project1 = setInterval(projectDone1, 15);
let appCounter = 1;
var project2 = setInterval(projectDone2, 2);
let usersCounter = 1;
var project3 = setInterval(projectDone3, 10);



let videosCounter = 1;


function projectDone() {
    webCounter++;

    document.querySelector('#web-count').innerHTML = webCounter;

    if (webCounter == 200) {
        clearInterval(project);
    }
}


function projectDone1() {
    appCounter++;

    document.querySelector('#app-count').innerHTML = appCounter;

    if (appCounter == 100) {
        clearInterval(project1);
    }
}


function projectDone2() {
    usersCounter++;

    document.querySelector('#user-count').innerHTML = usersCounter;

    if (usersCounter == 3475) {
        clearInterval(project2);
    }
}


function projectDone3() {
    videosCounter++;

    document.querySelector('#videos-count').innerHTML = videosCounter;

    if (videosCounter == 500) {
        clearInterval(project3);
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();


  let currentYear = new Date().getFullYear();

  document.getElementById('fullyear').innerHTML = currentYear;
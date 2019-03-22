window.onload = function() {
  const btnShow = document.querySelector('.show-alert');
  const btnHide = document.querySelector('.hide-alert');
  const divAlert = document.querySelector('.animTarget');

  btnHide.addEventListener('click', function(){
    divAlert.classList.add('fa-leave-active');
    divAlert.addEventListener('transitionend', function(){
      divAlert.style.display = 'none';
    })
  })
}
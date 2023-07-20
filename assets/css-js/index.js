window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset;
  var layers = document.getElementsByClassName('parallax__layer');

  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var depth = layer.getAttribute('data-depth');
    var translate3dValue = 'translate3d(0, ' + -(scrollTop * depth) + 'px, 0)';
    layer.style.transform = translate3dValue;
  }
});




const menubarIcon = document.querySelector('#menubarIcon');
const wrapper = document.querySelector('.wrapper')
const mainBody = document.querySelector('body');
const moboResBan = document.querySelector('#moboResBan')

menubarIcon.addEventListener('click', function () {
  console.log('hello')
  if (wrapper.classList.contains('open')) {
    wrapper.classList.remove('open')
    mainBody.classList.remove('Bodyoverflow')
    moboResBan.classList.remove('active')
    // closeIcon.classList.remove('active')
  } else {
    wrapper.classList.add('open')
    mainBody.classList.add('Bodyoverflow')
    moboResBan.classList.add('active')
    // closeIcon.classList.add('active')
  }
})


const closeIcon = document.querySelector('#close-icon')
closeIcon.addEventListener('click', function(){
  if (wrapper.classList.contains('open')) {
    wrapper.classList.remove('open')
    mainBody.classList.remove('Bodyoverflow')
    moboResBan.classList.remove('active')
  } else {
    wrapper.classList.add('open')
    mainBody.classList.add('Bodyoverflow')
    moboResBan.classList.add('active')
  }
})
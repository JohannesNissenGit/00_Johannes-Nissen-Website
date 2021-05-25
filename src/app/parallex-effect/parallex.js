/*let bg_sky = document.getElementById('bg_sky');
//let bg_clouds = document.getElementById('bg_clouds');
let bg_sun = document.getElementById('bg_sun');
let bg_bottom = document.getElementById('bg_bottom');
let text = document.getElementById('text');
let startbutton = document.getElementById('startbutton');

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    bg_sky.style.top = value *0.5 + 'px';
    
    bg_sun.style.top =  0 + value *0.6 + 'px';
    bg_sun.style.left =  0 + value *0.7 + 'px';
    bg_bottom.style.top =  300 + value *0.2 + 'px';
    text.style.top =  value *0.7 + 'px';
    startbutton.style.top =  value *0.9 + 'px';
} )
*/


$('#startbutton').on('click', function(event){
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: $('#welcomeContainer').offset().top}, 2600);
    document.getElementById('startbutton').classList.add('transparent');
    setTimeout(() => {
        document.getElementById('startbutton').classList.remove('transparent');
    }, 1100);
});
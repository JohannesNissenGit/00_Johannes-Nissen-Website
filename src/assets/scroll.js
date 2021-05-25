/**
 * testing if js file is implemented
 */
function test(){
    console.log('test js works!');
} 

/*
*scroll functions
*/

function scrollView(id, scroller){
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    let disappear = document.getElementById(scroller);
    disappear.classList.add('disappearFX');
    setTimeout(() => {
        disappear.classList.remove('disappearFX');
    }, 225);
}

function scrollTo(elementId){

let id = `"#" + ${elementId}`;
$('html, body').animate({
    scrollTop: $(id).offset(0).top
}, 225);
}

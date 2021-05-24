/**
 * testing if js file is implemented
 */
function test(){
    console.log('test js works!');
} 

/*
*scroll functions
*/

function scrollView(id){
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollTo(elementId){

let id = `"#" + ${elementId}`;
$('html, body').animate({
    scrollTop: $(id).offset(0).top
}, 225);
}

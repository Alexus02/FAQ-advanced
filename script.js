let first = document.querySelector('.first');
let second = document.querySelector('.second'); 
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let sixth = document.querySelector('.sixth');
let img=document.querySelectorAll('img');
let content=document.querySelector(".text").innerHTML;

function toggleVisibility(element,imgElement){
    if (element.children.length >1) {
        let para =element.children[1];
        element.removeChild(para);
        element.style.backgroundColor="#12111F";
        imgElement.style.transform="rotate(0deg)";
        imgElement.style.transition="transform 0.5s ease-in-out";
    }else{
        let p = document.createElement("p");
        p.innerHTML = content;
        element.appendChild(p);
        element.style.backgroundColor="#2A2936";
        imgElement.style.transform="rotate(180deg)";
        imgElement.style.transition="transform 1.5s ease-in-out";
        element.style.borderRadius="10px";
        element.style.transition="background-color 0.5s ease-in-out, border-radius 0.5s ease-in-out";
    }
}
first.addEventListener('click', function() {
    toggleVisibility(first, img[0]);
});
second.addEventListener('click', function() {
    toggleVisibility(second, img[1]);
});     
third.addEventListener('click', function() {
    toggleVisibility(third, img[2]);    
});
fourth.addEventListener('click', function() {
    toggleVisibility(fourth, img[3]);    
});
fifth.addEventListener('click', function() {
    toggleVisibility(fifth, img[4]);
});
sixth.addEventListener('click', function() {
    toggleVisibility(sixth, img[5]);
});
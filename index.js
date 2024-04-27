let moon = document.getElementById('moon');
let sun = document.getElementById('sun');


let sunMoon = function(){
    sun.style.marginTop = '50px';
    sun.style.transition = '10s';
    sun.style.backgroundColor = 'yellow';
    moon.style.marginLeft = '-60px';
    moon.style.transition = '13s';
    document.body.style.backgroundColor = 'whitesmoke'
    document.body.style.transition = '15s'
}

setTimeout(() => {
    sunMoon()
}, 1000);
























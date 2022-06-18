const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');

const dropDown = document.querySelectorAll('.arrow-down');
const dropUp = document.querySelectorAll('.arrow-up');

const links = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header')
const each_drop = document.querySelectorAll('.each-drop');
const drop_p = document.querySelectorAll('.drop-company p')

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('close-menu');
})

close.addEventListener('click', function(){
    navMenu.classList.remove('close-menu');
})

dropDown.forEach(function(down){
    down.addEventListener('click', function() {
        var li = down.parentElement.parentElement.parentElement;
        var drop = li.querySelector('.drop-down');
        var arrowDown = li.querySelector('.arrow-down');
        var arrowUp = li.querySelector('.arrow-up');

        drop.style.display = 'block';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        // console.log(drop)
    })
})

dropUp.forEach(function(up){
    up.addEventListener('click', function() {
        var li = up.parentElement.parentElement.parentElement;
        var drop = li.querySelector('.drop-down');
        var arrowDown = li.querySelector('.arrow-down');
        var arrowUp = li.querySelector('.arrow-up');

        drop.style.display = 'none';
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    })
})

links.forEach(function(link){
    link.addEventListener('click', function(){
        navMenu.classList.remove('close-menu');
    })
})

window.addEventListener('scroll', function(){
    var scrollHeight = window.pageYOffset;
    var headerHeight = header.getBoundingClientRect().height;

    if(scrollHeight > headerHeight) {
        // header.style.position = 'fixed';
        // header.style.backgroundColor = 'white';
    }
})

each_drop.forEach(function(each){
    each.addEventListener('click', function(){
        var li = each.parentElement.parentElement;
        var arrowDown = li.querySelector('.arrow-down');
        var arrowUp = li.querySelector('.arrow-up');
        var drop = li.querySelector('.drop-down');

        navMenu.classList.remove('close-menu');
        drop.style.display = 'none';
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    })
})

drop_p.forEach(function(d_p){
    d_p.addEventListener('click', function(){
        var li = d_p.parentElement.parentElement;
        var arrowDown = li.querySelector('.arrow-down');
        var arrowUp = li.querySelector('.arrow-up');
        var drop = li.querySelector('.drop-down');

        navMenu.classList.remove('close-menu');
        drop.style.display = 'none';
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    })
})
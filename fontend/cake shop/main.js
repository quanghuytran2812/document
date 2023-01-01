
// next and prev Main Home
document.getElementById('next').onclick = () =>{ 
    let lists = document.querySelectorAll('.itemH');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = () =>{ 
    let lists = document.querySelectorAll('.itemH');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

window.onload = ()=>{
    setInterval(function(){
        let lists = document.querySelectorAll('.itemH');
        document.getElementById('slide').appendChild(lists[0]);
    }, 8000);
}

// click icon menu

const menuBtn = document.querySelector("#menu_icon");
const navMenu = document.querySelector(".navbar");
const header = document.querySelector(".menuHeader_bar");

menuBtn.onclick = () =>{
    navMenu.classList.toggle('open');

    if (navMenu.className == 'navbar open') {
        menuBtn.className = "bi bi-x-lg";
    }else if(navMenu.className == 'navbar'){
        menuBtn.className = "bi bi-list";
    }
}

window.onscroll = ()=>{
    navMenu.classList.remove('open');
    menuBtn.className = "bi bi-list";
    header.classList.toggle('sticky', window.scrollY > 0);
}
// change hover li when you click
const liMenu = document.querySelectorAll('.menu_item');

liMenu.forEach((li)=>{
    li.onclick = function(){
        document.querySelector('.menu_item.active').classList.remove('active')
        this.classList.add('active')
    }
})




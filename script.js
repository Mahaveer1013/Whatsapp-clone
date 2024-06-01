var menuBar = document.querySelector('.aside-menu');
var menu_lines = document.querySelectorAll('.menu-bar');
var aside = document.querySelector('aside');
menuBar.addEventListener('click', () => {
    aside.classList.toggle('close');
    menu_lines.forEach(line => {
        line.classList.add('menu-bar-animation');
        line.addEventListener('animationend', () => {
            line.classList.remove('animate');
        });
    })
})

var aside_lists = document.querySelectorAll('aside ul li');
aside_lists.forEach(li => {
    li.addEventListener('click', () => {
        aside_lists.forEach(list => {
            list.classList.remove('active');
        })
        li.classList.add('active');
        aside.classList.add('close');
    })
})

var chatSearchLabel = document.querySelector('.chat-search-label');
var chatSearchInput = document.getElementById('for-chat-search');
chatSearchInput.addEventListener('focus', () => {
    chatSearchLabel.classList.add('focused');
})
chatSearchInput.addEventListener('blur', () => {
    chatSearchLabel.classList.remove('focused');
})

var users = document.querySelectorAll('.user-lists li');
var chatHeader= document.querySelector('.user-chat-header')
users.forEach(user => {
    user.addEventListener('click', () => {
        var username = user.querySelector('h4').innerText;
        var profilePic = user.querySelector('.user-list-dp').src;
        console.log(profilePic);
        chatHeader.querySelector('.user-name').innerText = username;
        chatHeader.querySelector('.user-header-dp').src = profilePic;
    })
})
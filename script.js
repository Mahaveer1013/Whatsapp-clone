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
var chatHeader = document.querySelector('.user-chat-header')
var chatPage = document.querySelector('.chat-page')
var userChatPage = document.querySelector('.user-chat-page')
var deafultChatPage = document.querySelector('.default-chat-page')
var chatList = document.querySelector('.chat-list');
users.forEach(user => {
    user.addEventListener('click', () => {
        console.log(user);
        var username = user.querySelector('h4').innerText;
        var profilePic = user.querySelector('.user-list-dp').src;
        chatHeader.querySelector('.user-name').innerText = username;
        chatHeader.querySelector('.user-header-dp').src = profilePic;
        console.log('1 is ' + chatPage.style.display);
        console.log('2 is ' + userChatPage.style.display);
        if (chatPage.style.display === 'none') {
            console.log('yes its none');
            chatPage.style.display = '';
            chatList.style.display = 'none';
            deafultChatPage.style.display='none'
        }
        else if (userChatPage.style.display == 'none') {
            deafultChatPage.style.display = 'none';
            userChatPage.style.display = '';
        }
    })
})

var backChat = document.querySelector('.go-back');
backChat.addEventListener('click', () => {
    if (chatList.style.display === 'none') {
        chatList.style.display = '';
        chatPage.style.display = 'none';
    } else {
        userChatPage.style.display = 'none';
        deafultChatPage.style.display = '';
    }
})
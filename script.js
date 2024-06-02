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
var userChat = document.querySelector('.user-chat');

users.forEach(user => {
    user.addEventListener('click', () => {
        var username = user.querySelector('h4').innerText;
        var profilePic = user.querySelector('.user-list-dp').src;
        chatHeader.querySelector('.user-name').innerText = username;
        chatHeader.querySelector('.user-header-dp').src = profilePic;
        if (window.innerWidth <= 768) {
            console.log('yes its none');
            chatPage.classList.add('active');
            deafultChatPage.classList.add('hide');
            userChatPage.classList.remove('hide');
            chatList.classList.remove('active');
            userChat.scrollTop = userChat.scrollHeight;
        } else {
            deafultChatPage.classList.add('hide');
            userChatPage.classList.remove('hide');
        }
    })
})

if (window.innerWidth <= 768) {
    chatPage.classList.add('hide');
}

function goBack() {
    if (window.innerWidth <= 768) {
        chatPage.classList.remove('active');
        chatList.classList.add('active');
    } else {
        deafultChatPage.classList.remove('hide');
        userChatPage.classList.add('hide');
    }
}

const searchBox = document.getElementById('for-chat-search');
const namesList = document.querySelector('.user-lists');
const names = namesList.querySelectorAll('li .user-dets h4');
function searchUsers() {
    const filter = searchBox.value.toLowerCase();
    names.forEach(name => {
        if (name.innerText.toLowerCase().indexOf(filter) !== -1) {
            name.parentElement.parentElement.style.display = '';
        } else {
            name.parentElement.parentElement.style.display = 'none';
        }
    })
}

var body = document.querySelector('body');
function changeTheme() {
    body.classList.toggle('light');
}
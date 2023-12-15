import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories, {message as navtitle} from "../../stories/Hamburger.stories.js";
import PagenavStories, { message } from "../../stories/Pagenav.stories.js";
import { createChatlistheader } from "../../components/chatlistheader/Chatlistheader.js";
import { createChatinfo } from "../../components/chatinfo/Chatinfo.js";
import { createMessageheader } from "../../components/messageheader/Messageheader.js";
import { createChat } from "../../components/chat/Chat.js";


    const header = document.getElementById('header');
    header.appendChild(HeaderStories.render());
    const sideNav = document.getElementById('sideNav');
    // sideNav.appendChild(HamburgerStories.render(navtitle.args));
    const center = document.getElementById('center');
    center.appendChild(PagenavStories.render(message.args))

    const chatlist = document.getElementById('chatlist');
    chatlist.appendChild(createChatlistheader());
    const info = {
        chatInfo: {
            name: "alagu",
            lastmessage: "Hi how are you",
            time: "7:20",
            unread: 0,
            path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg'
        }
    }
    fetch('../../data/chatlist.json')
    .then((response) => response.json())
    .then((json) => {
        for(let i=0;i<json.chat.length;i++)
        {
            chatlist.appendChild(createChatinfo(json.chat[i]))
        }
        
        }
    );
    const chat = document.getElementById('chat');

    chat.appendChild(createMessageheader())
    const today = document.createElement('h1');
    today.className = 'today';
    today.innerText = 'Today'
    chat.appendChild(today);
    chat.appendChild(createChat(''))
    chat.appendChild(createChat('send'))
    chat.appendChild(createChat(''))
    chat.appendChild(createChat('send'))
    const messagebar = document.createElement('div');
    messagebar.className = 'message-bar';
    const clip = document.createElement('i');
    clip.className = 'fa fa-solid fa-paperclip message-clip';
    const type = document.createElement('input');
    type.className = 'type';
    type.setAttribute('placeholder','Write a message...')
    const send = document.createElement('i');
    send.className = 'fa-solid fa-paper-plane plane';
    messagebar.appendChild(clip);
    messagebar.appendChild(type);
    messagebar.appendChild(send);
    chat.appendChild(messagebar);
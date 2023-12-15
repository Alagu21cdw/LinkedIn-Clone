import ProfilepicStories from "../../stories/Profilepic.stories.js";


/**
 * Creating chat info
 * @param {*} param0 
 * @returns 
 */
export const createChatinfo = ({chatInfo}) => {

    const infoSnippet = document.createElement('div');
    infoSnippet.className = 'chat-info-snippet';
    const left = document.createElement('div');
    left.className = 'left';
    const commonInfo = document.createElement('div');
    commonInfo.className = 'chat-common-info';
    const infoName = document.createElement('h1');
    infoName.className = 'chat-info-name';
    infoName.innerText = chatInfo.name;
    const infoDescription = document.createElement('h1');
    infoDescription.className = 'chat-info-description';
    infoDescription.innerText = chatInfo.lastmessage;
    left.appendChild(ProfilepicStories.render(chatInfo));
    
    commonInfo.appendChild(infoName);
    commonInfo.appendChild(infoDescription);
    left.appendChild(commonInfo);
    infoSnippet.appendChild(left);
    const right = document.createElement('div');
    right.className = 'chat-right';
    const time = document.createElement('h2');
    time.className = 'chat-time';
    time.innerText = chatInfo.time
    const unreadbox = document.createElement('div');
    unreadbox.className = 'unread';
    console.log(chatInfo.unread)
    if(chatInfo.unread == "0")
    {
        console.log('0')
        unreadbox.innerText = 0;
        unreadbox.classList.add('hide-unread');
    } else
    {
        console.log('1')
        unreadbox.innerText = chatInfo.unread;
    }
    right.appendChild(time);
    right.appendChild(unreadbox);
    infoSnippet.appendChild(right);
    return infoSnippet;
}
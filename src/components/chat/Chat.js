import { MESSAGE } from "../../constants/Message.constants.js";
import ProfilepicStories, { sea } from "../../stories/Profilepic.stories.js";




/**
 * creating chat component
 * @param {*} type 
 * @returns 
 */
export const createChat = (type) => {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    const messagebox = document.createElement('div');
    messagebox.className = 'message-box';
    const message = document.createElement('h2');
    const image = ProfilepicStories.render(sea.args);
    message.className = 'message';
    message.innerText = MESSAGE.TEXT;
    const time = document.createElement('h2');
    time.className = 'sent-time';
    time.innerText = MESSAGE.TIME;
    if(type == 'send') {
        messageContainer.classList.add('sent-message')
        messagebox.classList.add('sent-box')
        time.innerText = MESSAGE.SEEN;
        messagebox.appendChild(message);
        messagebox.appendChild(time);
        messageContainer.appendChild(messagebox);
        messageContainer.appendChild(image);
    } else {
        messagebox.classList.add('recieve');
        messagebox.appendChild(message);
        messagebox.appendChild(time);
        messageContainer.appendChild(image);
        messageContainer.appendChild(messagebox);
    }
    return messageContainer;

}
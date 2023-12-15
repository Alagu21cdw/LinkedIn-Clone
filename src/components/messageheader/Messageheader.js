import ProfilepicStories, { sea } from "../../stories/Profilepic.stories.js";



/**
 * creating message header
 * @returns 
 */
export const createMessageheader = () => {
    const infoSnippet = document.createElement('div');
    infoSnippet.className = 'message-header';
    const left = document.createElement('div');
    left.className = 'left';
    const commonInfo = document.createElement('div');
    commonInfo.className = 'chat-common-info';
    const infoName = document.createElement('h1');
    infoName.className = 'chat-info-name';
    infoName.innerText = 'Nijin';
    const online = document.createElement('div');
    online.className = 'light';

    const infoDescription = document.createElement('h1');
    infoDescription.className = 'chat-info-description';
    infoDescription.innerText = 'online';
    left.appendChild(ProfilepicStories.render(sea.args));
    commonInfo.appendChild(online);
    
    commonInfo.appendChild(infoName);
    commonInfo.appendChild(infoDescription);
    left.appendChild(commonInfo);
    infoSnippet.appendChild(left);
    const right = document.createElement('div');
    right.className = 'message-right';
    const camera = document.createElement('i');
    camera.className = 'fa-solid fa-video';
    const magnify = document.createElement('i');
    magnify.className = 'fa fa-bold fa-magnifying-glass glass';
    const more = document.createElement('i');
    more.className = 'fa fa-solid fa-ellipsis-vertical more';
    right.appendChild(camera);
    right.appendChild(magnify);
    right.appendChild(more);
    infoSnippet.appendChild(right);
    return infoSnippet;

}
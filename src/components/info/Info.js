import ButtonStories, { Hallow } from "../../stories/Button.stories.js";
import ProfilepicStories from "../../stories/Profilepic.stories.js";


export const createInfo = ({info}) => {

    const infoSnippet = document.createElement('div');
    infoSnippet.className = 'info-snippet';
    const left = document.createElement('div');
    left.className = 'left';
    const commonInfo = document.createElement('div');
    commonInfo.className = 'common-info';
    const infoName = document.createElement('h1');
    infoName.className = 'info-name';
    infoName.innerText = info.name;
    const infoDescription = document.createElement('h1');
    infoDescription.className = 'info-description';
    infoDescription.innerText = info.description;
    const infoLocation = document.createElement('h1');
    infoLocation.className = 'info-location';
    infoLocation.innerText = info.location;
    left.appendChild(ProfilepicStories.render(info));
    
    commonInfo.appendChild(infoName);
    commonInfo.appendChild(infoDescription);
    commonInfo.appendChild(infoLocation);
    left.appendChild(commonInfo);
    infoSnippet.appendChild(left);
    const button = document.createElement('div');
    button.className = 'connect';
    button.appendChild(ButtonStories.render(Hallow.args));
    infoSnippet.appendChild(button);
    return infoSnippet;

}
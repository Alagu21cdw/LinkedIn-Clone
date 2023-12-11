import profilepicstory, { tree } from '../../stories/Profilepic.stories.js';
import searchbarstory from '../../stories/Searchbar.stories.js';

export const createHeader = () => {
    const header = document.createElement('div');
    header.className = 'header';
    const logo = document.createElement('img');
    logo.src = '../../../public/assets/logo.png';
    logo.className = ['logo'];
    const searchBardiv = document.createElement('div');
    searchBardiv.className = 'search-bar-div';
    searchBardiv.appendChild(searchbarstory.render(true));
    const icons = document.createElement('div');
    icons.className = 'icons';
    const message = document.createElement('i');
    message.className = 'fa font-header fa-regular fa-message';
    const notification = document.createElement('i');
    notification.className = 'fa font-header fa-regular fa-bell';
    const save = document.createElement('i');
    save.className = 'fa font-header fa-regular fa-bookmark';
    icons.appendChild(save);
    icons.appendChild(message);
    icons.appendChild(notification);
    header.appendChild(logo);
    header.appendChild(searchBardiv);
    header.appendChild(icons);
    header.appendChild(profilepicstory.render(tree.args));
    return header;
}
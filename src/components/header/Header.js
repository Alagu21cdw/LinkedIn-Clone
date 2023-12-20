import { PROFILE } from '../../constants/Profile.constants.js';
import profilepicstory, { sea, tree } from '../../stories/Profilepic.stories.js';
import searchbarstory from '../../stories/Searchbar.stories.js';

/**
 * Creating header
 * @returns 
 */
export const createHeader = () => {
    const header = document.createElement('div');
    header.className = 'header';
    header.setAttribute('aria-label','header')
    const logo = document.createElement('img');
    logo.setAttribute('alt','logo')
    const linkhome = document.createElement('a')
    linkhome.href = PROFILE.HOME
    const linkmessage = document.createElement('a')
    linkmessage.href = PROFILE.MESSAGE
    logo.src = PROFILE.LOGO;
    const linkprofile = document.createElement('a')
    linkprofile.href = PROFILE.PROFILE
    logo.className = ['logo'];
    linkhome.appendChild(logo);
    const searchBardiv = document.createElement('div');
    searchBardiv.className = 'search-bar-div';
    searchBardiv.appendChild(searchbarstory.render(true));
    const icons = document.createElement('div');
    icons.className = 'icons';
    const message = document.createElement('i');
    message.className = 'fa font-header fa-regular fa-message';
    message.setAttribute('aria-label','message icon')
    const notification = document.createElement('i');
    notification.setAttribute('aria-label','notification icon')
    notification.setAttribute('tabindex','10')
    notification.className = 'fa font-header fa-regular fa-bell';
    const save = document.createElement('i');
    save.setAttribute('tabindex','10')
    save.setAttribute('aria-label','save icon')
    save.className = 'fa font-header fa-regular fa-bookmark';
    linkmessage.appendChild(message);
    icons.appendChild(save);
    icons.appendChild(linkmessage);
    icons.appendChild(notification);
    header.appendChild(linkhome);
    header.appendChild(searchBardiv);
    header.appendChild(icons);
    linkprofile.appendChild(profilepicstory.render(sea.args))
    header.appendChild(linkprofile);
    return header;
}
import { PROFILE } from "../../constants/Profile.constants.js";



/**
 * creating group
 * @param {*} param0 
 * @returns 
 */
export const createGroup = ({groupInfo}) => {

    const groupContainer = document.createElement('div');
    groupContainer.className = 'groups';
    const groups = groupInfo;
    for(let i=0;i<groups.length;i++) 
    {
        const group = document.createElement('div');
        group.className = 'group';
        const image = document.createElement('img');
        image.setAttribute('group image')
        image.src = groups[i].image;
        image.className = 'group-image';
        const text = document.createElement('p');
        text.innerText = groups[i].name;
        text.className = 'group-text';

        if(i>2) {
            group.classList.add('hide-group')
        }
        group.appendChild(image);
        group.appendChild(text);
        groupContainer.appendChild(group);
    }
    const showall = document.createElement('div');
    showall.className = 'show-all';
    const show = document.createElement('h4');
    show.className = 'show';
    show.innerText = 'Show All ('+groups.length+')';
    const arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-angle-down arrow';
    showall.appendChild(arrow);
    showall.appendChild(show);

    showall.addEventListener('click', () => {
        const infoarr = document.getElementsByClassName('hide-group');
        for(let i=0;i<infoarr.length;i++)
        {
            console.log(infoarr[i])
            infoarr[i].classList.toggle('show-group')
        }
        arrow.classList.toggle('invert');
        if(show.innerText == PROFILE.SHOWALL+groups.length+')') {
            show.innerText = PROFILE.SHOWLESS;
        } else  {
            show.innerText = PROFILE.SHOWALL+groups.length+')';
        }
    })
    showall.addEventListener('keypress', () => {
        const infoarr = document.getElementsByClassName('hide-group');
        for(let i=0;i<infoarr.length;i++)
        {
            console.log(infoarr[i])
            infoarr[i].classList.toggle('show-group')
        }
        arrow.classList.toggle('invert');
        if(show.innerText == PROFILE.SHOWALL+groups.length+')') {
            show.innerText = PROFILE.SHOWLESS;
        } else  {
            show.innerText = PROFILE.SHOWALL+groups.length+')';
        }
    })
    showall.setAttribute('tabindex','1');
    groupContainer.appendChild(showall);
    return groupContainer;
}
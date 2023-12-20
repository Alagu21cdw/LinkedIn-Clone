import { HOME } from "../../constants/Home.constants.js";



/**
 * creating pagenav
 * @param {*} param0 
 * @returns 
 */
export const createPagenav = ({listItems}) => {
    
    const pageNav = document.createElement('nav');
    pageNav.className = 'page-nav';
    console.log(listItems);
    if(listItems.length > 0) {
        const list = document.createElement('ul');
        list.className = 'list';
        for(let i=0;i<listItems.length;i++) {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerText = listItems[i];
        listItem.setAttribute('tabindex','1')
        listItem.addEventListener('click', (event) => {
            remove()
            listItem.classList.toggle('active');
            
        })
        listItem.addEventListener('keypress', (event) => {
            remove()
            listItem.classList.toggle('active');
            
        })
        list.appendChild(listItem);
        }
        pageNav.appendChild(list);
        return pageNav;
        
    } else {
        const sort = document.createElement('div');
        sort.className = 'sort';
        const recent = document.createElement('h1');
        recent.className = 'recent';
        recent.innerText = HOME.RECENT;
        const filter = document.createElement('h1');
        filter.className = 'filter';
        filter.innerText = HOME.FILTER;
        sort.appendChild(filter);
        sort.appendChild(recent);
        pageNav.appendChild(sort);
        return pageNav;

    }
}

function remove() {
    const items = document.getElementsByClassName('list-item');
    for(let i=0;i<items.length;i++) 
    {
        if(items[i].classList.contains('active')) 
            items[i].classList.toggle('active');
    }
}
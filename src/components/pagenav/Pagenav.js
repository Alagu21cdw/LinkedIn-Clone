



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
        listItem.addEventListener('click', (event) => {
            remove()
            listItem.classList.toggle('active');
            
        })
        list.appendChild(listItem);
        }
        
        // for(let i=0;i<items.length;i++) 
        // {
        //     console.log(items[i])
        //     items[i].addEventListener('click', (event) => {
        //         console.log(event);
        //         items[i].classList.toggle('active');
        //     })
        // }
        pageNav.appendChild(list);
        return pageNav;
        
    } else {
        const sort = document.createElement('div');
        sort.className = 'sort';
        const recent = document.createElement('h1');
        recent.className = 'recent';
        recent.innerText = 'Recent';
        const filter = document.createElement('h1');
        filter.className = 'filter';
        filter.innerText = 'Sort by:';
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
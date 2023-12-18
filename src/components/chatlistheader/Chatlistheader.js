


/**
 * creating chat list header
 * @returns 
 */
export const createChatlistheader = () => {
    const header = document.createElement('header');
    header.className = 'chat-list-header';
    const search = document.createElement('div');
    search.className = 'chat-search'
    const searchBar = document.createElement('input');
    searchBar.className = 'chat-searchbar'
    searchBar.setAttribute('placeholder','Search')
    const magnify = document.createElement('i');
    magnify.className = 'fa fa-bold fa-magnifying-glass chat-magnify';
    const edit = document.createElement('i');
    edit.className = 'fa fa-solid fa-pen chat-edit';
    search.appendChild(magnify);
    search.appendChild(searchBar);
    header.appendChild(search);
    header.appendChild(edit);
    return header;
}
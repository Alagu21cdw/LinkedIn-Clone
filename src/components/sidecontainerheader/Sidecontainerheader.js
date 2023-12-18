

/**
 * creating side container header
 * @param {*} param0 
 * @returns 
 */
export const createSidecontainerheader = ({container,containertitle}) =>{

    const header = document.createElement('header');
    header.className = 'side-header';
    const title = document.createElement('h1');
    title.className = 'side-title';
    title.innerText = containertitle;
    if( container == 'people') {
        header.appendChild(title);
        return header;
    } else
    if( container == 'analytics') {
        header.appendChild(title);
        const view = document.createElement('h3');
        view.className = 'view-more';
        view.innerText = 'View more';
        header.appendChild(view);
        return header;
    } else {
        header.appendChild(title);
        const tools = document.createElement('div');
        tools.className = 'tools';
        const plus = document.createElement('h1');
        plus.className = 'side-container-plus';
        plus.innerText = '+';
        const edit = document.createElement('i');
        edit.className = 'fa fa-solid fa-pen side-container-edit';
        tools.appendChild(plus);
        tools.appendChild(edit);
        header.appendChild(tools);
        return header;
    }
}



export const createSidecontainer = ({container,containertitle}) =>{

    if( container == 'people') {
        const header = document.createElement('div');
        header.className = 'side-header';
        const title = document.createElement('h1');
        title.className = 'side-title';
        title.innerText = containertitle;
        header.appendChild(title);
        return header;
    }
}
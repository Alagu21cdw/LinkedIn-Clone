import { HOME } from "../../constants/Home.constants.js";



/**
 * creating para
 * @param {} param0 
 * @returns 
 */
export const createPara = ({para}) => {
    const paraElement = document.createElement('div');
    paraElement.className = 'para';
    const header = document.createElement('div');
    header.className = 'para-header';
    const paraTitle = document.createElement('h1');
    paraTitle.className = 'para-title';
    paraTitle.innerText = para.title;
    const paraLocation = document.createElement('h1');
    paraLocation.className = 'para-location';
    paraLocation.innerText = para.location;
    header.appendChild(paraTitle);
    header.appendChild(paraLocation);
    const paraBody = document.createElement('div');
    paraBody.className = 'para-body';
    const paraLeft = document.createElement('div');
    paraLeft.className = 'para-left';
    const from = document.createElement('h1');
    from.className = 'para-from';
    from.innerText = para.from;
    const to = document.createElement('h1');
    to.className = 'para-to';
    to.innerText = para.to;
    if(from.innerText == '') {
        from.innerText = HOME.DATE;
        to.innerText = HOME.DATE;
        paraLeft.classList.add('para-hide');
    }
    paraLeft.appendChild(to);
    paraLeft.appendChild(from);
    const paraContent = document.createElement('p');
    paraContent.className = 'para-content';
    paraContent.innerText = para.content;
    let pen = document.createElement('h1');
    pen = document.createElement('i');
    pen.className = 'fa fa-solid fa-pen post-pen pen';
    paraElement.appendChild(pen);
    paraBody.appendChild(paraLeft);
    paraBody.appendChild(paraContent);
    paraElement.appendChild(header);
    paraElement.appendChild(paraBody);
    return paraElement;


    
}
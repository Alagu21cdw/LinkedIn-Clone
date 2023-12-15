


/**
 * creating snip
 * @param {*} param0 
 * @returns 
 */
export const createSnip = ({name,endorsement}) => {
    const snip = document.createElement('div');
    snip.className = 'snip';
    snip.innerText = name;
    if(endorsement !== '') {
        const endorsementBox = document.createElement('div');
        endorsementBox.className = 'endorsement';
        endorsementBox.innerText = endorsement;
        snip.appendChild(endorsementBox);
    }
    return snip;
}
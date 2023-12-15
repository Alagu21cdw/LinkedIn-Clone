

/**
 * creating number
 * @param {} param0 
 * @returns 
 */
export const createNumber = ({numberInfo}) => {
    const container = document.createElement('div');
    container.className = 'number-container';
    const number = document.createElement('h2');
    number.className = 'number';
    number.innerText = numberInfo.number;
    const info = document.createElement('h3');
    info.className = 'number-info';
    info.innerText = numberInfo.text;
    container.appendChild(number);
    container.appendChild(info);
    return container;
}
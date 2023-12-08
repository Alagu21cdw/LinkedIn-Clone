import './box.css';

export const createBox = ({
    color = 'pink',
    size = 'small',
    label
}) => {
    const box = document.createElement('div');
    box.innerText = label;
    const boxsize = size == 'small' ? 'small' : 'big';
    const bgcolor = color == 'pink' ? 'pink' : 'blue';
    box.className = [boxsize,bgcolor].join(' ');
    return box;
}
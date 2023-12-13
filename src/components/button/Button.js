


export const createButton = ({
    primary,
    size,
    label
  }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
  
    const mode = primary ? 'hallow' : 'normal';
    const sizeOfButton = size == 'small' ? 'small' : 'big';
    btn.className = ['button', sizeOfButton, mode].join(' ');
    return btn;
  };
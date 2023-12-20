

/**
 * creating button component
 * @param {*} param0 
 * @returns 
 */
export const createButton = ({
    primary,
    size,
    label
  }) => {
    // const link = document.createElement('a')
    // link.href = "";

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
  
    const mode = primary ? 'hallow' : 'normal';
    const sizeOfButton = size == 'small' ? 'small' : 'big';
    btn.className = ['button', sizeOfButton, mode].join(' ');
    btn.setAttribute('role','button')
    btn.setAttribute('tabindex','1')
    // btn.setAttribute('aria-label','button')
    // link.appendChild(btn);
    return btn;
  };
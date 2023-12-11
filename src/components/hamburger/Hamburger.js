
export const createHamburger = () => {
    const outterDiv = document.createElement('div');
    outterDiv.className = 'outter';
    const hamburger = document.createElement('div');
    const title = document.createElement('div');
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper';
    title.className = 'title';
    title.innerText = 'Profile';
    hamburger.className = 'hamburger';
    const line = document.createElement('div');
    const line2 = document.createElement('div');
    const line3 = document.createElement('div');
    line.className = 'line';
    line2.classList.add('line');
    line3.classList.add('line');
    hamburger.appendChild(line);
    hamburger.appendChild(line2);
    hamburger.appendChild(line3);
    const sidenavbar = showMenu();
    hamburger.addEventListener('click',(event) => {
        line2.classList.toggle('line2');
        line3.classList.toggle('line3');
        sidenavbar.classList.toggle('hide');

    })
    wrapperDiv.appendChild(hamburger);
    wrapperDiv.appendChild(title);
    outterDiv.appendChild(wrapperDiv);
    outterDiv.appendChild(sidenavbar);
    
    return outterDiv;
}

function showMenu(){
    const sideNav = document.createElement('nav');
    fetch('../../data/menu.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.menu.length);
        for(var i=0; i<json.menu.length; i++) {
            const menu = document.createElement('ul');
            menu.innerText = Object.keys(json.menu[i]);
            let items = Object.values(json.menu[i]);
            for(var j=0; j<items[0].length; j++) {
                const listItem = document.createElement('li');
                listItem.innerText = items[0][j];
                menu.appendChild(listItem);
            }
            sideNav.appendChild(menu);
        }
    });
    
    
    
    // const listItem = document.createElement('li');
    // listItem.innerText = 'My profile';
    // const listItem2 = document.createElement('li');
    // listItem2.innerText = 'Edit profile';
    // const listItem3 = document.createElement('li');
    // listItem3.innerText = 'Analytics';
    // menu2.appendChild(listItem);
    // menu2.appendChild(listItem2);
    // menu2.appendChild(listItem3);
    sideNav.classList.add('hide');
    return sideNav;

}
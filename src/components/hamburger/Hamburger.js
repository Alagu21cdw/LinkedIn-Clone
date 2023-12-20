/**
 * creating hamburger
 * @param {*} param0 
 * @returns 
 */
export const createHamburger = ({navtitle}) => {
    const outterDiv = document.createElement('div');
    outterDiv.className = 'outter';
    const hamburger = document.createElement('div');
    hamburger.setAttribute('tabindex','1')
    hamburger.setAttribute('aria-expanded','false')
    const title = document.createElement('div');
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper';
    title.className = 'title';
    title.innerText = navtitle;
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
    hamburger.addEventListener('click',() => {
        hamburger.setAttribute('aria-expanded','true')
        line2.classList.toggle('line2');
        line3.classList.toggle('line3');
        sidenavbar.classList.toggle('hide');
    })
    hamburger.addEventListener('keypress',() => {
        hamburger.setAttribute('aria-expanded','true')
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
                listItem.setAttribute('tabindex','1')
                listItem.innerText = items[0][j];
                menu.appendChild(listItem);
            }
            sideNav.appendChild(menu);
        }
    });
    sideNav.classList.add('hide');
    return sideNav;

}
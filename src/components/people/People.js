import { HOME } from "../../constants/Home.constants.js";
import ButtonStories, { normal } from "../../stories/Button.stories.js";
import InfoStories, {people as peopleInfo} from "../../stories/Info.stories.js";
import SidecontainerheaderStories, { people } from "../../stories/Sidecontainerheader.stories.js";


/**
 * creating people
 * @returns 
 */
export const createPeople = () => {

    const peopleContainer = document.createElement('div');
    peopleContainer.className = 'people-container';
    
    peopleContainer.appendChild(SidecontainerheaderStories.render(people.args));
    
    peopleContainer.appendChild(getinfoSnippet());
    const recommendations = document.createElement('div');
    recommendations.className = 'recommendations'
    const showMore = document.createElement('h1');
    showMore.className = 'show-more';
    showMore.innerText = HOME.VIEWALL;
    const arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-angle-down arrow';
    recommendations.appendChild(showMore);
    recommendations.appendChild(arrow);
    peopleContainer.appendChild(recommendations);
    recommendations.addEventListener('click', () => {
        const infoarr = document.getElementsByClassName('hidesnippet');
        for(let i=0;i<infoarr.length;i++)
        {
            console.log(infoarr[i])
            infoarr[i].classList.toggle('showsnippet')
        }
        arrow.classList.toggle('invert');
        if(showMore.innerText == HOME.VIEWALL) {
            showMore.innerText = HOME.VIEWLESS;
        } else  {
            showMore.innerText = HOME.VIEWALL;
        }
    })
    const premiumBtn = ButtonStories.render(normal.args);
    premiumBtn.classList.add('premium-button');
    peopleContainer.appendChild(premiumBtn);
    const premiumText = document.createElement('h1');
    premiumText.className = 'premium-text';
    getinfoSnippet();
    premiumText.innerText = HOME.PROFILETEXT;
    peopleContainer.appendChild(premiumText);
    return peopleContainer;
}

function getinfoSnippet() {
    const container = document.createElement('div');
    container.className = 'container';
    fetch('../../data/people.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.people);
        for(let i=0;i<json.people.length;i++) {
            if(i>3) {
                const element = InfoStories.render(json.people[i]);
                element.classList.add('hidesnippet');
                container.appendChild(element);
            }
            else {
                container.appendChild(InfoStories.render(json.people[i]));
            }
        }
        }
    );
    return container;

}
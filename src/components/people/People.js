import SidecontainerheaderStories, { people } from "../../stories/Sidecontainerheader.stories.js";



export const createPeople = () => {

    const peopleContainer = document.createElement('div');
    peopleContainer.className = 'people-container';
    peopleContainer.appendChild(SidecontainerheaderStories.render(people.args));
    return peopleContainer;
}
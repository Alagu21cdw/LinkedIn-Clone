import SidecontainerheaderStories from "../../stories/Sidecontainerheader.stories.js";
import SnipStories from "../../stories/Snip.stories.js";
import { createGroup } from "../group/Group.js";
import { createNumber } from "../number/Number.js";



/**
 * creating side container 
 * @param {*} param0 
 * @returns 
 */
export const createSidecontainer = ({bodycontent,type}) => {
        const container = document.createElement('div');
        container.className = 'side-container';
        console.log(bodycontent);
        const header = SidecontainerheaderStories.render(bodycontent);
        container.appendChild(header);
        if(type == 'analytics') 
        {
            console.log('hi');
            const numberContainer = document.createElement('div');
            numberContainer.className = 'numbers';
            const posts = createNumber(bodycontent.posts);
            posts.className = 'posts';
            const view = createNumber(bodycontent.vists);
            view.className = 'views';
            numberContainer.appendChild(posts);
            numberContainer.appendChild(view);
            const graph = document.createElement('img');
            graph.src = '../../../public/assets/graph.png';
            graph.className = 'graph';
            container.appendChild(numberContainer);
            container.appendChild(graph);
            return container;

        }
        if( type == 'snips' ) {
            const snipWrapper = document.createElement('div');
            snipWrapper.className = 'snip-wrapper';
            const snipArr = bodycontent.snips;
            for(let i=0;i<snipArr.length;i++) {
                console.log(snipArr[i])
                snipWrapper.appendChild(SnipStories.render(snipArr[i]));
            }
            container.appendChild(snipWrapper);
            return container;
        }
        if( type == 'group') {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'group-container';
            groupContainer.appendChild(createGroup(bodycontent));
            container.appendChild(groupContainer);
            return container;
        }
}
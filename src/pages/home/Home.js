import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories, {home as navtitle} from "../../stories/Hamburger.stories.js";
import PostStories, {newpost} from "../../stories/Post.Stories.js";
import PeopleStories from "../../stories/People.stories.js";
import PagenavStories, { home } from "../../stories/Pagenav.stories.js";


    const header = document.getElementById('header');
    header.appendChild(HeaderStories.render());
    const sideNav = document.getElementById('sideNav');
    sideNav.appendChild(HamburgerStories.render(navtitle.args));
    const center = document.getElementById('center');
    center.appendChild(PagenavStories.render(home.args))
    center.appendChild(PostStories.render(newpost.args));
    getPosts()
function getPosts() 
{
    fetch('../../data/posts.json')
    .then((response) => response.json())
    .then((json) => {
        for(let i=0;i<json.posts.length;i++)
        {
            center.appendChild(PostStories.render(json.posts[i]));
        }
        
        }
    );
}
    const right = document.getElementById('right');
    right.appendChild(PeopleStories.render({}));


    

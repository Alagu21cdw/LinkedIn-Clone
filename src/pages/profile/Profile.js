import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories, {profile as navtitle} from "../../stories/Hamburger.stories.js";
import PostStories from "../../stories/Post.Stories.js";
import PagenavStories, { profile } from "../../stories/Pagenav.stories.js";



const header = document.getElementById('header');
header.appendChild(HeaderStories.render());
const sideNav = document.getElementById('sideNav');
sideNav.appendChild(HamburgerStories.render(navtitle.args));
const center = document.getElementById('center');
center.appendChild(PagenavStories.render(profile.args))

fetch('../../data/profileinfo.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.profile)
        for(let i=0;i<json.profile.length;i++)
        {
            center.appendChild(PostStories.render(json.profile[i]));
        }
        
        }
    );
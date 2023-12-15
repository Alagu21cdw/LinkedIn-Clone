import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories, {profile as navtitle} from "../../stories/Hamburger.stories.js";
import PostStories from "../../stories/Post.Stories.js";
import PagenavStories, { profile } from "../../stories/Pagenav.stories.js";
import ProfileStories from "../../stories/Profile.stories.js";
import SidecontainerStories from "../../stories/Sidecontainer.stories.js";
import { createMorebutton } from "../../components/morebutton/Morebutton.js";



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

    const right = document.getElementById('right');
    fetch('../../data/profile.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        right.appendChild(ProfileStories.render(json))
        const bodycontents = json.bodycontents;
            for(let i=0;i<bodycontents.length;i++)
            {
                right.appendChild(SidecontainerStories.render(bodycontents[i]))
            }
        }
    );

    right.appendChild(createMorebutton())

        document.getElementById("overlay").addEventListener('click', () => {
            document.getElementById("overlay").classList.remove('show');
            document.getElementsByClassName("more-container")[0].classList.remove('showmore');
        })
      
      


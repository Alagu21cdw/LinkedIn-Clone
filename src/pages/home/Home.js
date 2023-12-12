import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories from "../../stories/Hamburger.stories.js";
// import PostheaderStories, { heading, post} from "../../stories/Postheader.stories.js";
import PostStories, {newpost} from "../../stories/Post.Stories.js";
import { createPeople } from "../../components/people/People.js";


    const header = document.getElementById('header');
    header.appendChild(HeaderStories.render());
    const page = document.getElementById('page');
    
    console.log("Login page created");
    page.appendChild(HamburgerStories.render());
    page.appendChild(PostStories.render(newpost.args));
    page.appendChild(createPeople());
    // page.appendChild(PostheaderStories.render(heading.args));

    

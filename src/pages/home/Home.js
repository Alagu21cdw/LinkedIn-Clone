import HeaderStories from "../../stories/Header.stories.js";
import HamburgerStories from "../../stories/Hamburger.stories.js";
import PostheaderStories, { heading, post } from "../../stories/Postheader.stories.js";


    const header = document.getElementById('header');
    header.appendChild(HeaderStories.render());
    const page = document.getElementById('page');
    
    console.log("Login page created");
    page.appendChild(HamburgerStories.render());
    page.appendChild(PostheaderStories.render(post.args));

    

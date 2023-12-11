import ProfilepicStories, { sea } from "../../stories/Profilepic.stories.js";

export const createPostheader = ({content}) => {
    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
    if(typeof(content) == 'string')
    {
        const heading = document.createElement('h1');
        heading.className = 'heading';
        heading.innerText = 'About';
        postHeader.appendChild(heading);
        return postHeader;
    } else {
        
        const postInfo = document.createElement('div');
        postInfo.className = 'post-info';
        const info = document.createElement('div');
        info.className = 'info';
        const name = document.createElement('div');
        name.className = 'name';
        name.innerText = 'Alagu';
        const designation = document.createElement('div');
        designation.className = 'designation';
        designation.innerText = 'backend developer';
        info.appendChild(name);
        info.appendChild(designation);
        const details = document.createElement('div');
        details.className = 'details';
        details.appendChild(ProfilepicStories.render(sea.args));
        details.appendChild(info);

        const time = document.createElement('div');
        time.className = 'time';
        time.innerText = '1 min';
        postInfo.appendChild(details);
        postInfo.appendChild(time);
        const more = document.createElement('i');
        more.className = 'fa fa-solid fa-ellipsis-vertical';
        postHeader.appendChild(postInfo);
        postHeader.appendChild(more);
        return postHeader;


    }
}
import ProfilepicStories from "../../stories/Profilepic.stories.js";


/**
 * creating post header
 * @param {*} param0 
 * @returns 
 */
export const createPostheader = ({content}) => {
    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
    if(typeof(content) == 'string')
    {
        const heading = document.createElement('h1');
        heading.className = 'heading';
        heading.innerText = content;
        let plus = document.createElement('h1');
        plus.className = 'plus';
        plus.innerText = '+';
        if(content == 'About') {
            plus = document.createElement('i');
            plus.className = 'fa fa-solid fa-pen post-pen plus';
        }
        postHeader.appendChild(heading);
        postHeader.appendChild(plus);
        return postHeader;
    } else {
        
        const postInfo = document.createElement('div');
        postInfo.className = 'post-info';
        const info = document.createElement('div');
        info.className = 'info';
        const name = document.createElement('div');
        name.className = 'name';
        name.innerText = content.name;
        const designation = document.createElement('div');
        designation.className = 'designation';
        designation.innerText = content.designation;
        info.appendChild(name);
        info.appendChild(designation);
        const details = document.createElement('div');
        details.className = 'details';
        details.appendChild(ProfilepicStories.render(content));
        details.appendChild(info);

        const time = document.createElement('div');
        time.className = 'time';
        time.innerText = content.time;
        postInfo.appendChild(details);
        postInfo.appendChild(time);
        const more = document.createElement('i');
        more.className = 'fa fa-solid fa-ellipsis-vertical';
        postHeader.appendChild(postInfo);
        postHeader.appendChild(more);
        return postHeader;


    }
}
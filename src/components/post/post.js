import FeatureimageStories from "../../stories/Featureimage.stories.js";
import ParaStories from "../../stories/Para.stories.js";
import PostHeaderStories from "../../stories/Postheader.stories.js";

/**
 * creating post
 * @param {*} param0 
 * @returns 
 */
export const createPost = ({bodycontent,type}) => 
{
    const postContainer = document.createElement('div');
    postContainer.className = 'post-container';
    postContainer.appendChild(PostHeaderStories.render(bodycontent));
    const body = document.createElement('div');
    body.className = 'box';
    if(type == 'about') {
        const text = document.createElement('p');
        text.className = 'text';
        text.innerText = bodycontent.text;
        body.appendChild(text);
        postContainer.appendChild(body);
        return postContainer;
    }
    if(type == 'feature') {
        const featureContainer = document.createElement('div')
        featureContainer.className = 'feature-wrapper';
        const imagearr = bodycontent.featureImage;
        for(let i=0;i<imagearr.length;i++) {
            featureContainer.appendChild(FeatureimageStories.render(imagearr[i]))
        }
        const clip = document.createElement('i');
        clip.setAttribute('tabindex','1')
        clip.className = 'fa fa-solid fa-angle-down right-arrow';
        clip.addEventListener('click', () => {
            featureContainer.scrollBy({
                top: 0, 
                left: 620, 
                behavior: 'smooth'
              });
        })
        clip.addEventListener('keypress', () => {
            featureContainer.scrollBy({
                top: 0, 
                left: 620, 
                behavior: 'smooth'
              });
        })
        
        postContainer.appendChild(featureContainer);
        postContainer.appendChild(clip);
        return postContainer;

    }
    if(type == 'newpost') {
        const input = document.createElement('textarea');
        input.className = 'input';
        input.placeholder = 'write something...';
        const clip = document.createElement('i');
        clip.className = 'fa fa-solid fa-paperclip clip';
        body.appendChild(input);
        body.appendChild(clip);
        postContainer.appendChild(body);
        return postContainer;

    }
    if(type == 'para')
    {
        const paraContainer = document.createElement('div');
        paraContainer.className = 'para-container';
        const paraArr = bodycontent.paraContent;
        for(let i=0;i<paraArr.length;i++) {
            console.log(paraArr);
            paraContainer.appendChild(ParaStories.render(paraArr[i]))
        }
        postContainer.appendChild(paraContainer);
        return postContainer;
    }
    if(type == 'post') {
        
        const text = document.createElement('p');
        text.className = 'text';
        text.innerText = bodycontent.text;
        const tags = document.createElement('div');
        tags.className = 'tags'
        tags.innerText = bodycontent.tags;
        const image = document.createElement('img');
        image.setAttribute('alt','post image');
        image.className = 'post-image';
        image.src = bodycontent.image;
        if(bodycontent.text != "") {
            body.appendChild(text);
        }
        if(bodycontent.tags != "") {
            body.appendChild(tags);
        }
        if(bodycontent.image != "") {
            body.appendChild(image);
        }
        postContainer.appendChild(body);
        const footer = document.createElement('footer');
        footer.className = 'footer';
        const right = document.createElement('div');
        right.className = 'right';
        const likesDiv = document.createElement('div');
        likesDiv.className = 'info';
        const likes = document.createElement('i');
        likes.className = 'fa fa-regular fa-thumbs-up post-icon likes';
        const likesCount = document.createElement('h5');
        likesCount.className = 'count likes';
        likesCount.innerText = bodycontent.counts.likes;
        likesDiv.appendChild(likes);
        likesDiv.appendChild(likesCount);
        const commentsDiv = document.createElement('div');
        commentsDiv.className = 'info';
        const comments = document.createElement('i');
        comments.className = 'fa fa-regular fa-comment post-icon';
        const commentsCount = document.createElement('h5');
        commentsCount.className = 'count';
        commentsCount.innerText = bodycontent.counts.comments;
        commentsDiv.appendChild(comments);
        commentsDiv.appendChild(commentsCount);
        const sharesDiv = document.createElement('div');
        sharesDiv.className = 'info';
        const shares = document.createElement('i');
        shares.className = 'fa fa-solid fa-share post-icon';
        const sharesCount = document.createElement('h5');
        sharesCount.className = 'count';
        sharesCount.innerText = bodycontent.counts.shares;
        sharesDiv.appendChild(shares);
        sharesDiv.appendChild(sharesCount);
        const save = document.createElement('i');
        save.className = 'fa fa-regular fa-bookmark post-icon';
        likesDiv.addEventListener('click', (event) => {
            console.log(event.target);
            event.target.classList.toggle('blue');
            if(event.target.classList.contains('blue')) {
                likesCount.innerText = bodycontent.counts.likes+1;
            } else {
                likesCount.innerText = bodycontent.counts.likes;
            }
        })
        likesDiv.setAttribute('tabindex','1')
        likesDiv.addEventListener('keypress', (event) => {
            console.log(event.target);
            event.target.classList.toggle('blue');
            if(event.target.classList.contains('blue')) {
                likesCount.innerText = bodycontent.counts.likes+1;
            } else {
                likesCount.innerText = bodycontent.counts.likes;
            }
        })
        right.appendChild(likesDiv);
        right.appendChild(commentsDiv);
        right.appendChild(sharesDiv);
        footer.appendChild(right);
        footer.appendChild(save);
        postContainer.appendChild(footer);

        return postContainer;
    }
}
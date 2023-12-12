import PostHeaderStories, {post} from "../../stories/Postheader.stories.js";


export const createPost = ({bodycontent,type}) => 
{
    const postContainer = document.createElement('div');
    postContainer.className = 'post-container';
    postContainer.appendChild(PostHeaderStories.render(bodycontent));
    const body = document.createElement('div');
    body.className = 'box';
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
    if(type == 'post') {
        
        const text = document.createElement('p');
        text.className = 'text';
        console.log(bodycontent.text);
        text.innerText = bodycontent.text;
        const tags = document.createElement('div');
        tags.className = 'tags'
        tags.innerText = bodycontent.tags;
        const image = document.createElement('img');
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
        const footer = document.createElement('div');
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
            document.getElementsByClassName('likes')[0].classList.toggle('blue');
            document.getElementsByClassName('likes')[1].classList.toggle('blue');
            if(document.getElementsByClassName('likes')[1].classList.contains('blue')) {
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
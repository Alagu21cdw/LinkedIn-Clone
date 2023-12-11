

export const createProfilepic = ({path}) =>{
    const image = document.createElement('img');
    image.className = 'profile';
    image.src = path;
    return image;
}

/**
 * creating profile pic
 * @param {*} param0 
 * @returns 
 */
export const createProfilepic = ({path}) =>{
    const image = document.createElement('img');
    image.className = 'profile';
    image.setAttribute('alt','profile image');
    image.src = path;
    return image;
}





export const createFeatureimage = ({data}) => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    const image = document.createElement('img');
    image.src = data.image;
    image.className = 'feature-image';
    const imageTitle = document.createElement('h1');
    imageTitle.className = 'image-title';
    imageTitle.innerText = data.title;
    const imageDescription = document.createElement('p');
    imageDescription.className = 'image-description';
    imageDescription.innerText = data.description;
    imageContainer.appendChild(imageTitle)
    imageContainer.appendChild(imageDescription);
    imageContainer.appendChild(image);
    return imageContainer;

    
}
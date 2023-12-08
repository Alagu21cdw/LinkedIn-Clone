import './profile.css';

export const createProfile = ({
    personName, description, imageLink, locationName, phone
}) => {
    const container = document.createElement('div');
    container.className = ['container'];
    const top = document.createElement('div');
    top.className = ['top'];
    const person = document.createElement('div');
    person.className = ['person'];
    const name = document.createElement('div');
    name.innerText = personName
    name.className = ['name'];
    const image = document.createElement('img');
    image.src = imageLink;
    image.className = ['image'];
    const details = document.createElement('div');
    details.className = ['details'];
    details.innerText = description;
    const bottom = document.createElement('bottom');
    bottom.className = ['bottom'];
    const location = document.createElement('div');
    location.className = ['location'];
    location.innerText = locationName;
    const icons = document.createElement('div');
    icons.className = ['icon-list'];
    const item = document.createElement('div');
    item.className = ['item'];
    const icon = document.createElement('div');
    icon.className = ['icon'];
    icon.innerText = '☎';
    const value = document.createElement('div');
    value.className = ['value'];
    value.innerText = phone;
    person.appendChild(name).appendChild(image);
    top.appendChild(person).appendChild(details);
    item.appendChild(icon).appendChild(value);
    icons.appendChild(item);
    bottom.appendChild(location).appendChild(icons);
    container.appendChild(top).appendChild(bottom);
    return container;



}


{/* <div class="container">
        <div class="top">
            <div class="person">
                <div class="name">Alagu Bala</div>
                <img src="../alagu/daniel.jpg" alt="" height="100" width="100">
            </div>
            <div class="details">
                UI/UX developer, web designer, mobile app developer, backend geek
            </div>
        </div>
        <div class="bottom">
            <div class="location">Los Angels, California</div>
            <div class="icon-list">
                <div class="item">
                    <div class="icon">@</div>
                    <div class="value">89761249371</div>
                </div>
                <div class="item">
                    <div class="icon">@</div>
                    <div class="value">89761249371</div>
                </div>
            </div>
        </div>
    </div> */}
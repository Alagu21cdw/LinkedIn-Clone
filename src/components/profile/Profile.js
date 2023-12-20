import ProfilepicStories from "../../stories/Profilepic.stories.js";
import { createNumber } from '../number/Number.js';
import ButtonStories, { Hallow, normal } from "../../stories/Button.stories.js";
import { HOME } from "../../constants/Home.constants.js";




/**
 * creating profile
 * @param {*} param0 
 * @returns 
 */
export const createProfile = ({profile}) => {
    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';
    const profileHeader = document.createElement('header');
    profileHeader.className = 'profile-header';
    const profileName = document.createElement('h1');
    profileName.className = 'profile-name';
    profileName.innerText = profile.name;
    const profilePicture = ProfilepicStories.render(profile);
    profilePicture.classList.add('profile-picture')
    const description = document.createElement('p');
    description.className = 'profile-description';
    description.innerText = profile.description;
    profileHeader.appendChild(profileName);
    profileHeader.appendChild(profilePicture);
    profileContainer.appendChild(profileHeader);
    profileContainer.appendChild(description);
    const profileFooter = document.createElement('div');
    profileFooter.className = 'profile-footer';
    const profileLocation = document.createElement('h5');
    profileLocation.className = 'profile-location';
    profileLocation.innerText = profile.location;
    const more = document.createElement('i');
    more.className = 'fa fa-solid fa-ellipsis-vertical more';
    more.setAttribute('tabindex','1')
    more.addEventListener('keypress',() => {
        document.getElementsByClassName('more-container')[0].classList.add('showmore')
        document.getElementById('overlay').classList.add('show');
    })
    more.addEventListener('click', () => {
        document.getElementsByClassName('more-container')[0].classList.add('showmore')
        document.getElementById('overlay').classList.add('show');
    })
    profileFooter.appendChild(profileLocation);
    profileFooter.appendChild(more);
    profileContainer.appendChild(profileFooter);
    const numberContainer = document.createElement('div');
    numberContainer.className = 'numbercontainer';
    const connection = document.createElement('div');
    connection.className = 'connection';
    connection.appendChild(createNumber(profile.connection));
    const followers = document.createElement('div');
    followers.className = 'followers';
    followers.appendChild(createNumber(profile.followers));
    numberContainer.appendChild(connection);
    numberContainer.appendChild(followers);
    profileContainer.appendChild(numberContainer);
    const phone = document.createElement('div');
    phone.className = 'info-list';
    const email = document.createElement('div');
    email.className = 'info-list';
    const linkedIn = document.createElement('div');
    linkedIn.className = 'info-list';
    const behanceList = document.createElement('div');
    behanceList.className = 'info-list';
    const skypeIcon = document.createElement('div');
    skypeIcon.className = 'info-list';
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'fa-solid fa-phone info-icon';
    const phoneNumber = document.createElement('h2');
    phoneNumber.innerText = profile.phonenumber;
    phoneNumber.className = 'info-text';
    const emailIcon = document.createElement('i');
    emailIcon.className = 'fa-solid fa-envelope info-icon';
    const emailid = document.createElement('h2');
    emailid.innerText = profile.emailid;
    emailid.className = 'info-text';
    const linkedInIcon = document.createElement('i');
    linkedInIcon.className = 'fa-brands fa-linkedin info-icon';
    const linkedinid = document.createElement('h2');
    linkedinid.innerText = profile.linkedinid;
    linkedinid.className = 'info-text';
    const behance = document.createElement('i');
    behance.className = 'fa-brands fa-behance info-icon';
    const behanceid = document.createElement('h2');
    behanceid.innerText = profile.behanceid;
    behanceid.className = 'info-text';
    const skype = document.createElement('i');
    skype.className = 'fa-brands fa-skype info-icon';
    const skypeid = document.createElement('h2');
    skypeid.innerText = profile.skypeid;
    skypeid.className = 'info-text';
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);
    profileContainer.appendChild(phone);
    email.appendChild(emailIcon);
    email.appendChild(emailid);
    profileContainer.appendChild(email);
    email.appendChild(emailIcon);
    email.appendChild(emailid);
    profileContainer.appendChild(email);
    linkedIn.appendChild(linkedInIcon);
    linkedIn.appendChild(linkedinid);
    profileContainer.appendChild(linkedIn);
    behanceList.appendChild(behance);
    behanceList.appendChild(behanceid);
    profileContainer.appendChild(behanceList);
    skypeIcon.appendChild(skype);
    skypeIcon.appendChild(skypeid);
    profileContainer.appendChild(skypeIcon);
    const premiumBtn = ButtonStories.render(Hallow.args);
    premiumBtn.classList.add('edit-button');
    premiumBtn.innerText = 'Edit Profile';
    profileContainer.appendChild(premiumBtn);
    const access = document.createElement('h3');
    access.className = 'access-text';
    access.innerText = HOME.ACCESSTEXT;
    profileContainer.appendChild(access);
    const tryPremium = ButtonStories.render(normal.args);
    tryPremium.classList.add('premium-button');
    tryPremium.innerText = 'Try premium for free'
    profileContainer.appendChild(tryPremium);
    return profileContainer;
    

}
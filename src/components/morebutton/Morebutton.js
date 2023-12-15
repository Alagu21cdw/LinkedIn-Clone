


/**
 * creating more button
 * @returns 
 */
export const createMorebutton = () => {
    const morecontainer = document.createElement('div');
    morecontainer.className = 'more-container';
    const triangle = document.createElement('i');
    triangle.className = 'fa-solid fa-caret-up more-arrow';
    const morelist = document.createElement('div');
    morelist.className = 'more-list';
    const phone = document.createElement('div');
    phone.className = 'info-list more-item';
    const email = document.createElement('div');
    email.className = 'info-list more-item';
    const linkedIn = document.createElement('div');
    linkedIn.className = 'info-list more-item';
    const behanceList = document.createElement('div');
    behanceList.className = 'info-list more-item';
    const skypeIcon = document.createElement('div');
    skypeIcon.className = 'info-list more-item';
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'fa-solid fa-share info-icon more-icon';
    const phoneNumber = document.createElement('h2');
    phoneNumber.innerText = 'Send profile in a message';
    phoneNumber.className = 'info-text more-text';
    const emailIcon = document.createElement('i');
    emailIcon.className = 'fa-solid fa-download info-icon more-icon'; 
    const emailid = document.createElement('h2');
    emailid.innerText = 'Save to PDF';
    emailid.className = 'info-text more-text';
    const linkedInIcon = document.createElement('i');
    linkedInIcon.className = 'fa-solid fa-eye-slash info-icon more-icon'; 
    const linkedinid = document.createElement('h2');
    linkedinid.innerText = 'Hide profile';
    linkedinid.className = 'info-text more-text';
    const behance = document.createElement('i');
    behance.className = 'fa-solid fa-circle-exclamation info-icon more-icon'; 
    const behanceid = document.createElement('h2');
    behanceid.innerText = 'About this profile';
    behanceid.className = 'info-text more-text';
    const skype = document.createElement('i');
    skype.className = 'fa-solid fa-trash info-icon more-icon'; 
    const skypeid = document.createElement('h2');
    skypeid.innerText = 'Delete profile';
    skypeid.className = 'info-text more-text';
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);
    morelist.appendChild(phone);
    email.appendChild(emailIcon);
    email.appendChild(emailid);
    morelist.appendChild(email);
    email.appendChild(emailIcon);
    email.appendChild(emailid);
    morelist.appendChild(email);
    linkedIn.appendChild(linkedInIcon);
    linkedIn.appendChild(linkedinid);
    morelist.appendChild(linkedIn);
    behanceList.appendChild(behance);
    behanceList.appendChild(behanceid);
    morelist.appendChild(behanceList);
    skypeIcon.appendChild(skype);
    skypeIcon.appendChild(skypeid);
    morelist.appendChild(skypeIcon);
    morecontainer.appendChild(triangle);
    morecontainer.appendChild(morelist);
    return morecontainer;
    
}
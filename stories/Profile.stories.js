import { createProfile } from "./Profile";


export default {
    title: 'LinkedIn/Profile',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
      return createProfile({ label, ...args });
    },
    argTypes: {
      personName: { control: 'text' },
      description: { control: 'text' },
      imageLink: { control: 'text' },
      locationName: { control: 'text' },
      phone: { control: 'text' }
    },
  };
  
  export const nijin = {
    args: {
        personName: 'Nijin Vinodhan',
        description: 'UI/UX Developer BU Head',
        imageLink: '../stories/daniel.jpg',
        locationName: 'Salem, TamilNadu',
        phone: '87132480971'
    },
  };

  export const alagu = {
    args: {
        personName: 'Alagu',
        description: 'Java developer, spring, springboot, Microservices',
        imageLink: '../stories/daniel.jpg',
        locationName: 'Chennai, TamilNadu',
        phone: '87132480971'
    },
  };
import { createHamburger } from "../components/hamburger/Hamburger.js";

export default {
    title: 'LinkedIn/Hamburger',
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    render: ({...args}) => createHamburger({...args}),
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      navtitle: {control: 'text'}
    },
  };
  
  export const home = {
    args:{
      navtitle: 'Home'
    }
  }

  export const profile = {
    args:{
      navtitle: 'Profile'
    }
  }

  export const message = {
    args:{
      navtitle: 'Message'
    }
  }
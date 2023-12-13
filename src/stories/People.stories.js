import { createPeople } from "../components/people/People.js";


export default {
    title: 'LinkedIn/People',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createPeople({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const people = {
    args: {
        
    }
  }

import { createPostheader } from "../components/postheader/Postheader.js";

export default {
    title: 'LinkedIn/PostHeader',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createPostheader({  ...args });
    },
    argTypes: {
      path: { control: 'text' }
    },
  };

  export const post = {
    args: {
        content: {
            name: 'Alagu',
            designation: 'Backend developer',
            time: '1 min'
        }
    },
  };

  export const heading = {
    args: {
        content: 'About'
    },
  };
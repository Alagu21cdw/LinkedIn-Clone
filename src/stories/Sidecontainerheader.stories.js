import { createSidecontainerheader } from "../components/sidecontainerheader/Sidecontainerheader.js";

export default {
    title: 'LinkedIn/Sidecontainerheader',
    tags: ['autodocs'],
    render: ({ ...args }) => {
      // You can either use a function to create DOM elements or use a plain html string!
      // return `<div>${label}</div>`;
      return createSidecontainerheader({ ...args });
    },
    argTypes: {
      container: { control: 'text' },
      title: { control: 'text' }
    },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const people = {
    args: {
      container: 'people',
      containertitle: 'People You May Know'
    },
  };

  export const analytics = {
    args: {
      container: 'analytics',
      containertitle: 'Analytics'
    },
  };

  export const tools = {
    args: {
      container: 'Skills',
      containertitle: 'Skills'
    },
  };
 
  
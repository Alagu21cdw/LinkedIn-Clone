import { createSnip } from "../components/snip/Snip.js";

export default {
    title: 'LinkedIn/Snip',
    tags: ['autodocs'],
    render: ({ ...args }) => {
      // You can either use a function to create DOM elements or use a plain html string!
      // return `<div>${label}</div>`;
      return createSnip({ ...args });
    },
    argTypes: {
        name: { control: 'text' },
        endorsement: { control: 'text' }
    },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const language = {
    args: {
      name: 'English',
      endorsement: ''
    },
  };

  export const skill = {
    args: {
      name: '#ui/ux',
      endorsement: '1'
    },
  };
 
  
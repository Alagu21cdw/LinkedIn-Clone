import { createButton } from "../components/button/Button.js";

export default {
    title: 'LinkedIn/Button',
    tags: ['autodocs'],
    render: ({ ...args }) => {
      // You can either use a function to create DOM elements or use a plain html string!
      // return `<div>${label}</div>`;
      return createButton({ ...args });
    },
    argTypes: {
      label: { control: 'text' },
      primary: { control: 'boolean' },
      size: {
        control: { type: 'select' },
        options: ['small', 'big'],
      },
    },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Hallow = {
    args: {
      primary: true,
      size: 'small',
      label: 'Connect'
    },
  };

  export const normal = {
    args: {
      primary: false,
      size: 'big',
      label: 'Premium',
    },
  };
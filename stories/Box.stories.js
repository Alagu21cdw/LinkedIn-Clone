import { createBox } from "./Box";

export default {
    title: 'LinkedIn/Box',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
      return createBox({ label, ...args });
    },
    argTypes: {
      color: { control: 'color' },
      label: { control: 'text' },
      size: {
        control: { type: 'select' },
        options: ['small', 'big'],
      },
    },
  };
  
  export const boxOne = {
    args: {
      color: 'pink',
      label: 'Box 1',
      size: 'small'
    },
  };

  export const boxTwo = {
    args: {
      color: 'blue',
      label: 'Box 2',
      size: 'big'
    },
  };
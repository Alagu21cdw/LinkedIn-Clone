import { createNumber } from "../components/number/Number.js";

export default {
    title: 'LinkedIn/Number',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createNumber({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const number = {
    args: {
        numberInfo: {
            number: 123,
            text: 'Posts views'
        }
    },
  };
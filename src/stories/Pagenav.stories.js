import { createPagenav } from "../components/pagenav/Pagenav.js";




export default {
    title: 'LinkedIn/Pagenav',
    tags: ['autodocs'],
    render: ({ ...args }) => {
      return createPagenav({ ...args });
    },
    argTypes: {
      listItems: { control: 'text' }
    },
  };

  export const home = {
    args: {
        listItems: []
    },
  };

  export const profile = {
    args: {
        listItems: ["My profile","Posts","Articles","Documents"]
    },
  };
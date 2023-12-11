import { createSearchbar } from "../components/searchbar/Searchbar.js";


export default {
    title: 'LinkedIn/Search',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
      return createSearchbar({ label, ...args });
    },
    argTypes: {
      isMessage: { control: 'boolean' },
    },
  };
  
  export const search = {
    args: {
        isMessage: true
    },
  };
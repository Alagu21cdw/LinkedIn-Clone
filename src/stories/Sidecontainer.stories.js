import { createSidecontainer } from "../components/sidecontainer/Sidecontainer.js";

export default {
    title: 'LinkedIn/Sidecontainer',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createSidecontainer({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const sideContainer = {
    args: {
        container: 'groups',
        containertitle: 'My groups',
        snips: [
                {
                    name: 'English',
                    endorsement: '1'
                },
                {
                    name: 'German',
                    endorsement: '12'
                },
                {
                    name: 'Russian',
                    endorsement: '10'
                },
                {
                    name: 'Russian',
                    endorsement: '10'
                },
                {
                    name: 'Russian',
                    endorsement: '10'
                },
                {
                    name: 'Russian german',
                    endorsement: '10'
                },
                {
                    name: 'Russian',
                    endorsement: '10'
                },
            ],
    },
  };
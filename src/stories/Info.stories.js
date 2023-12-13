import { createInfo } from "../components/info/Info.js";

export default {
    title: 'LinkedIn/Info',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createInfo({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const people = {
    args: {
        info: {
            name: 'Alagu',
            description: 'Backend Developer',
            path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg',
            location: 'bombay'
        }
    },
  };
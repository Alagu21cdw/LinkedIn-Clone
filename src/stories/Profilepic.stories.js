import { createProfilepic } from "../components/profilepic/Profilepic.js";


export default {
    title: 'LinkedIn/Profilepic',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
      return createProfilepic({ label, ...args });
    },
    argTypes: {
      path: { control: 'text' }
    },
  };

  export const tree = {
    args: {
        path: 'https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=1920x1080'
    },
  };

  export const sea = {
    args: {
        path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg'
    },
  };
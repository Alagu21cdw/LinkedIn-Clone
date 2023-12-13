import { createFeatureimage } from "../components/featureimage/Featureimage.js";



export default {
    title: 'LinkedIn/FeatureImage',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createFeatureimage({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const feature = {
    args: {
        data: {
            text: "Dribble",
            description: "Dribble.com",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
    
        }
    },
  };
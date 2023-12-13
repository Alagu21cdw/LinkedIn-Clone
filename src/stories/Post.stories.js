import { createPost } from "../components/post/post.js";


export default {
    title: 'LinkedIn/Post',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createPost({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const post = {
    args: {
        bodycontent: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
            tags: "#Tech #Spring",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
            counts: {
                likes: 209,
                comments: 812,
                shares: 912
            },
            content: {
                name: 'Bala',
                designation: 'Backend developer',
                time: '1 min',
                path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
            }
        },
        type: 'post'
    },
  };

  export const postwithoutimage = {
    args: {
      bodycontent: {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
        tags: "#Tech #Spring",
        image: "",
        counts: {
            likes: 209,
            comments: 812,
            shares: 912
        },
        content: {
            name: 'Bala',
            designation: 'Backend developer',
            time: '1 min',
            path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
        }
    },
    type: 'post'
    }
  }

  export const postwithouttags = {
    args: {
      bodycontent: {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
        tags: "",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
        counts: {
            likes: 209,
            comments: 812,
            shares: 912
        },
        content: {
            name: 'Bala',
            designation: 'Backend developer',
            time: '1 min',
            path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
        }
    },
    type: 'post'
    }
  }

  export const newpost = {
    args: {
        bodycontent: {
            content: 'Start a new post'
        },
        type: 'newpost'
    },
    };

    export const about = {
      args: {
        bodycontent: {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
          content: 'About'
          },
          type: 'about'
      },
      };

      export const feature = {
        args: {
          bodycontent: {
            featureImage: [
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribbleeeeeeeeeeeeeeeeeeeeeeeee",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
              {
                data: {
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
                  title: "Dribble",
                  description: "Driblle.com"
                }
              },
            ],
            content: 'Featured'
            },
            type: 'feature'
        },
        };
        export const para = {
          args: {
              bodycontent: {
                  paraContent: [
                    {
                    para: {
                      title: "World of computers",
                      location: "New York",
                      from: "sep 2023",
                      to: "present",
                      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
                  }},
                  {
                    para: {
                      title: "World of computers",
                      location: "New York",
                      from: "sep 2023",
                      to: "present",
                      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
                  }}
                  ],
                  content: 'Experience'
              },
              type: 'para'
          },
          };
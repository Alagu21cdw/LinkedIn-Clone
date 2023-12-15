import { createProfile } from "../components/profile/Profile.js";

export default {
    title: 'LinkedIn/Profile',
    tags: ['autodocs'],
    render: ({  ...args }) => {
      return createProfile({  ...args });
    },
    argTypes: {
      // path: { control: 'text' }
    },
  };

  export const profile = {
    args: {
        profile: {
            name: "Alagu",
            path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwa4_Ys2cA9xaOC1iHNFIPrQw85LF8Bd_zhkKVB2GhH9eRw1AjtmFiA4TKqkTuZUtWaTTaIqjr-vrG8gWDoK-Y9UOakjRenTxLb58kqgeR96M-OOqj97V67CVRnNxUzt8QAQFH0npSiqStPtsY3SBcHx7berJKnzTCf5oNbIgbYCiNPafLMu_61M/s1600/difference-between-sea-and-ocean-Studyprobe.jpg",
            description: "Backend developer UI/UX microservices spring springboot",
            connection: {
                numberInfo: {
                    number: 123,
                    text: 'Connections'
                }
            },
            followers: {
                numberInfo: {
                    number: 123,
                    text: 'followers'
                }
            },
            location: 'london',
            phonenumber: '9218389712',
            emailid: 'alagubalu@gmail.com',
            linkedinid: 'alagulinked.com',
            behanceid: 'alagubehance.com',
            skypeid: 'alaguskype.com'
        }
    },
  };
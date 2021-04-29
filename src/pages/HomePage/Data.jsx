import Face from '../../images/face.jpg'
import Coding from '../../images/coding.PNG'
import Stardew from '../../images/sdv.png'

import {Text, NewLine} from '../../components/InfoSection/InfoSectionElems'

export const sectionData = [
  {
    title: "Hello!",
    description: "Hello, and welcome! My name is Winston, and I'm currently a Grade 11 student at Bethune!",
    img: Face,
  },
  {
    title: "Hobbies",
    description: <><Text>In my free time, I enjoy programming and playing games.</Text><NewLine></NewLine><Text>This month, I have been programming a lot in React. I have spent a lot of time trying to create a modern, mobile-friendly, and responsive website. One such website it the one you are currently viewing (source code <a href="https://github.com/Winswins22/English-Portfolio">here</a>), and another website can be found here:</Text> <Text> <a href="https://bethune-computer-science-club.github.io/club-website/">https://bethune-computer-science-club.github.io/club-website/</a> <NewLine></NewLine> </Text><Text>I have also spent a couple of years on competitive programming, where you try to solve coding challenges in a very short amount of time.</Text></>,
    img: Coding,
  },
  {
    description: "Recently, I have been playing a lot of Stardew Valley. It is a very relaxing farming game, with some strategy and skill behind it. You can also play with other people!",
    img: Stardew,
  },

]
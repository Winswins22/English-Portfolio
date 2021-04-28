import Movie from '../../images/movie.jpg'
import Books from '../../images/books.jpg'
import Plays from '../../images/plays.jpg'
import Microphone from '../../images/microphone.jpg'
import Book from '../../images/book.jpg'

import {Text} from '../../components/InfoSection/InfoSectionElems'

export const sectionData = [
  {
    title: "Sources",
    description: "Below are a bunch of sources for images used in this website.",
  },
  {
    description: <Text> Book Sale Haul by byzantiumbooks at <a href="https://www.flickr.com/photos/10688882@N00/29168064471">https://www.flickr.com/photos/10688882@N00/29168064471</a></Text>,
    img: Books,
  },
  {
    description: <Text>Movie Theatre by Roey Ahram at <a href="https://www.flickr.com/photos/16853894@N00/6858584861">https://www.flickr.com/photos/16853894@N00/6858584861</a></Text>,
    img: Movie,
  },
  {
    description: <Text>The girls watching Ponyo @ the backyard movie theatre by jason gessner at <a href="https://www.flickr.com/photos/47434837@N00/4939810895">https://www.flickr.com/photos/47434837@N00/4939810895</a></Text>,
    img: Plays,
  },
  {
    description: <Text>Microphone by David Patrick at <a href="https://www.flickr.com/photos/82027065@N00/149366554">https://www.flickr.com/photos/82027065@N00/149366554</a></Text>,
    img: Microphone,
  },
  {
    description: <Text>Open book by Honou at <a href="https://www.flickr.com/photos/9186550@N08/2936937247">https://www.flickr.com/photos/9186550@N08/2936937247</a></Text>,
    img: Book,
  },
]

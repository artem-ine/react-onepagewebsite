import { PrismicRichText, useSinglePrismicDocument, PrismicImage } from '@prismicio/react'
import './Components.css'

function Home() {
  const [document] = useSinglePrismicDocument('home')
  console.log(document?.data)

    return (
      <div>
          <PrismicRichText field={document?.data.homepage} />
          <PrismicImage field={document?.data.home_image}  imgixParams={{ sat: -30 }} className="home-image"/>
      </div>
    )
  }
    
  export default Home;
  
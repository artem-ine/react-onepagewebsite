import { PrismicRichText, useFirstPrismicDocument, PrismicImage } from '@prismicio/react'

function Home() {
    const [document] = useFirstPrismicDocument()

    return (
      <div>
          <PrismicRichText field={document?.data.homepage} />
          <PrismicImage field={document?.data.home_image}  imgixParams={{ sat: -30 }} />
      </div>
    )
  }
    
  export default Home;
  
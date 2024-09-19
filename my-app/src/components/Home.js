import { PrismicRichText, useFirstPrismicDocument, PrismicImage } from '@prismicio/react'

function Home() {
    const [document] = useFirstPrismicDocument()

    return (
      <div>
        {document && (
          <PrismicRichText field={document.data.homepage} />
        )}
      </div>
    )
  }
    
  export default Home;
  
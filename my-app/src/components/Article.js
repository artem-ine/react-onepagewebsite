import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'

function Article() {
const [document] = usePrismicDocumentByUID('article', 'lorem-ipsum')

    return (
      <div>
        <PrismicRichText field={document?.data.title} />
        <PrismicRichText field={document?.data.description} />
        <PrismicImage field={document?.data.image}  imgixParams={{ sat: -30 }} />
      </div>
    )
  }
    
  export default Article;
  
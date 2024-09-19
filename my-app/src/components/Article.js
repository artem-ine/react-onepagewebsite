import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'

function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid)
          console.log(document?.data.date)


    return (
      <div>
        <PrismicRichText field={document?.data.title} />
        <PrismicRichText field={document?.data.description} />
        <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} />
        <p>{document?.data.date}</p>
      </div>
    )
  }
    
  export default Article;
  
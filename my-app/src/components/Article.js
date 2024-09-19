import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';

function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid)

    return (
      <div>
        <PrismicRichText field={document?.data.title} />
        <PrismicRichText field={document?.data.description} />
        <PrismicImage field={document?.data.image}  imgixParams={{ sat: -30 }} />
      </div>
    )
  }
    
  export default Article;
  
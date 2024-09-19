import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'


function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid);
  const image = document?.data.image
  const formattedImage = prismicH.asImageWidthSrcSet(image)
  console.log(formattedImage)

    return (
      <div>
        <PrismicRichText field={document?.data.title} />
        <PrismicRichText field={document?.data.description} />
        {/* <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} /> */}
        {/* <img src={formattedImage.src} alt="dog"/> */}
        <p>{document?.data.date}</p>
      </div>
    )
  }
    
  export default Article;
  
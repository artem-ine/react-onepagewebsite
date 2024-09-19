import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import serializer from '../utils/Serializer';
import PigLatin from "pig-latinizer"



function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid);

  const image = document?.data.image
  const formattedImage = prismicH.asImageWidthSrcSet(image)
  console.log(formattedImage)

  const pigLatin = new PigLatin();
  const titleText = document?.data?.title ? prismicH.asText(document.data.title) : '';
  const pigLatinTitle = titleText ? pigLatin.translate(titleText) : '';

    return (
      <div>
        <h1>{pigLatinTitle}</h1>
        <PrismicRichText field={document?.data.description} components={serializer} />
        {/* <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} /> */}
        {/* <img src={formattedImage.src} alt="dog"/> */}
        <p>{document?.data.date}</p>
      </div>
    )
  }
    
  export default Article;
  
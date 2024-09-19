import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import PigLatin from "pig-latinizer"



function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid);
  const image = document?.data.image
  const formattedImage = prismicH.asImageWidthSrcSet(image)
  console.log(formattedImage)
  
  const pigLatin = new PigLatin();
  
  
  const serializer = {
    heading2: ({ children }) => {
      const text = children.join(' ');
      const pigLatinText = pigLatin.translate(text);
      return <h2>{pigLatinText}</h2>;
    },
    preformatted: ({ children }) => {
      return <code>{children}</code>;
    }
  };
  
  
  return (
    <div>
    <PrismicRichText field={document?.data.title} components={serializer}/>
    <PrismicRichText field={document?.data.description} components={serializer}/>
    {/* <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} /> */}
    {/* <img src={formattedImage.src} alt="dog"/> */}
    <p>{document?.data.date}</p>
    </div>
  )
}

export default Article;

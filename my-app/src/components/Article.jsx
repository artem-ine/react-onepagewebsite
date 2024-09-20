import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import './Article.css'


function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid);
  const image = document?.data.image
  const formattedImage = prismicH.asImageWidthSrcSet(image)
  console.log(formattedImage)
  
  const toPigLatin = (text) => {
    return text.split(' ').map(word => {
      const firstVowelIndex = word.search(/[aeiouAEIOU]/);
      if (firstVowelIndex === 0) {
        return word + 'way'; 
      }
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay'; 
    }).join(' ');
  };
  
  
  const serializer = {
    heading2: ({ children }) => {
      console.log("children: ", children)
      const titleAsText = prismicH.asText(children)
      const pigLatinContent = toPigLatin(titleAsText);
      console.log(pigLatinContent)
      return <h1>{pigLatinContent}</h1>;
    },
    preformatted: ({ children }) => {
      // console.log("pre children: ", children)
      return <code>{children}</code>;
    }
  };
  
  
  return (
    <div>
    <PrismicRichText field={document?.data.title} components={serializer}/>
    <PrismicRichText field={document?.data.description} components={serializer}/>
    <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} className='article-image' />
    {/* <img src={formattedImage.src} alt="dog"/> */}
    <p>{document?.data.date}</p>
    </div>
  )
}

export default Article;

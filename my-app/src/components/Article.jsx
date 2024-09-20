import { PrismicRichText, usePrismicDocumentByUID, PrismicImage } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import './Components.css'


function Article() {
  const { uid } = useParams();
  const [document] = usePrismicDocumentByUID('article', uid);
  
  const serializer = {
    heading2: ({ children }) => {
      return <h2>{ children }</h2>;
    },
    preformatted: ({ children }) => {
      return <code>{ children }</code>;
    }
  };
  
  
  return (
    <div>
    <PrismicRichText field={document?.data.title} components={serializer} />
    <PrismicRichText field={document?.data.description} components={serializer}/>
    <PrismicImage field={document?.data.image} imgixParams={{ sat: -30 }} className='article-image' />
    <p>{document?.data.date}</p>
    </div>
  )
}

export default Article;

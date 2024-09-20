import React from "react";
import { Link } from "react-router-dom";
import { useAllPrismicDocumentsByType, useSinglePrismicDocument } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";


const Navbar = () => {

  const [doc] = useSinglePrismicDocument('home')
  const [articles] = useAllPrismicDocumentsByType('article')
  console.log(articles)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><PrismicRichText field={doc?.data?.homepage}/></Link>
        </li>
        {articles?.map((art) => (
          <li key={art.id}>
            <Link to={`/article/${art.uid}`}><PrismicRichText field={art?.data?.title}/></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
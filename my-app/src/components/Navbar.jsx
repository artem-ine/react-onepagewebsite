import React from "react";
import { Link } from "react-router-dom";
import { useSinglePrismicDocument, usePrismicDocumentByUID } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from '@prismicio/react'

const Navbar = () => {

  const [document] = useSinglePrismicDocument('navigation')
console.log(document?.data.test_article);


  return (
    <nav>
      <ul>
        <li>
          <PrismicLink field={document?.data.home_link}>Home</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.first_article}>Lorem Ipsum</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.second_article}>Sed Ut</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.third_article}>At Vero</PrismicLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
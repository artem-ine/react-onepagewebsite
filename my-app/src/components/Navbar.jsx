import React from "react";
import { Link } from "react-router-dom";
import { useSinglePrismicDocument } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from '@prismicio/react'

const Navbar = () => {

  const [document] = useSinglePrismicDocument('navbar')

  return (
    <nav>
      <ul>
        <li>
          <PrismicLink field={document?.data.home_link}>Home</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.article_links.first_article}>Lorem Ipsum</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.article_links.second_article}>Sed Ut</PrismicLink>
        </li>
        <li>
          <PrismicLink field={document?.data.third_article}>At Vero</PrismicLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
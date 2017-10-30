// Gallery
import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import OL from 'elements/OL'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import A from 'elements/A'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iGallery from './img/gallery.png'

const RA03Gallery = (props) => {
  return (
    <div>
      <PageTitle title='Making the Gallery' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will create a Gallery component as shown below.</P>
        <Img src={iGallery} medium alt='gallery step 01' />
      </Section>
      <Section title='Requirements' level={1}>
        Header must meet the these requirements:
        <UL>
          <LI>Will have a element <InlineTag angle>h2</InlineTag> element with the text 'Our Fresh Meals'</LI>
          <LI>Will display all menu items from /src/menu-data.js</LI>
          <LI>Each menu item will have a picture, a title, the description and price.</LI>
          <LI>Create two components Gallery &amp; GalleryItem</LI>
        </UL>
      </Section>
      <Section title='Tips' level={1}>
        <Hint>
          <p>When you import menu-data.js it will be an array.</p>
        </Hint>
        <Hint>
          <p>Use <A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>Arrray.Map()</A> to loop through the data and render the individual menu items.</p>
        </Hint>
        <Hint>
          <p>Create a MenuItem component to render an individual menu item.</p>
        </Hint>
      </Section>

      <Section title='Structure & Styling' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for Gallery'>
          <Pre
            code={[
              "<div className='gallery'>",
              "  <h2>Our Fresh Meals</h2>",
              "  <div className='gallery-items'>",
              "    {renderItems}",
              "  </div>",
              "</div>",
            ]}
          />
        </Hint>
        <Hint title='CSS for Gallery'>
          <Pre
            code={[
              ".gallery-items {",
              "  display: flex;",
              "  flex-flow: row wrap;",
              "}",
              ".gallery h2 {",
              "  text-align: center;",
              "}",
            ]}
          />
        </Hint>
        <Hint title='JSX for GalleryItem'>
          <Pre
            code={[
              "<div className='gallery-item'>",
              "  <img className='gallery-image img-responsive' src={image} />",
              "  <div className='gallery-title'>{title}</div>",
              "  <div className='gallery-description'>{description}</div>",
              "  <div className='gallery-price'>{price}</div>",
              "</div>",
            ]}
          />
        </Hint>
        <Hint title='CSS for GalleryItem'>
          <Pre
            code={[
              ".gallery-item {",
              "  display: flex;",
              "  flex-flow: column nowrap;",
              "  align-items: center;",
              "  max-width: 80%;",
              "  margin: 30px auto 30px auto;",
              "}",
              ".gallery-title {",
              "  font-size: 1.2em;",
              "  font-weight: bold;",
              "  padding: 3px;",
              "}",
              ".gallery-description {",
              "  padding: 3px;",
              "}",
              ".gallery-image {",
              "  max-height: 200px;",
              "}",
            ]}
          />
        </Hint>
      </Section>
    </div>
  )
};

export default RA03Gallery;
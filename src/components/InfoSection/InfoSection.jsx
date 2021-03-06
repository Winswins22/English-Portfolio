import React, {useEffect} from 'react'
import {
  Img,
  ItemWrapper,
  InfoSectionWrapper,
  HeadingText,
  Text,
  HorizontalSpacing,
} from './InfoSectionElems'

import Placeholder from '../../images/placeholder.png'

import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = ({title="", description="", img="", alt="Placeholder alt text"}) => {

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <InfoSectionWrapper>

        <ItemWrapper data-aos='fade-right'>
          {
            (title !== "")?
              <HeadingText> {title} </HeadingText>
            :
              <></>
          }

          {
            (description !== "") ? 
              (typeof(description) === 'string') ?
                <Text> {description} </Text>
              :
                <>{description}</>
            :
              <></>
          }
        </ItemWrapper>

        <HorizontalSpacing></HorizontalSpacing>
        
        <ItemWrapper style={{justifyContent:"center"}} data-aos='fade-left'>
          {
            (img !== "") ? 
              <Img alt={alt} src={img}></Img>
            :
              <></>
          }
        </ItemWrapper>

      </InfoSectionWrapper>
    </>
  )
}

export default InfoSection

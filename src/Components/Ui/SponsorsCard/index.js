/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Products from '../../../StaticData/Products';
import DefaultButton from '../DefaultButton';
import {
  Card,
  ViewCard,
  ImageCard,
  Title,
  Price,
  FakeBackground,
} from './styles';

const sliderWidth = 600;
const itemWidth = 300;

function SponsorsCard() {
  const [activeSlide, setActiveSlide] = useState(2);

  function _renderItem({item}) {
    return (
      <Card>
        <ImageCard resizeMode="cover" source={item.imageCard} />
        <ViewCard>
          <Title>{item.name}</Title>
          <Price>{item.price}</Price>
          <DefaultButton title="Add" buttonWidth={140} />
        </ViewCard>
      </Card>
    );
  }

  return (
    <>
      <FakeBackground />
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        inactiveSlideOpacity={1}
        data={Products}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        firstItem={activeSlide}
      />
      <Pagination
        dotsLength={Products.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(250, 250, 250, 0.0)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#f74540',
        }}
        inactiveDotStyle={{
          backgroundColor: '#666',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
}

export default SponsorsCard;

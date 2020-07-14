import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import Products from '../../../StaticData/Products';
import DefaultButton from '../DefaultButton';

const sliderWidth = 600;
const itemWidth = 300;

const Card = styled.View`
  background: #666;
  border-radius: 20px;
  margin-top: 10;
`;

const ViewCard = styled.View`
  width: 80%;
  position: absolute;
  bottom: 0;
  align-self: center;
  margin-bottom: 10;
`;

const ImageCard = styled.Image`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  border-radius: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22;
`;

const Price = styled.Text`
  color: #fecd0a;
  font-weight: bold;
  font-size: 32;
`;

const FakeBackground = styled.View`
  background: #f74540;
  height: 100;
  width: 100%;
  margin-bottom: -100;
`;

function SponsorsCard() {
  const [activeSlide, setActiveSlide] = useState(2);

  function _renderItem({item, index}) {
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
          backgroundColor: '#333',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
}

export default SponsorsCard;

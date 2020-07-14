import * as React from 'react';
import styled from 'styled-components/native';
import Products from '../../../StaticData/Products';

const Card = styled.View`
  max-width: 200;
  margin-bottom: 10;
  padding-top: 10;
  padding-bottom: 10;
  background: #ffffff;
`;

const ImageView = styled.Image`
  width: 150;
  height: 150;
  margin-left: 5;
  margin-right: 5;
  align-self: center;
  background: white;
`;

const ProductName = styled.Text`
  font-weight: bold;
  align-self: center;
`;

const ProductPrice = styled.Text`
  color: #f74540;
  align-self: center;
  padding-top: 5;
  padding-bottom: 5;
  font-weight: bold;
`;

const ProductButton = styled.TouchableOpacity`
  border-width: 1;
  border-radius: 5px;
  padding-top: 5;
  padding-bottom: 5;
  border-style: solid;
  border-color: #f74540;
  width: 100;
  background: transparent;
  align-self: center;
`;

const ProductButtonText = styled.Text`
  color: #f74540;
  text-align: center;
`;

function ProductCard() {
  return Products.map((product) => {
    return (
      <Card key={product.id}>
        <ImageView resizeMode="cover" source={product.image} width="100px" />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductButton title="ADD">
          <ProductButtonText>ADD</ProductButtonText>
        </ProductButton>
      </Card>
    );
  });
}

export default ProductCard;

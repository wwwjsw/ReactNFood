import React from 'react';
import Products from '../../../StaticData/Products';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const Container = styled.View`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const ContainerImage = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`;

const ContainerActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

const Product = styled.View`
  display: flex;
  align-self: center;
`;

const ProductName = styled.Text`
  font-weight: bold;
`;

const ProductPrice = styled.Text`
  color: #999;
`;

const ProductQuantity = styled.View`
  display: flex;
  flex-direction: row;
`;

const ProductQuantityCounter = styled.Text`
  align-self: center;
`;

const ProductActions = styled.View`
  align-self: center;
`;

const ProductButton = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-style: solid;
  border-color: #f74540;
  width: 70px;
  background: transparent;
  align-self: center;
  margin-bottom: 5px;
`;

const ProductButtonGray = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-style: solid;
  border-color: #999;
  width: 70px;
  background: transparent;
  align-self: center;
  margin-bottom: 5px;
`;

const ProductButtonText = styled.Text`
  color: #f74540;
  text-align: center;
`;

const ProductButtonTextGray = styled.Text`
  color: #999;
  text-align: center;
`;

function PackageItems() {
  return Products.map((product) => {
    return (
      <Container key={product.id}>
        <ContainerImage resizeMode="center" source={product.image} />
        <ContainerActions>
          <Product>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductQuantity>
              <Icon name="plus-circle-outline" size={30} />
              <ProductQuantityCounter>1</ProductQuantityCounter>
              <Icon name="minus-circle-outline" size={30} />
            </ProductQuantity>
          </Product>
          <ProductActions>
            <ProductButton>
              <ProductButtonText>Remover</ProductButtonText>
            </ProductButton>
            <ProductButtonGray>
              <ProductButtonTextGray>Trocar</ProductButtonTextGray>
            </ProductButtonGray>
          </ProductActions>
        </ContainerActions>
      </Container>
    );
  });
}

export default PackageItems;

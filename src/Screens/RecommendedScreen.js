import React from 'react';
import styled from 'styled-components/native';
import DefaultView from '../Components/Utils/DefaultView';
import SearchBar from '../Components/Ui/SearchBar';
import ProductGrid from '../Components/Ui/ProductGrid';
import ProductCategories from '../Components/Ui/ProductCategories';

const Title = styled.Text`
  align-self: center;
  width: 90%;
  text-align: left;
  font-weight: bold;
  margin-top: 10;
  margin-bottom: 10;
`;

export default function HomeScreen() {
  return (
    <DefaultView>
      <Title>Recomendado para você</Title>
      <SearchBar />
      <ProductGrid />
      <ProductCategories />
    </DefaultView>
  );
}

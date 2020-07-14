import React, { useState } from "react";
import { Text } from 'react-native';
import styled from 'styled-components/native';
import ProductCard from '../ProductCard'

function ProductGrid() {

  const ScrollViewProducts = styled.ScrollView`
    height: 100%;
    width: 100%;
  `;
  
  const ViewProducts = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10;
  `;
  return (
    <ScrollViewProducts>
      <ViewProducts>
        <ProductCard />
      </ViewProducts>
    </ScrollViewProducts>
  );
}
export default ProductGrid;
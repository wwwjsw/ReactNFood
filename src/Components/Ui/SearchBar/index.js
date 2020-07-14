import React, {useState} from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

Icon.loadFont();

function ProductGrid() {
  const View = styled.View`
    height: 40;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 5;
    border-radius: 5px;
    border-width: 1;
  `;

  const SearchIcon = styled(Icon)`
    align-self: center;
    width: 10%;
    margin-left: 10;
    color: #f74540;
  `;
  const Input = styled.TextInput`
    width: 90%;
    align-self: center;
  `;
  return (
    <View>
      <SearchIcon name="search" size={22} color="#999" />
      <Input placeholder="Pesquisar produto" numberOfLines={1} />
    </View>
  );
}
export default ProductGrid;

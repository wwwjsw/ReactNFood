import React from 'react';
import {ImageLogo} from './styles';

export default function Logo() {
  return (
    <ImageLogo
      resizeMode="cover"
      source={require('../../../Assets/Images/rn-logo.png')}
    />
  );
}

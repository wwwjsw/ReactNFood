import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Card = styled.View`
  background: #666;
  border-radius: 20px;
  margin-top: 10px;
`;

export const ViewCard = styled.View`
  width: 80%;
  position: absolute;
  bottom: 0;
  align-self: center;
  margin-bottom: 10px;
`;

export const ImageCard = styled.Image`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  border-radius: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export const Price = styled.Text`
  color: #fecd0a;
  font-weight: bold;
  font-size: 32px;
`;

export const FakeBackground = styled.View`
  background: ${Platform.OS === 'ios' ? 'transparent' : '#f74540'};
  height: 100px;
  width: 100%;
  margin-bottom: -100px;
`;

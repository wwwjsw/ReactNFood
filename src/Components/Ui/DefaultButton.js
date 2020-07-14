import React, { Component } from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
  color: #fff;
  font-weight: 700;
  align-self: center;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: #f74540;
  margin-top: 5px;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  elevation: 1;
`;

export default class DefaultButton extends Component {
    render() {
      return (
        <ButtonContainer onPress={this.props.onPress} 
          style={{
            width: this.props.buttonWidth, 
            alignSelf: this.props.alignMe,
          }} >
          <Label>{this.props.title}</Label>
        </ButtonContainer>
       );
    }
}
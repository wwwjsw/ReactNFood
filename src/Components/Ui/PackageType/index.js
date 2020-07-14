import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const BoxPackage = styled.View`
  width: 100%;
  elevation: 1;
  background: #fffffc;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 10;
`;

const PackageName = styled.Text`
  color: #999;
  width: 50%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
  font-size: 22px;
`;

const PackagePicker = styled.View`
  width: 50%;
  border-bottom-right-radius: 10;
  border-top-right-radius: 10;
`;

const PackagePickerTitle = styled.View`
  display: flex;
  flex-direction: row;
`;

const PackageSize = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #222;
  margin-left: 10px;
`;

const PackageDescription = styled.Text`
  margin-left: 28px;
`;

function PackageType() {
  return (
    <BoxPackage
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.14,
        shadowRadius: 10,
        elevation: 2,
      }}>
      <PackageName>Tipo Do Pacote</PackageName>
      <PackagePicker>
        <PackagePickerTitle>
          <Icon name="package-variant-closed" size={18} color="#000" />
          <PackageSize>Pequeno</PackageSize>
        </PackagePickerTitle>
        <PackageDescription>Descrição do pacote</PackageDescription>
      </PackagePicker>
    </BoxPackage>
  );
}

export default PackageType;

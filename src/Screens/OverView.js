import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import DefaultView from '../Components/Utils/DefaultView';
import SponsorsCard from '../Components/Ui/SponsorsCard';
import PackageType from '../Components/Ui/PackageType';
import PackageItems from '../Components/Ui/PackageItems';

const ViewOverview = styled.View`
  width: 100%;
  padding-left: 30;
  padding-right: 30;
`;

const Subtitle = styled.Text`
  color: black;
  font-size: 18;
  text-align: left;
  margin-bottom: 10;
`;

export default function OverviewScreen() {
  return (
    <ScrollView>
      <DefaultView>
        <SponsorsCard />
        <ViewOverview>
          <Subtitle>Meu Pedido</Subtitle>
          <PackageType />
          <PackageItems />
        </ViewOverview>
      </DefaultView>
    </ScrollView>
  );
}

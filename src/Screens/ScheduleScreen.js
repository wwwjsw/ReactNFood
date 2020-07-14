import React from 'react';
import {ScrollView} from 'react-native';
import DefaultView from '../Components/Utils/DefaultView';
import styled from 'styled-components/native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DefaultButton from '../Components/Ui/DefaultButton';

const TitleBox = styled.View`
  width: 100%;
  background: #fff;
  padding-left: 10;
  padding-right: 10;
`;

const Title = styled.Text`
  color: #333;
  font-size: 40;
`;

const TotalBox = styled.View`
  width: 90%;
  margin-top: 20;
  margin-bottom: 20;
  display: flex;
  border-radius: 10px;
  padding-top: 5;
  padding-bottom: 5;
  flex-direction: row;
`;

const TotalText = styled.Text`
  width: 50%;
  padding-left: 10;
  font-size: 22;
`;

const TotalPrice = styled.Text`
  width: 50%;
  text-align: right;
  padding-right: 10;
  font-size: 22;
`;

const Warning = styled.Text`
  color: #f74540;
  font-size: 18;
  margin-bottom: 10;
`;

const Message = styled.Text`
  color: #333;
  margin-bottom: 10;
`;

const Delivery = styled.Text`
  color: #ccc;
  margin-bottom: 20;
`;

const DeliveryTime = styled.Text`
  color: rgba(247, 69, 64, 0.7);
`;

const Shipping = styled.View`
  width: 90%;
  border-radius: 10px;
  border-width: 1;
  border-color: #ccc;
  padding-bottom: 20;
  margin-bottom: 20;
`;

const ShippingHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  width: 100%;
  justify-content: space-between;
`;

const ShippingInfo = styled.Text`
  font-size: 18;
`;

const ShippingPin = styled.View`
  background: #ccc;
  border-radius: 3px;
  align-self: center;
`;

const ShippingPinMessage = styled.Text`
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;
  color: #999;
  font-size: 12;
`;

const ShippingInfos = styled.Text`
  font-size: 12;
  padding-left: 10;
`;

const ShippingInfoCreditCard = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 10;
`;

const ShippingWho = styled.View``;

function ScheduleScreen() {
  return (
    <ScrollView>
      <DefaultView>
        <TitleBox>
          <Title>Agendamento</Title>
        </TitleBox>
        <TotalBox
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.14,
            shadowRadius: 10,
            elevation: 2,
          }}>
          <TotalText>Total</TotalText>
          <TotalPrice>$35.00</TotalPrice>
        </TotalBox>
        <Warning>Entrega gratís!</Warning>
        <Message>Sua Proxíma entrega vai ser agendada para:</Message>
        <DatePicker
          style={{
            width: '90%',
            marginBottom: 20,
            borderRadius: 15,
            borderWidth: 1,
            padding: 5,
            borderColor: '#ccc',
          }}
          date={'2019-04-15'}
          mode="date"
          placeholder="select date"
          format="MMM Do YYYY, h:mm:ss a"
          minDate="2016-05-01"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0,
            },
          }}
        />
        <Delivery>
          Pedido sai em <DeliveryTime>4h 34m 12s</DeliveryTime> apartir de hoje.
        </Delivery>
        <Shipping>
          <ShippingHeader>
            <ShippingInfo>Informações da entrega</ShippingInfo>
            <ShippingPin>
              <ShippingPinMessage>Mudar</ShippingPinMessage>
            </ShippingPin>
          </ShippingHeader>
          <ShippingInfos>Guilherme</ShippingInfos>
          <ShippingInfos>2340, Rua natal</ShippingInfos>
          <ShippingInfos>Bloco 2c, Ap 32.</ShippingInfos>
        </Shipping>
        <Shipping>
          <ShippingHeader>
            <ShippingInfo>Informações de Pagamento</ShippingInfo>
            <ShippingPin>
              <ShippingPinMessage>Mudar</ShippingPinMessage>
            </ShippingPin>
          </ShippingHeader>
          <ShippingInfoCreditCard>
            <Icon name="cc-visa" size={22} />
            <ShippingWho>
              <ShippingInfos>Guilherme</ShippingInfos>
              <ShippingInfos>**** **** **** 9822 0911</ShippingInfos>
            </ShippingWho>
          </ShippingInfoCreditCard>
        </Shipping>
        <DefaultButton
          title="Fazer encomenda"
          alignMe={'center'}
          buttonWidth={300}
        />
      </DefaultView>
    </ScrollView>
  );
}

ScheduleScreen.navigationOptions = ({navigation}) => ({
  headerTintColor: '#333',
  title: 'Voltar',
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
});

export default ScheduleScreen;

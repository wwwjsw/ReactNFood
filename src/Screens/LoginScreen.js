import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import DefaultView from '../Components/Utils/DefaultView';
import Logo from '../Components/Images/Logo';
import DefaultFormLogin from '../Components/Ui/DefaultFormLogin/DefaultFormLogin';

export default function LoginScreen({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <DefaultView>
          <Logo />
          <DefaultFormLogin navigation={navigation} />
        </DefaultView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

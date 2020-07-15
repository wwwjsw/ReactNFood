import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import DefaultView from '../../Components/Utils/DefaultView';
import DefaultButton from '../../Components/Ui/DefaultButton';
import Logo from '../../Components/Images/Logo';
import {
  Form,
  InputDefault,
  ForgotPassword,
  SingInWith,
  SocialLoginView,
  SocialLoginButton,
  SocialLoginIcon,
  SingUp,
} from './styles';

export default function LoginScreen({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <DefaultView>
          <Logo />
          <Form>
            <InputDefault placeholder="Email" numberOfLines={1} />
            <InputDefault placeholder="Password" secureTextEntry={true} />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <DefaultButton
              title="Login"
              buttonWidth={300}
              alignMe={'center'}
              onPress={() => navigation.goBack()}
            />
            <SingInWith>Login with...</SingInWith>
            <SocialLoginView>
              <SocialLoginButton>
                <SocialLoginIcon
                  source={require('../../../Assets/Images/001-google-plus.png')}
                />
              </SocialLoginButton>
              <SocialLoginButton>
                <SocialLoginIcon
                  source={require('../../../Assets/Images/003-facebook.png')}
                />
              </SocialLoginButton>
              <SocialLoginButton>
                <SocialLoginIcon
                  source={require('../../../Assets/Images/002-twitter.png')}
                />
              </SocialLoginButton>
            </SocialLoginView>
            <SingUp>Sing Up</SingUp>
          </Form>
        </DefaultView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

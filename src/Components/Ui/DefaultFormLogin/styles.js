import styled from 'styled-components/native';

export const Form = styled.View`
  width: 80%;
`;

export const InputDefault = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #000;
  background: #fff;
  padding: 10px;
  margin: 10px;
`;

export const ForgotPassword = styled.Text`
  color: #f74540;
  padding: 10px;
  text-align: right;
  margin-bottom: 10px;
`;

export const SingInWith = styled.Text`
  color: #222;
  text-align: center;
  margin-top: 20px;
`;

export const SocialLoginView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 80%;
  margin-top: 20px;
`;

export const SocialLoginButton = styled.View`
  background: #fffcf6;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  elevation: 1;
`;

export const SocialLoginIcon = styled.Image`
  width: 60%;
  height: 60%;
  align-self: center;
`;

export const SingUp = styled.Text`
  color: #f74540;
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
`;
import React from 'react';
import DefaultView from '../Components/Utils/DefaultView';
import DefaultButton from '../Components/Ui/DefaultButton';
import Logo from '../Components/Images/Logo';

export default function HomeScreen({navigation}) {
  return (
    <DefaultView>
      <Logo marginTop={'100'} />
      <DefaultButton
        title={'Login'}
        buttonWidth={300}
        onPress={() => navigation.push('Login')}
      />
      <DefaultButton
        title={'Overview'}
        buttonWidth={300}
        onPress={() => navigation.push('Overview')}
      />
      <DefaultButton
        title={'Recommended'}
        buttonWidth={300}
        onPress={() => navigation.push('Recommended')}
      />
      <DefaultButton
        title={'Schedule'}
        buttonWidth={300}
        onPress={() => navigation.push('Schedule')}
      />
    </DefaultView>
  );
}

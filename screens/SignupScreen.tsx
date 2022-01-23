import * as React from 'react';
import { Button, Center, Input, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import { authSignUp } from '../redux/authActions';
import { Auth, useAppDispatch, useAppSelector } from '../redux/types';

const SignupScreen: React.FC<{ navigation: any }> = props => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch<Auth>();

  const { user } = useAppSelector(state => state);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log('---------------', props.navigation);
  console.log('------------', user?.signedUp);

  React.useEffect(() => {
    props.navigation.navigate('OTP');
  }, [user?.signedUp]);

  return (
    <Center>
      <VStack>
        <Input type="text" placeholder={t('signup.your-email')} onChangeText={(value: string) => setEmail(value)} />
        <Input type="password" placeholder={t('signup.password')} onChangeText={(value: string) => setPassword(value)} />
        <Button
          onPress={() => {
            dispatch(authSignUp(email, password));
          }}>
          {t('sign-up')}
        </Button>
      </VStack>
    </Center>
  );
};

export default SignupScreen;

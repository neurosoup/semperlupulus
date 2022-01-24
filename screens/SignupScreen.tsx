import * as React from 'react';
import { Button, Center, Input, KeyboardAvoidingView, View, VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { authSignUp } from '../redux/authActions';
import { Auth, useAppDispatch, useAppSelector } from '../redux/types';

const SignupScreen: React.FC<{ navigation: any }> = props => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch<Auth>();

  const { user } = useAppSelector(state => state.authReducer.auth);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (user) {
      props.navigation.navigate('OTP');
    }
  }, [user]);

  return (
    <Center minH="100%" w="100%">
      <Center flex={1} px={3}>
        <VStack space={2} w={200}>
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
    </Center>
  );
};

export default SignupScreen;

import * as React from 'react';
import { Button, Center, Input, useSafeArea, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import { authSignUp } from '../redux/authActions';
import { Auth, useAppDispatch, useAppSelector } from '../redux/types';

const Screen: React.FC<{ navigation: any }> = props => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch<Auth>();
  const safeAreaProps = useSafeArea({ safeAreaTop: true, pt: 3 });
  const { user } = useAppSelector(state => state.authReducer.auth);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (user) {
      props.navigation.navigate('OTP');
    }
  }, [user]);

  return (
    <Center minH="100%" w="100%" {...safeAreaProps}>
      <Center flex={1} px={3} w="100%">
        <VStack space={2} w={{ base: '100%', sm: '200px' }}>
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

export default Screen;

import * as React from 'react';
import { Button, Center, HStack, Input, Text, useSafeArea, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import { authSignUp } from '../redux/authActions';
import { Auth, useAppDispatch, useAppSelector } from '../redux/types';
import Logo from '../icons/Logo2';

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
      <Center flex={1} px={8} w="100%">
        <HStack>
          <Center>
            <Logo width="128" height="256" />
            <Text fontSize="md">SemperLupulus</Text>
          </Center>
          <VStack space={{ base: 4, sm: 2 }} w={{ base: '100%', sm: '200px' }}>
            <Input type="text" placeholder={t('signup.your-email')} onChangeText={(value: string) => setEmail(value)} />
            <Input type="password" placeholder={t('signup.password')} onChangeText={(value: string) => setPassword(value)} />
            <Button
              onPress={() => {
                dispatch(authSignUp(email, password));
              }}>
              {t('sign-up')}
            </Button>
          </VStack>
        </HStack>
      </Center>
    </Center>
  );
};

export default Screen;

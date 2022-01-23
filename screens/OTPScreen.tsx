import * as React from 'react';
import { Button, Center, Input, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

const OTPScreen: React.FC<{ navigation: any }> = props => {
  const { t } = useTranslation();

  return (
    <Center>
      <VStack>
        <Button onPress={() => {}}>{t('signup.proceed')}</Button>
      </VStack>
    </Center>
  );
};

export default OTPScreen;

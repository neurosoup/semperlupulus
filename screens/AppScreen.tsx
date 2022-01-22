import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import {
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";

import { useTranslation } from "react-i18next";

const Drawer = createDrawerNavigator();

const DefaultContent: React.FC<{ route: { name: string } }> = (props) => {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
};

const getIcon = (screenName: string) => {
  switch (screenName) {
    case "Inbox":
      return <Ionicons name="person" />;
    case "Outbox":
      return <Ionicons name="person" />;
    case "Favorites":
      return <Ionicons name="person" />;
    default:
      return <Ionicons />;
  }
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props}>
    <VStack space="6" my="2" mx="1">
      <Box px="4">
        <Text bold color="gray.700">
          Mail
        </Text>
        <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
          john_doe@gmail.com
        </Text>
      </Box>
      <VStack divider={<Divider />} space="4">
        <VStack space="3">
          {props.state.routeNames.map((name, index) => (
            <Pressable
              key={index}
              px="5"
              py="3"
              rounded="md"
              bg={
                index === props.state.index
                  ? "rgba(6, 182, 212, 0.1)"
                  : "transparent"
              }
              onPress={(event) => {
                props.navigation.navigate(name);
              }}
            >
              <HStack space="7" alignItems="center">
                <Icon
                  color={
                    index === props.state.index ? "primary.500" : "gray.500"
                  }
                  size="5"
                  as={getIcon(name)}
                />
                <Text
                  fontWeight="500"
                  color={
                    index === props.state.index ? "primary.500" : "gray.700"
                  }
                >
                  {name}
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    </VStack>
  </DrawerContentScrollView>
);

const AppScreen = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage("fr");
  }, []);

  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name={"Recipies"}
          component={DefaultContent}
          options={{ title: t("recipies") }}
        />
      </Drawer.Navigator>
    </Box>
  );
};

export default AppScreen;

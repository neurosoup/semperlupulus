import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import {
  NativeBaseProvider,
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";

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

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
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
};
const MenuDrawer = () => {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inbox" component={DefaultContent} />
      </Drawer.Navigator>
    </Box>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MenuDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

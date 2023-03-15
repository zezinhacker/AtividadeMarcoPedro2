import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./Screens/AboutScreen";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import LoginScreen from "./Screens/LoginScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tittle: "Home",
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tittle: "About",
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tittle: "Details",
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tittle: "Login",
        }}
      />
    </Tabs.Navigator>
  );
}

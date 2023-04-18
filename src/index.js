import { NavigationContainer } from "@react-navigation/native";
// import AboutScreen from "./Screens/AboutScreen";
import HomeScreen from "./Screens/HomeScreen";
// import DetailsScreen from "./Screens/DetailsScreen";
import LoginScreen from "./Screens/LoginScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./Screens/RegisterScreen";
import FetchNews from "./Screens/FetchNews";
import RickMorty from "./Screens/RickMorty";
import RMGameScreen from "./Screens/RMGameScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RMGameScreen" component={RMGameScreen} />
        {/* <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FetchNews" component={FetchNews} />
        <Stack.Screen name="RickMorty" component={RickMorty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tittle: "Home",
        }}
      />
      {/* <Tabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tittle: "About",
        }}
      />
      <Tabs.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tittle: "Details",
        }}
      /> */}
      <Tabs.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tittle: "Login",
        }}
      />
      <Tabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tittle: "Register",
        }}
      />
      <Tabs.Screen
        name="FetchNews"
        component={FetchNews}
        options={{
          tittle: "FetchNews",
        }}
      />
      <Tabs.Screen
        name="RickMorty"
        component={RickMorty}
        options={{
          tittle: "RickMorty",
        }}
      />
      <Tabs.Screen
        name="RMGameScreen"
        component={RMGameScreen}
        options={{
          tittle: "RMGameScreen",
        }}
      />
    </Tabs.Navigator>
  );
}

import {StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/AuntContext";

export default function App(){
  return(
    
    <NavigationContainer independent={true}>
        <AuthProvider>
            <StatusBar backgroundColor={"#FF0000"} barStyle="light-content" translucent={false} />
            <Routes/>
        </AuthProvider>
    </NavigationContainer>
    
  );
}
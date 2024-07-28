import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import DownloadScreen from "./downloadScreen";
import DownloadedScreen from "./downloadedScreen";

function Homescreen() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Music', focusedIcon: 'music' },
        { key: 'download', title: 'Download', focusedIcon: 'album' },
        { key: 'downloaded', title: 'Your Music', focusedIcon: 'history' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: <Homescreen />,
        download: <DownloadScreen />,
        downloaded: <DownloadedScreen />
    });

    const [fontsLoaded] = useFonts({
        'Etna': require('../assets/etna-free-font.otf'),
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", margin: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{ fontFamily: 'Etna', fontSize: 18 }}>hello,</Text>
                    <Text style={{ fontFamily: 'Etna', fontSize: 22 }}>Stranger</Text>
                </View>
                <View>
                    <Avatar 
                        size="medium"
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                        containerStyle={{ backgroundColor: '#3d4db7' }}
                    />
                </View>
            </View>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
});

export default Homescreen;

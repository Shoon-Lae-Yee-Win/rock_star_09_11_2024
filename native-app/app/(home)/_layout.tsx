import { Tabs, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, TouchableOpacity } from "react-native";

export default function Profile() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "#F26B0F"}}>
            <Tabs.Screen 
            name="index"
            options={{
                headerRight: () => (
                    <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={ () => {
                        router.push("/add");
                    }}
                    >
                        <Ionicons 
                        name="add"
                        size={24}
                        />
                    </TouchableOpacity>
                    // <Button title="Add" />
                ),
                title: "Home",
                tabBarIcon: ({color}) => (
                    <Ionicons
                    name="home-outline"
                    size={24}
                    color={color}
                    />
                ),
            }}
            />
                        <Tabs.Screen 
            name="profile"
            options={{
                title: "Profile",
            tabBarIcon: ({color}) => (
                    <Ionicons
                    name="person-circle-outline"
                    size={24}
                    color={color}
                    />
                ),
            }}
            />
                        <Tabs.Screen 
            name="search"
            options={{
                title: "Search",
            tabBarIcon: ({color}) => (
                    <Ionicons
                    name="search-outline"
                    size={24}
                    color={color}
                    />
                ),
            }}
            />
                        <Tabs.Screen 
            name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({color}) => (
                    <Ionicons
                    name="settings-outline"
                    size={24}
                    color={color}
                    />
                ),
            }}
            />
        </Tabs>
    );
}
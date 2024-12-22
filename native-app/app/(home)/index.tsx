import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	card: {
		paddingBottom: 20,
		borderBottomWidth: 1,
        borderBottomColor: '#ccc'
	},
    cardHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    author: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    authorName: {
        fontWeight: "bold",
        fontSize: 18
    },
    content: {
        fontSize: 14
    }
});

export default function Index() {
	return (
		// <View style={{
		//     flex: 1,
		//     justifyContent: 'center',
		//     alignItems: 'center'
		// }}>
		//     <Text>
		//         Edit app/index.tesx to edit this screen
		//     </Text>
		//     <Link href="/profile">Profile</Link>
		// </View>
		<ScrollView style={styles.container}>
			<View style={styles.card}>
				<View style={styles.cardHolder}>
                    <View style={styles.author}>
                        <Ionicons
                            name='person-circle'
                            size={32}
                            color="pink"
                        />
                    </View>
					<Text style={styles.authorName}>Alice</Text>
					<TouchableOpacity>
						<Ionicons
							name='trash'
							color='pink'
							size={24}
						/>
					</TouchableOpacity>
				</View>
				<View>
					<Text style={styles.content}>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolorem placeat nesciunt enim eveniet nostrum
						nulla tempora quae consectetur magnam eum sed, doloribus
						expedita excepturi est eius necessitatibus, harum, minus
						repudiandae.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
}

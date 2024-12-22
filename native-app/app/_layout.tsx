import { Stack } from 'expo-router';
import { Modal } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name='(home)'
      options={{ title: "Home" , headerShown: false}}
      />
      <Stack.Screen 
      name='add'
      options={{ title: "Add Post" , presentation: 'modal'}}
      />
    </Stack>
  );
}

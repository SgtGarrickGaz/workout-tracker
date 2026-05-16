import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet, TextInput } from 'react-native';


export default function HomeScreen() {
  return (
    // <SafeAreaView style={styles.wrapperContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi!</ThemedText>
        <ThemedText type='subtitle'>Enter your name</ThemedText>
        <TextInput
          placeholder="Your name"
        />
      </ThemedView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

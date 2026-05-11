import { View, Text, StyleSheet, TextInput, SafeAreaView, useWindowDimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 500;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[
        styles.searchBarContainer, 
        { width: width > MAX_WIDTH ? MAX_WIDTH : '100%' }
      ]}>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={20}
            color="#4A4A4A"
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search for ideas"
            placeholderTextColor="#B5B5B5"
            style={styles.searchInput}
            underlineColorAndroid="transparent"
          />

          <Ionicons
            name="camera"
            size={22}
            color="#4A4A4A"
            style={styles.cameraIcon}
          />
        </View>
      </View>

      <View style={styles.emptyContent}>
        <Text style={styles.mutedText}>What's on your mind today?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    marginTop: 40, 
    marginBottom: 10,
    alignSelf: 'center', 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#4A3728',
    // We cast this to any to prevent TypeScript from complaining 
    // about the web-only 'outlineStyle' property
    ...Platform.select({
      web: { outlineStyle: 'none' } as any,
      default: {},
    }),
  },
  cameraIcon: {
    marginLeft: 10,
  },
  emptyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, 
  },
  mutedText: {
    color: '#B2A59B',
    fontSize: 16,
  },
});
import { View, Text, StyleSheet, TextInput, SafeAreaView, useWindowDimensions, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 500;

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar Container - Constrained for wide screen */}
      <View style={[
        styles.searchBarContainer, 
        { width: width > MAX_WIDTH ? MAX_WIDTH : '100%' }
      ]}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#4A4A4A" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for ideas"
            placeholderTextColor="#B5B5B5"
            style={styles.searchInput}
            underlineColorAndroid="transparent"
          />
          <Ionicons name="camera" size={22} color="#4A4A4A" style={styles.cameraIcon} />
        </View>
      </View>

      {/* Empty State Content only (No Suggestions) */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.emptyStateWrapper}>
          <View style={styles.illustrationCircle}>
            <Ionicons name="sparkles-outline" size={40} color="#E6E0DC" />
          </View>
          
          <Text style={styles.headline}>Explore your interests</Text>
          <Text style={styles.subline}>
            Search for your favorite topics or browse trending ideas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFA',
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    marginTop: 20, 
    marginBottom: 10,
    alignSelf: 'center', 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EDED', 
    height: 48,
    borderRadius: 12, 
    paddingHorizontal: 15,
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#4A3728',
    ...Platform.select({
      web: { outlineStyle: 'none' } as any,
      default: {},
    }),
  },
  cameraIcon: { marginLeft: 10 },
  
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  emptyStateWrapper: {
    alignItems: 'center',
    marginTop: 80, // Moved down slightly for better visual balance
    paddingHorizontal: 40,
  },
  illustrationCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headline: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4A3728',
    textAlign: 'center',
    marginBottom: 10,
  },
  subline: {
    fontSize: 15,
    color: '#B2A59B',
    textAlign: 'center',
    lineHeight: 22,
  },
});
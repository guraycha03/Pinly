import { View, Text, StyleSheet, TextInput, SafeAreaView, useWindowDimensions, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 500;

  // Real apps usually offer "Trending" or "Recent" suggestions
  const suggestions = ["Minimalist interiors", "Summer recipes", "Nail art", "Travel bucket list", "Graphic design"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar Container */}
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

      {/* Proper Empty State Content */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.emptyStateWrapper}>
          {/* Visual Anchor */}
          <View style={styles.illustrationCircle}>
            <Ionicons name="sparkles-outline" size={40} color="#E6E0DC" />
          </View>
          
          <Text style={styles.headline}>Explore your interests</Text>
          <Text style={styles.subline}>
            Search for your favorite topics or browse trending ideas below.
          </Text>
        </View>

        {/* Actionable Suggestions Section */}
        <View style={[styles.suggestionSection, { width: width > MAX_WIDTH ? MAX_WIDTH : '100%', alignSelf: 'center' }]}>
          <Text style={styles.sectionTitle}>Popular right now</Text>
          <View style={styles.chipContainer}>
            {suggestions.map((item, index) => (
              <TouchableOpacity key={index} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFA', // Slightly warmer off-white
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
    backgroundColor: '#F0EDED', // Subtle background fill
    height: 48,
    borderRadius: 12, // Modern slightly-rounded look
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
    paddingBottom: 100, // Space for tab bar
  },
  emptyStateWrapper: {
    alignItems: 'center',
    marginTop: 60,
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
    borderWidth: 1,
    borderColor: '#F0EDED',
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
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
  suggestionSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4A3728',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E0DC',
  },
  chipText: {
    fontSize: 14,
    color: '#4A3728',
    fontWeight: '500',
  },
});
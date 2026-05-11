import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';

export default function ProfileScreen() {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 600;

  const savedBoards = [
    { id: '1',
      title: 'digital arts ✩',
      images: [
        require('../../assets/images/img/digi-art.jpg'),
        require('../../assets/images/img/mouse.png'),
        require('../../assets/images/img/cute-character.png'),
      ],
    },
    { id: '2', title: 'cats > ᴗ <', image: require('../../assets/images/img/cute-cat.jpg') },
    { id: '3', title: 'stuffs ♡', image: require('../../assets/images/img/flower-1.png') },
    { id: '4', title: '˗ˏˋ food ´ˎ˗', image: require('../../assets/images/img/food.jpg') },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Profile Header */}
      <View style={[styles.headerWrapper, { width: width > MAX_WIDTH ? MAX_WIDTH : '100%', alignSelf: 'center' }]}>
        <View style={styles.profileRow}>
          <Image
            source={require('@/assets/images/img/profile.jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>Sam</Text>
            <Text style={styles.usernameText}>@sammy.0511</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        <View style={styles.tab}>
          <Text style={styles.tabTextInactive}>Created</Text>
        </View>
        <View style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Saved</Text>
        </View>
      </View>

      {/* Saved Content Grid */}
      <View style={[styles.gridContainer, { width: width > MAX_WIDTH ? MAX_WIDTH : '100%', alignSelf: 'center' }]}>
      {savedBoards.map((item) => (
        <TouchableOpacity key={item.id} style={styles.boardCard}>
          {item.images ? (
            <View style={styles.collageContainer}>

              {/* LEFT: first image */}
              <View style={styles.leftColumn}>
                <Image source={item.images[0]} style={styles.bigImage} />
              </View>

              {/* RIGHT: last 2 images */}
              <View style={styles.rightColumn}>
                <Image source={item.images[1]} style={styles.smallImageTop} />
                <Image source={item.images[2]} style={styles.smallImageBottom} />
              </View>

            </View>
          ) : (
            <Image source={item.image} style={styles.boardImage} />
          )}
          <Text style={styles.boardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFA',
  },
  headerWrapper: {
    paddingHorizontal: 20,
    marginTop: 60,
    marginBottom: 30,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E6E0DC',
  },
  infoContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4A3728',
  },
  usernameText: {
    fontSize: 14,
    color: '#B2A59B',
  },
  editButton: {
    backgroundColor: '#F0EDED',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start', 
  },
  editButtonText: {
    fontWeight: '600',
    color: '#4A3728',
    fontSize: 13,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EDED',
  },
  tab: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A3728',
  },
  tabTextActive: {
    fontWeight: '700',
    color: '#4A3728',
    fontSize: 16,
  },
  tabTextInactive: {
    fontWeight: '600',
    color: '#B2A59B',
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  boardCard: {
    width: '47%',
    marginBottom: 20,
    marginHorizontal: '1.5%',
  },
  boardImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    backgroundColor: '#F0EDED',
  },
  boardTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#4A3728',
    marginLeft: 5,
  },
  scrollContent: {
    paddingBottom: 100, 
  },

  collageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
  },
  
  leftColumn: {
    flex: 2,
  },
  
  rightColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  bigImage: {
    width: '100%',
    height: '100%',
  },
  
  smallImageTop: {
    width: '100%',
    height: 78,
  },
  
  smallImageBottom: {
    width: '100%',
    height: 78,
  },
});
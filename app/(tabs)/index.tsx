import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const images = [
  { source: require('@/assets/images/img/cute-character.png'), ratio: 1 },
  { source: require('@/assets/images/img/flower-1.png'), ratio: 3 / 4 },
  { source: require('@/assets/images/img/mouse.png'), ratio:  1 },
  { source: require('@/assets/images/img/cat.jpg'), ratio: 1 },
  { source: require('@/assets/images/img/flowers.jpg'), ratio: 1 },
  { source: require('@/assets/images/img/plant.png'), ratio: 1 },
  { source: require('@/assets/images/img/cat-box.jpg'), ratio: 1 },
  { source: require('@/assets/images/img/puppy.jpg'), ratio: 3 / 4 },
  { source: require('@/assets/images/img/lemon.png'), ratio: 1 },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const numColumns = width > 900 ? 3 : 2;
  const gap = 10;
  const cardWidth = (width - 16 - gap * (numColumns - 1)) / numColumns;
  const columns: any[][] = Array.from({ length: numColumns }, () => []);

  images.forEach((item, index) => {
    columns[index % numColumns].push({
      ...item,
      realIndex: index,
    });
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>For You</Text>
          <View style={styles.underline} />
        </View>
      </View>

      {/* Masonry Grid */}
      <View style={[styles.grid, { gap }]}>
        {columns.map((col, colIndex) => (
          <View key={colIndex} style={{ width: cardWidth }}>
            {col.map((item, index) => {
              const height = cardWidth / item.ratio;
              return (
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: '/pin/[id]',
                      params: {
                        id: item.realIndex.toString(),
                      },
                    })
                  }
                  style={[styles.card, { height, marginBottom: gap }]}
                >
                  <Image
                    source={item.source}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <View style={styles.loaderDot} />
        <View style={[styles.loaderDot, { opacity: 0.6 }]} />
        <View style={[styles.loaderDot, { opacity: 0.3 }]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6', 
    paddingHorizontal: 8,
  },

  header: {
    marginTop: 40, 
    marginBottom: 20,
    paddingHorizontal: 8, 
    alignItems: 'flex-start', 
  },

  headerTitleContainer: {
    alignSelf: 'flex-start',
  },

  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A3728',
  },

  underline: {
    width: '100%', 
    height: 3,
    backgroundColor: '#8E735B',
    marginTop: 4,
    borderRadius: 2,
  },

  grid: {
    flexDirection: 'row',
  },

  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#eaeaea',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  
  loaderDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
    marginHorizontal: 4,
  },
});
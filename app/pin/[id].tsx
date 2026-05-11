import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
  } from 'react-native';
  
  import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
  import { Ionicons } from '@expo/vector-icons';
  
  export default function PinDetail() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const imageIndex = Number(id);
    const { width } = useWindowDimensions();
  
    const isWide = width >= 900;
  
    const images = [
      require('@/assets/images/img/cute-character.png'),
      require('@/assets/images/img/flower-1.png'),
      require('@/assets/images/img/mouse.png'),
      require('@/assets/images/img/cat.jpg'),
      require('@/assets/images/img/flowers.jpg'),
      require('@/assets/images/img/plant.png'),
      require('@/assets/images/img/cat-box.jpg'),
      require('@/assets/images/img/puppy.jpg'),
      require('@/assets/images/img/lemon.png'),
    ];
  
    const ActionRow = () => (
      <View style={styles.actionRow}>
        {/* Left Icons */}
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={22} color="#4A3728" />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-outline" size={22} color="#4A3728" />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-horizontal" size={22} color="#4A3728" />
          </TouchableOpacity>
        </View>
  
        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />
  
        <View style={styles.container}>
          {/* Back Button (your custom one) */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={26} color="#4A3728" />
          </TouchableOpacity>
  
          {isWide ? (
            /* ================= WIDE LAYOUT ================= */
            <View style={styles.wideContainer}>
              <View style={styles.imageContainerWide}>
                <Image
                  source={images[imageIndex]}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
  
              <ScrollView style={styles.detailsContainer}>
                <ActionRow />
  
                <View style={styles.description}>
                  <Text style={styles.title}>☁️ Pin Title ☁️</Text>
                  <Text style={styles.text}>
                  this is where the post description will appear シ
                  </Text>
                </View>
              </ScrollView>
            </View>
          ) : (
            /* ================= MOBILE LAYOUT ================= */
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image
                source={images[imageIndex]}
                style={styles.image}
                resizeMode="cover"
              />
  
              <ActionRow />
  
              <View style={styles.description}>
                <Text style={styles.title}>☁️ Pin Title ☁️</Text>
                <Text style={styles.text}>
                  this is where the post description will appear シ
                </Text>
              </View>
            </ScrollView>
          )}
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAF9F6',
    },
  
    backButton: {
        position: 'absolute',
        top: 25, 
        left: 16,
        zIndex: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        padding: 10,
        borderRadius: 16, 
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        backdropFilter: 'blur(10px)', 
    },
  
    image: {
      width: '100%',
      height: 400,
    },
  
    imageContainerWide: {
      flex: 1,
    },
  
    imageWide: {
      width: '100%',
      height: '100%',
    },
  
    wideContainer: {
      flex: 1,
      flexDirection: 'row',
    },
  
    detailsContainer: {
      flex: 1,
      padding: 30,
    },

    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 12,
    },
  
    leftActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
    },
  
    iconButton: {
      padding: 6,
    },
  
    saveButton: {
      backgroundColor: '#4A3728',
      paddingVertical: 10,
      paddingHorizontal: 22,
      borderRadius: 25,
    },
  
    saveText: {
      color: '#fff',
      fontWeight: '600',
    },

    description: {
      padding: 20,
    },
  
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: '#4A3728',
      marginBottom: 8,
    },
  
    text: {
      fontSize: 14,
      color: '#6B5E54',
      lineHeight: 20,
    },
  });
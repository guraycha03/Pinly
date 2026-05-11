import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const activeColor = '#4A3728';
  const inactiveColor = '#B2A59B';

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
          tabBarButton: HapticTab,
          tabBarIconStyle: {
            marginTop: 6,
          },
          tabBarStyle: {
            height: 65,
            backgroundColor: '#FDFBFA',
            borderTopWidth: 0.5,
            borderTopColor: '#E6E0DC',
            shadowColor: '#4A3728',
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: -3 },
            shadowRadius: 10,
            elevation: 10,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-variant"
                size={26}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={24}
                color={color}
              />
            ),
          }}
        />

        {/* Create Tab */}
        <Tabs.Screen
          name="create"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle" size={32} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('@/assets/images/img/profile.jpeg')}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  opacity: focused ? 1 : 0.7,
                }}
              />
            ),
          }}
        />
      </Tabs>

      {/* Create Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalWrapper}>
          <Pressable
            style={styles.dismissArea}
            onPress={() => setModalVisible(false)}
          />

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.closeIconButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#4A3728" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>
                Start creating now
              </Text>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.iconBackground}>
                  <MaterialCommunityIcons
                    name="pin"
                    size={32}
                    color="#4A3728"
                  />
                </View>
                <Text style={styles.menuText}>Pins</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.iconBackground}>
                  <Ionicons name="grid" size={32} color="#4A3728" />
                </View>
                <Text style={styles.menuText}>Collage</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.iconBackground}>
                  <Ionicons name="albums" size={32} color="#4A3728" />
                </View>
                <Text style={styles.menuText}>Board</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dismissArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    paddingBottom: 60,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  closeIconButton: {
    position: 'absolute',
    left: 10,
    padding: 5,
  },
  modalTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#4A3728',
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A3728',
  },
});
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import avatarImage from '../../assets/avatar.jpg'; // Updated path to your avatar image

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false); // Local state for dark mode

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      
      {/* Top Profile Section */}
      <View style={styles.profileSection}>
        {/* Profile Image with circular shadow */}
        <View style={styles.imageContainer}>
          <View style={styles.shadowContainer}>
            <Image source={avatarImage} style={styles.profileImage} />
          </View>
        </View>

        {/* Joined Information - Aligned with the picture */}
        <View style={styles.joinedContainer}>
          <Text style={[styles.joinedText, { color: darkMode ? '#bbb' : '#666' }]}>Joined</Text>
          <Text style={[styles.yearText, { color: darkMode ? '#bbb' : '#666' }]}>1 year ago</Text>
        </View>
      </View>

      {/* Name Container - Positioned under the picture */}
      <View style={styles.nameContainer}>
        <Text style={[styles.firstNameText, { color: darkMode ? '#fff' : '#000' }]}>Shane Irish Kate</Text>
        <Text style={[styles.lastNameText, { color: darkMode ? '#aaa' : '#666' }]}>Yecyec</Text>
      </View>

      {/* Profile Heading */}
      <Text style={[styles.sectionHeading, { color: darkMode ? '#fff' : '#000' }]}>Profile</Text>

      {/* Manage User Section */}
      <TouchableOpacity onPress={() => alert('Manage User')} style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="person-circle" size={24} color={darkMode ? '#fff' : '#5097a4'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Manage user</Text>
        </View>
        <Icon name="chevron-forward" size={24} color={darkMode ? '#fff' : '#000'} />
      </TouchableOpacity>

      {/* Settings Heading */}
      <Text style={[styles.sectionHeading, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>

      {/* Notifications Section */}
      <TouchableOpacity style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="notifications" size={24} color={darkMode ? '#ffbf00' : '#ffbf00'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Notifications</Text>
        </View>
        <Icon name="chevron-forward" size={24} color={darkMode ? '#fff' : '#000'} />
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="moon" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        </View>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity onPress={() => alert('Signed Out')} style={styles.signOutButton}>
        <View style={styles.rowContent}>
          <Icon name="log-out" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row', // Keep items in a row
    alignItems: 'center', // Center-align the items
    marginBottom: 20,
  },
  imageContainer: {
    width: 130, // Width for shadow
    height: 130, // Height for shadow
    borderRadius: 70, // Half of width/height for circular shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // Ensure the shadow has a circular shape
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // For Android shadow effect
    backgroundColor: 'transparent', // Shadow only
  },
  profileImage: {
    width: 135, // Slightly smaller to give space for shadow
    height: 135,
    borderRadius: 60, // Makes the image circular
    position: 'absolute', // Position image on top of shadow
    top: 0, // Align to top
    left: 0, // Align to left
  },
  nameContainer: {
    marginLeft: 10, // Space between image and name
    justifyContent: 'flex-start', // Align text to the left
    marginTop: 5, // Adds space between the image and the name
  },
  firstNameText: {
    fontSize: 22, // Slightly larger for emphasis
    fontWeight: 'bold'
  },
  lastNameText: {
    fontSize: 30, // Slightly larger for emphasis
    color: '#666',
  },
  joinedContainer: {
    flexDirection: 'column', // Stack "Joined" and "1 year ago" vertically
    marginLeft: 40, // Space between image and joined info
    alignItems: 'flex-start', // Align items to start
  },
  joinedText: {
    fontSize: 17,
  },
  yearText: {
    fontSize: 19,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 18,
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 50,
    alignItems: 'center',
  },
});

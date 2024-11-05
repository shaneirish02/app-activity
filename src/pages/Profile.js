import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import avatarImage from '../../assets/avatar.jpg';

const Profile = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <View style={styles.shadowContainer}>
            <Image source={avatarImage} style={styles.profileImage} />
          </View>
        </View>
        <View style={styles.joinedContainer}>
          <Text style={[styles.joinedText, { color: darkMode ? '#bbb' : '#666' }]}>Joined</Text>
          <Text style={[styles.yearText, { color: darkMode ? '#bbb' : '#666' }]}>1 year ago</Text>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.firstNameText, { color: darkMode ? '#fff' : '#000' }]}>Shane Irish Kate</Text>
        <Text style={[styles.lastNameText, { color: darkMode ? '#aaa' : '#666' }]}>Yecyec</Text>
      </View>
      <Text style={[styles.sectionHeading, { color: darkMode ? '#fff' : '#000' }]}>Profile</Text>
      <TouchableOpacity onPress={() => alert('Manage User')} style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="person-circle" size={24} color={darkMode ? '#fff' : '#5097a4'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Manage user</Text>
        </View>
        <Icon name="chevron-forward" size={24} color={darkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      <Text style={[styles.sectionHeading, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>
      <TouchableOpacity style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="notifications" size={24} color={darkMode ? '#ffbf00' : '#ffbf00'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Notifications</Text>
        </View>
        <Icon name="chevron-forward" size={24} color={darkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.rowContent}>
          <Icon name="moon" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.rowText, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        </View>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: 'transparent',
  },
  profileImage: {
    width: 135,
    height: 135,
    borderRadius: 80,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  nameContainer: {
    marginLeft: 10,
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  firstNameText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  lastNameText: {
    fontSize: 30,
    color: '#666',
  },
  joinedContainer: {
    flexDirection: 'column',
    marginLeft: 40,
    alignItems: 'flex-start',
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

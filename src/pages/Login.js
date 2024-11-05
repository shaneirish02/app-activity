import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MyButton from '../components/Mybutton/Mybutton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Replace this with your actual login logic
        if (email && password) {
            Alert.alert('Login Successful', 'You are now logged in.', [
                { text: 'OK', onPress: () => navigation.navigate('Profile') }
            ]);
        } else {
            Alert.alert('Error', 'Please enter email and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                    <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#447AC4" />
                </TouchableOpacity>
            </View>
            <MyButton text="Login" action={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Dont have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#447AC4',
    },
    input: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    passwordContainer: {
        position: 'relative',
        marginBottom: 10,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 15,
        padding: 5,
    },
    link: {
        color: '#447AC4', 
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 15,
    },
});

export default Login;

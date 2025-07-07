import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = () => {
    if (email && password) {
      // Simulate login
      navigation.replace('Dashboard', { user: { email, loginMethod: 'email' } });
    } else {
      Alert.alert('Error', 'Please enter both email and password');
    }
  };

  const handleSocialLogin = (platform) => {
    // Simulate social login
    navigation.replace('Dashboard', { user: { platform, loginMethod: 'social' } });
  };

  const SocialButton = ({ title, icon, color, onPress, textColor = '#fff' }) => (
    <TouchableOpacity style={[styles.socialButton, { backgroundColor: color }]} onPress={onPress}>
      <Icon name={icon} size={20} color={textColor} style={styles.socialIcon} />
      <Text style={[styles.socialButtonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#8b5cf6', '#ec4899', '#f97316']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Logo and Title */}
          <View style={styles.header}>
            <Text style={styles.title}>Influenzer</Text>
            <Text style={styles.subtitle}>Join the gamified micro-influencer revolution</Text>
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialContainer}>
            <SocialButton
              title="Continue with Instagram"
              icon="camera-alt"
              color="#E4405F"
              onPress={() => handleSocialLogin('instagram')}
            />
            <SocialButton
              title="Continue with TikTok"
              icon="music-video"
              color="#000000"
              onPress={() => handleSocialLogin('tiktok')}
            />
            <SocialButton
              title="Continue with X/Twitter"
              icon="alternate-email"
              color="#1DA1F2"
              onPress={() => handleSocialLogin('twitter')}
            />
            <SocialButton
              title="Continue with YouTube"
              icon="play-circle-filled"
              color="#FF0000"
              onPress={() => handleSocialLogin('youtube')}
            />
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Email Login Form */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.emailButton} onPress={handleEmailLogin}>
              <Icon name="email" size={20} color="#fff" style={styles.emailIcon} />
              <Text style={styles.emailButtonText}>Sign In with Email</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  socialContainer: {
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  socialIcon: {
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dividerText: {
    color: '#fff',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  formContainer: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    color: '#1F2937',
  },
  emailButton: {
    backgroundColor: '#6366F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  emailIcon: {
    marginRight: 8,
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 14,
  },
  signupLink: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;


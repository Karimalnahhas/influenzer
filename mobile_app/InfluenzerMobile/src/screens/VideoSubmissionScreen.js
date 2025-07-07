import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

const VideoSubmissionScreen = ({ navigation, route }) => {
  const [videoUri, setVideoUri] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [shareToSocial, setShareToSocial] = useState({
    instagram: false,
    tiktok: false,
    twitter: false,
    youtube: false,
  });

  const competition = route.params?.competition || {
    id: 1,
    brand: 'Nike',
    product: 'Air Max 270',
    title: 'Show Your Style Challenge',
    description: 'Create a 30-second video showcasing how you style the new Air Max 270',
    prize: '$500 + Free Shoes',
    timeLeft: '2 days 14 hours',
    participants: 234,
    requirements: ['30-60 seconds', 'Show product clearly', 'Include #NikeStyle'],
    category: 'Fashion'
  };

  const selectVideo = () => {
    const options = {
      mediaType: 'video',
      videoQuality: 'high',
      durationLimit: 60,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel || response.error) {
        return;
      }

      if (response.assets && response.assets[0]) {
        setVideoUri(response.assets[0].uri);
      }
    });
  };

  const toggleSocialShare = (platform) => {
    setShareToSocial(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const handleSubmit = async () => {
    if (!videoUri || !title) {
      Alert.alert('Error', 'Please select a video and enter a title');
      return;
    }

    setIsUploading(true);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    Alert.alert(
      'Success!',
      'Your video has been submitted successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            setIsUploading(false);
            navigation.goBack();
          }
        }
      ]
    );
  };

  const SocialShareButton = ({ platform, icon, color, title }) => (
    <TouchableOpacity
      style={[
        styles.socialShareButton,
        { backgroundColor: shareToSocial[platform] ? color : '#F3F4F6' }
      ]}
      onPress={() => toggleSocialShare(platform)}
    >
      <Icon 
        name={icon} 
        size={20} 
        color={shareToSocial[platform] ? '#fff' : '#6B7280'} 
      />
      <Text style={[
        styles.socialShareText,
        { color: shareToSocial[platform] ? '#fff' : '#6B7280' }
      ]}>
        {title}
      </Text>
      {shareToSocial[platform] && (
        <Icon name="check" size={16} color="#fff" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Competition Info */}
        <View style={styles.competitionInfo}>
          <Text style={styles.competitionTitle}>{competition.title}</Text>
          <Text style={styles.competitionBrand}>by {competition.brand}</Text>
          <Text style={styles.competitionDescription}>{competition.description}</Text>
          
          <View style={styles.competitionDetails}>
            <View style={styles.detailRow}>
              <Icon name="attach-money" size={16} color="#10B981" />
              <Text style={styles.prizeText}>{competition.prize}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="schedule" size={16} color="#F59E0B" />
              <Text style={styles.timeText}>{competition.timeLeft}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="people" size={16} color="#6B7280" />
              <Text style={styles.participantsText}>{competition.participants} participants</Text>
            </View>
          </View>

          <View style={styles.requirementsSection}>
            <Text style={styles.requirementsTitle}>Requirements</Text>
            {competition.requirements.map((req, index) => (
              <View key={index} style={styles.requirement}>
                <Icon name="check" size={16} color="#10B981" />
                <Text style={styles.requirementText}>{req}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Video Upload */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Your Video</Text>
          <Text style={styles.sectionDescription}>
            Upload your competition entry video (max 100MB)
          </Text>
          
          {!videoUri ? (
            <TouchableOpacity style={styles.uploadArea} onPress={selectVideo}>
              <Icon name="cloud-upload" size={48} color="#8B5CF6" />
              <Text style={styles.uploadText}>Tap to select video</Text>
              <Text style={styles.uploadSubtext}>MP4, MOV, AVI up to 100MB</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.videoPreview}>
              <View style={styles.videoPlaceholder}>
                <Icon name="play-circle-filled" size={64} color="#8B5CF6" />
                <Text style={styles.videoSelectedText}>Video Selected</Text>
              </View>
              <TouchableOpacity style={styles.replaceButton} onPress={selectVideo}>
                <Icon name="refresh" size={16} color="#8B5CF6" />
                <Text style={styles.replaceButtonText}>Replace Video</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Video Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Video Details</Text>
          <Text style={styles.sectionDescription}>
            Add a title and description for your submission
          </Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Title *</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Give your video a catchy title..."
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Describe your video and how it meets the competition requirements..."
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Hashtags</Text>
            <TextInput
              style={styles.textInput}
              placeholder="#NikeStyle #Fashion #OOTD"
              value={hashtags}
              onChangeText={setHashtags}
            />
            <Text style={styles.inputHint}>
              Include required hashtags and add your own
            </Text>
          </View>
        </View>

        {/* Social Sharing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Share to Social Media</Text>
          <Text style={styles.sectionDescription}>
            Automatically share your submission to boost engagement
          </Text>
          
          <View style={styles.socialGrid}>
            <SocialShareButton
              platform="instagram"
              icon="camera-alt"
              color="#E4405F"
              title="Instagram"
            />
            <SocialShareButton
              platform="tiktok"
              icon="music-video"
              color="#000000"
              title="TikTok"
            />
            <SocialShareButton
              platform="twitter"
              icon="alternate-email"
              color="#1DA1F2"
              title="X/Twitter"
            />
            <SocialShareButton
              platform="youtube"
              icon="play-circle-filled"
              color="#FF0000"
              title="YouTube"
            />
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.submitSection}>
          {isUploading ? (
            <View style={styles.uploadingContainer}>
              <Text style={styles.uploadingText}>Uploading video... {uploadProgress}%</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${uploadProgress}%` }]} />
              </View>
            </View>
          ) : (
            <TouchableOpacity 
              style={[styles.submitButton, (!videoUri || !title) && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={!videoUri || !title}
            >
              <Icon name="send" size={20} color="#fff" />
              <Text style={styles.submitButtonText}>Submit Video Entry</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  competitionInfo: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  competitionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  competitionBrand: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  competitionDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  competitionDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  prizeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
    marginLeft: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#F59E0B',
    marginLeft: 4,
  },
  participantsText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  requirementsSection: {
    marginTop: 8,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  requirementText: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 8,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  videoPreview: {
    alignItems: 'center',
  },
  videoPlaceholder: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
    width: '100%',
  },
  videoSelectedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
  },
  replaceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  replaceButtonText: {
    color: '#8B5CF6',
    marginLeft: 4,
    fontWeight: '600',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  inputHint: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialShareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
    marginBottom: 8,
  },
  socialShareText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 4,
  },
  submitSection: {
    marginBottom: 32,
  },
  submitButton: {
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  uploadingContainer: {
    alignItems: 'center',
  },
  uploadingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
  },
});

export default VideoSubmissionScreen;


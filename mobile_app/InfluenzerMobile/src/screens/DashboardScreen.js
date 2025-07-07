import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashboardScreen = ({ navigation, route }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const user = route.params?.user;

  // Mock data
  const userStats = {
    totalEarnings: 1250,
    competitionsWon: 3,
    totalViews: 45600,
    currentRank: 'Rising Star'
  };

  const competitions = [
    {
      id: 1,
      brand: 'Nike',
      product: 'Air Max 270',
      title: 'Show Your Style Challenge',
      description: 'Create a 30-second video showcasing how you style the new Air Max 270',
      prize: '$500 + Free Shoes',
      timeLeft: '2 days 14 hours',
      participants: 234,
      topVideo: {
        creator: 'Sarah_M',
        views: 12500,
        likes: 890,
        shares: 156
      },
      requirements: ['30-60 seconds', 'Show product clearly', 'Include #NikeStyle'],
      category: 'Fashion'
    },
    {
      id: 2,
      brand: 'Starbucks',
      product: 'Pumpkin Spice Latte',
      title: 'Fall Vibes Contest',
      description: 'Capture the perfect fall moment with your PSL',
      prize: '$300 + $100 Gift Card',
      timeLeft: '5 days 8 hours',
      participants: 156,
      topVideo: {
        creator: 'CoffeeKing',
        views: 8900,
        likes: 567,
        shares: 89
      },
      requirements: ['15-30 seconds', 'Outdoor setting preferred', 'Include #PSLVibes'],
      category: 'Food & Drink'
    },
    {
      id: 3,
      brand: 'Apple',
      product: 'iPhone 15 Pro',
      title: 'Shot on iPhone Challenge',
      description: 'Show off the camera capabilities of the new iPhone 15 Pro',
      prize: '$1000 + iPhone 15 Pro',
      timeLeft: '1 day 3 hours',
      participants: 567,
      topVideo: {
        creator: 'TechReviewer',
        views: 25600,
        likes: 1890,
        shares: 345
      },
      requirements: ['60 seconds max', 'Must use iPhone camera', 'Include #ShotOniPhone'],
      category: 'Technology'
    }
  ];

  const StatCard = ({ icon, title, value, color }) => (
    <View style={styles.statCard}>
      <Icon name={icon} size={24} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  const CompetitionCard = ({ competition }) => (
    <TouchableOpacity 
      style={styles.competitionCard}
      onPress={() => navigation.navigate('VideoSubmission', { competition })}
    >
      <View style={styles.competitionHeader}>
        <View>
          <Text style={styles.competitionTitle}>{competition.title}</Text>
          <Text style={styles.competitionBrand}>by {competition.brand}</Text>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{competition.category}</Text>
        </View>
      </View>
      
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

      <View style={styles.leaderSection}>
        <Text style={styles.leaderTitle}>Current Leader</Text>
        <View style={styles.leaderInfo}>
          <Text style={styles.leaderName}>{competition.topVideo.creator}</Text>
          <View style={styles.leaderStats}>
            <View style={styles.leaderStat}>
              <Icon name="visibility" size={12} color="#6B7280" />
              <Text style={styles.leaderStatText}>{competition.topVideo.views.toLocaleString()}</Text>
            </View>
            <View style={styles.leaderStat}>
              <Icon name="favorite" size={12} color="#6B7280" />
              <Text style={styles.leaderStatText}>{competition.topVideo.likes}</Text>
            </View>
            <View style={styles.leaderStat}>
              <Icon name="share" size={12} color="#6B7280" />
              <Text style={styles.leaderStatText}>{competition.topVideo.shares}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.requirementsSection}>
        <Text style={styles.requirementsTitle}>Requirements</Text>
        <View style={styles.requirementsList}>
          {competition.requirements.map((req, index) => (
            <View key={index} style={styles.requirement}>
              <Icon name="check" size={12} color="#10B981" />
              <Text style={styles.requirementText}>{req}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Icon name="add" size={20} color="#fff" />
        <Text style={styles.submitButtonText}>Submit Video</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Influenzer</Text>
        <View style={styles.headerRight}>
          <View style={styles.earningsContainer}>
            <Icon name="attach-money" size={16} color="#10B981" />
            <Text style={styles.earningsText}>${userStats.totalEarnings}</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="account-circle" size={32} color="#8B5CF6" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatCard
            icon="attach-money"
            title="Total Earnings"
            value={`$${userStats.totalEarnings}`}
            color="#10B981"
          />
          <StatCard
            icon="emoji-events"
            title="Competitions Won"
            value={userStats.competitionsWon}
            color="#F59E0B"
          />
          <StatCard
            icon="visibility"
            title="Total Views"
            value={userStats.totalViews.toLocaleString()}
            color="#3B82F6"
          />
          <StatCard
            icon="people"
            title="Current Rank"
            value={userStats.currentRank}
            color="#8B5CF6"
          />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search competitions..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-list" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Competitions */}
        <View style={styles.competitionsSection}>
          <Text style={styles.sectionTitle}>Active Competitions</Text>
          {competitions.map((competition) => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  earningsText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  profileButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#1F2937',
  },
  statTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  filterButton: {
    padding: 8,
  },
  competitionsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  competitionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  competitionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  competitionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  competitionBrand: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  categoryBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#6B7280',
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
  leaderSection: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  leaderTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  leaderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  leaderStats: {
    flexDirection: 'row',
  },
  leaderStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  leaderStatText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 2,
  },
  requirementsSection: {
    marginBottom: 16,
  },
  requirementsTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  requirementsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 4,
  },
  requirementText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  submitButton: {
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default DashboardScreen;


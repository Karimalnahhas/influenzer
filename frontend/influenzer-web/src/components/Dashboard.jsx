import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Trophy, 
  Clock, 
  DollarSign, 
  Users, 
  Play, 
  Heart, 
  Share2, 
  Eye,
  Plus,
  Filter,
  Search
} from 'lucide-react'
import { Input } from '@/components/ui/input.jsx'
import './Dashboard.css'

function Dashboard({ user, onVideoSubmission }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Mock competition data
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
  ]

  const userStats = {
    totalEarnings: 1250,
    competitionsWon: 3,
    totalViews: 45600,
    currentRank: 'Rising Star'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Influenzer
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="font-semibold">${userStats.totalEarnings}</span>
              </div>
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                  <p className="text-2xl font-bold">${userStats.totalEarnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Trophy className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Competitions Won</p>
                  <p className="text-2xl font-bold">{userStats.competitionsWon}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold">{userStats.totalViews.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Current Rank</p>
                  <p className="text-2xl font-bold">{userStats.currentRank}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Active Competitions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Active Competitions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{competition.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        by {competition.brand}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{competition.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{competition.description}</p>
                  
                  {/* Prize and Time */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{competition.prize}</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{competition.timeLeft}</span>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{competition.participants} participants</span>
                  </div>

                  {/* Current Leader */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-2">Current Leader</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{competition.topVideo.creator}</span>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {competition.topVideo.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {competition.topVideo.likes}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="h-3 w-3 mr-1" />
                          {competition.topVideo.shares}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Requirements</p>
                    <div className="flex flex-wrap gap-1">
                      {competition.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full"
                    onClick={() => onVideoSubmission(competition.id)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Submit Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Upload, 
  Play, 
  Pause, 
  RotateCcw, 
  Check, 
  X, 
  Clock, 
  DollarSign,
  Users,
  ArrowLeft,
  Share2,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react'
import './VideoSubmission.css'

function VideoSubmission({ competition, onBack, onSubmit }) {
  const [videoFile, setVideoFile] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hashtags, setHashtags] = useState('')
  const [shareToSocial, setShareToSocial] = useState({
    instagram: false,
    tiktok: false,
    twitter: false,
    youtube: false
  })
  
  const videoRef = useRef(null)
  const fileInputRef = useRef(null)

  // Mock competition data if not provided
  const comp = competition || {
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
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
      const url = URL.createObjectURL(file)
      setVideoPreview(url)
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!videoFile) return

    setIsUploading(true)
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // Simulate submission
    const submissionData = {
      competitionId: comp.id,
      videoFile,
      title,
      description,
      hashtags: hashtags.split(' ').filter(tag => tag.startsWith('#')),
      shareToSocial
    }

    onSubmit(submissionData)
    setIsUploading(false)
  }

  const toggleSocialShare = (platform) => {
    setShareToSocial(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold">Submit Video</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competition Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{comp.title}</CardTitle>
                <CardDescription>by {comp.brand}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{comp.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{comp.prize}</span>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{comp.timeLeft}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{comp.participants} participants</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Requirements</p>
                  <div className="space-y-1">
                    {comp.requirements.map((req, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check className="h-3 w-3 text-green-600 mr-2" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Submission Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Video Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload Your Video</CardTitle>
                  <CardDescription>
                    Upload your competition entry video (max 100MB)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!videoPreview ? (
                    <div 
                      className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium">Click to upload video</p>
                      <p className="text-sm text-muted-foreground">
                        MP4, MOV, AVI up to 100MB
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative bg-black rounded-lg overflow-hidden">
                        <video
                          ref={videoRef}
                          src={videoPreview}
                          className="w-full h-64 object-contain"
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            type="button"
                            variant="secondary"
                            size="lg"
                            onClick={handlePlayPause}
                            className="bg-black/50 hover:bg-black/70"
                          >
                            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {videoFile?.name} ({(videoFile?.size / 1024 / 1024).toFixed(1)} MB)
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setVideoFile(null)
                            setVideoPreview(null)
                            setIsPlaying(false)
                          }}
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Replace
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Video Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Video Details</CardTitle>
                  <CardDescription>
                    Add a title and description for your submission
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input
                      placeholder="Give your video a catchy title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea
                      placeholder="Describe your video and how it meets the competition requirements..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Hashtags</label>
                    <Input
                      placeholder="#NikeStyle #Fashion #OOTD"
                      value={hashtags}
                      onChange={(e) => setHashtags(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Include required hashtags and add your own
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle>Share to Social Media</CardTitle>
                  <CardDescription>
                    Automatically share your submission to boost engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={shareToSocial.instagram ? "default" : "outline"}
                      onClick={() => toggleSocialShare('instagram')}
                      className="justify-start"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                      {shareToSocial.instagram && <Check className="h-4 w-4 ml-auto" />}
                    </Button>
                    <Button
                      type="button"
                      variant={shareToSocial.tiktok ? "default" : "outline"}
                      onClick={() => toggleSocialShare('tiktok')}
                      className="justify-start"
                    >
                      <div className="h-4 w-4 mr-2 bg-current rounded-sm" />
                      TikTok
                      {shareToSocial.tiktok && <Check className="h-4 w-4 ml-auto" />}
                    </Button>
                    <Button
                      type="button"
                      variant={shareToSocial.twitter ? "default" : "outline"}
                      onClick={() => toggleSocialShare('twitter')}
                      className="justify-start"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      X/Twitter
                      {shareToSocial.twitter && <Check className="h-4 w-4 ml-auto" />}
                    </Button>
                    <Button
                      type="button"
                      variant={shareToSocial.youtube ? "default" : "outline"}
                      onClick={() => toggleSocialShare('youtube')}
                      className="justify-start"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      YouTube
                      {shareToSocial.youtube && <Check className="h-4 w-4 ml-auto" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Card>
                <CardContent className="pt-6">
                  {isUploading ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Uploading video...</span>
                        <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                    </div>
                  ) : (
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={!videoFile || !title}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Submit Video Entry
                    </Button>
                  )}
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSubmission


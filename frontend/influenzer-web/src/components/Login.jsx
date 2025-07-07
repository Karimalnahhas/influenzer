import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'
import './Login.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailLogin = (e) => {
    e.preventDefault()
    // Simulate login
    onLogin({ email, loginMethod: 'email' })
  }

  const handleSocialLogin = (platform) => {
    // Simulate social login
    onLogin({ platform, loginMethod: 'social' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Influenzer
          </CardTitle>
          <CardDescription className="text-lg">
            Join the gamified micro-influencer revolution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => handleSocialLogin('instagram')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Continue with Instagram
            </Button>
            <Button 
              onClick={() => handleSocialLogin('tiktok')}
              className="w-full bg-black hover:bg-gray-800"
            >
              <div className="mr-2 h-4 w-4 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">T</span>
              </div>
              Continue with TikTok
            </Button>
            <Button 
              onClick={() => handleSocialLogin('twitter')}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Continue with X/Twitter
            </Button>
            <Button 
              onClick={() => handleSocialLogin('youtube')}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              <Youtube className="mr-2 h-4 w-4" />
              Continue with YouTube
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-muted-foreground text-sm">or</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Sign In with Email
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" className="p-0 h-auto text-purple-600">
              Sign up here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login


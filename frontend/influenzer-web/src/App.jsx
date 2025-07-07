import { useState } from 'react'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import VideoSubmission from './components/VideoSubmission.jsx'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [user, setUser] = useState(null)
  const [selectedCompetition, setSelectedCompetition] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
    setCurrentScreen('dashboard')
  }

  const handleVideoSubmission = (competitionId) => {
    // In a real app, you'd fetch competition details by ID
    setSelectedCompetition({ id: competitionId })
    setCurrentScreen('videoSubmission')
  }

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard')
    setSelectedCompetition(null)
  }

  const handleSubmitVideo = (submissionData) => {
    // In a real app, you'd send this to your backend
    console.log('Video submitted:', submissionData)
    // Show success message and return to dashboard
    alert('Video submitted successfully!')
    handleBackToDashboard()
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentScreen('login')
  }

  return (
    <div className="App">
      {currentScreen === 'login' && (
        <Login onLogin={handleLogin} />
      )}
      
      {currentScreen === 'dashboard' && (
        <Dashboard 
          user={user}
          onVideoSubmission={handleVideoSubmission}
          onLogout={handleLogout}
        />
      )}
      
      {currentScreen === 'videoSubmission' && (
        <VideoSubmission 
          competition={selectedCompetition}
          onBack={handleBackToDashboard}
          onSubmit={handleSubmitVideo}
        />
      )}
    </div>
  )
}

export default App


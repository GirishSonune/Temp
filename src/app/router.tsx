import React from 'react'
import { createBrowserRouter, Navigate, Outlet, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Matches from '../pages/Matches'
import Chat from '../pages/Chat'
import Itinerary from '../pages/Itinerary'
import Login from '../pages/Login'
import NavBar from '../components/NavBar'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../services/firebase'

function useAuth() {
  const [user, setUser] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u: User | null) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])
  return { user, loading }
}

function Protected() {
  const { user, loading } = useAuth()
  if (loading) return <div>Loading…</div>
  if (!user) return <Navigate to="/login" replace />
  return <Outlet />
}

function RootLayout() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 16 }}>
        <Outlet />
      </div>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'discover', element: <Discover /> },
      {
        element: <Protected />,
        children: [
          { path: 'matches', element: <Matches /> },
          { path: 'chat', element: <Chat /> },
          { path: 'itinerary', element: <Itinerary /> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: '*', element: <div>Not Found — <Link to="/">Go Home</Link></div> },
    ],
  },
])

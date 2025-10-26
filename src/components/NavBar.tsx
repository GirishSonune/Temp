import { Link, useNavigate } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useTranslation } from 'react-i18next'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebase'

export default function NavBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  async function onLogout() {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <strong className="text-xl font-bold text-primary-600 dark:text-primary-400">
              {t('app.title')}
            </strong>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="nav-link">{t('nav.home')}</Link>
                <Link to="/discover" className="nav-link">{t('nav.discover')}</Link>
                <Link to="/matches" className="nav-link">{t('nav.matches')}</Link>
                <Link to="/chat" className="nav-link">{t('nav.chat')}</Link>
                <Link to="/itinerary" className="nav-link">{t('nav.itinerary')}</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <button onClick={onLogout} className="btn btn-secondary">
              {t('app.logout')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

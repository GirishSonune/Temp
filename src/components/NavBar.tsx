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
    <header style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #eee' }}>
      <strong>{t('app.title')}</strong>
      <Link to="/">{t('nav.home')}</Link>
      <Link to="/discover">{t('nav.discover')}</Link>
      <Link to="/matches">{t('nav.matches')}</Link>
      <Link to="/chat">{t('nav.chat')}</Link>
      <Link to="/itinerary">{t('nav.itinerary')}</Link>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <LanguageToggle />
        <button onClick={onLogout}>{t('app.logout')}</button>
      </div>
    </header>
  )
}

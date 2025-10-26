import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  return (
    <button onClick={() => i18n.changeLanguage(isEn ? 'hi' : 'en')}>
      {isEn ? 'हिंदी' : 'English'}
    </button>
  )
}

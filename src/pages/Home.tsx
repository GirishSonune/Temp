import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()
  
  return (
    <div className="relative bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl animate-fade-in">
                  <span className="block">{t('home.welcome')}</span>
                  <span className="block text-primary-600">{t('home.subtitle')}</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 animate-slide-up">
                  {t('home.description')}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/discover"
                      className="btn btn-primary flex w-full items-center justify-center"
                    >
                      {t('home.getStarted')}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/matches"
                      className="btn btn-secondary flex w-full items-center justify-center"
                    >
                      {t('home.findMatches')}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl animate-fade-in">
              {t('home.featuresTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
              {t('home.featuresSubtitle')}
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t('home.feature1Title'),
                description: t('home.feature1Description'),
                icon: '🌍',
              },
              {
                title: t('home.feature2Title'),
                description: t('home.feature2Description'),
                icon: '🤝',
              },
              {
                title: t('home.feature3Title'),
                description: t('home.feature3Description'),
                icon: '✈️',
              },
            ].map((feature, index) => (
              <div key={index} 
                className="card hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('home.ctaTitle')}</span>
            <span className="block text-primary-200">{t('home.ctaSubtitle')}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/discover"
                className="btn bg-white text-primary-600 hover:bg-primary-50"
              >
                {t('home.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

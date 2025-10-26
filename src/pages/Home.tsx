import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {t('home.welcome')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t('home.subtitle')}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/discover"
                  className="btn btn-primary"
                >
                  {t('home.getStarted')}
                </a>
                <a
                  href="/matches"
                  className="btn btn-secondary"
                >
                  {t('home.findMatches')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t('home.featuresTitle')}
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t('home.feature1Title'),
                  description: t('home.feature1Description'),
                },
                {
                  title: t('home.feature2Title'),
                  description: t('home.feature2Description'),
                },
                {
                  title: t('home.feature3Title'),
                  description: t('home.feature3Description'),
                },
              ].map((feature, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

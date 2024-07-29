import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'How to get a referral.',
    description:
      'To get a referral, speak with your primary care physician about your eye concerns, and they can direct you to a trusted specialist.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Check my symptoms.',
    description: "If you're experiencing unusual vision changes, use our symptom checker tool or consult an eye care professional to identify potential issues.",
    icon: LockClosedIcon,
  },
  {
    name: 'After my surgery.',
    description: "After surgery care involves following your doctor's instructions closely, which may include using prescribed eye drops, avoiding strenuous activities, and attending follow-up appointments.",
    icon: ServerIcon,
  },
]

export default function QuickLinks() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Health Pathway</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cateracts Directory</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Cataracts directory provides comprehensive information and resources for individuals seeking to understand and manage cataracts. 
              This directory includes detailed descriptions of cataract symptoms, causes, and the progression of the condition. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="hospitalLobby.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

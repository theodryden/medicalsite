import React from 'react';
import './TreatmentSection.css';

const features = [
  {
    name: 'How does it work?',
    description: 'We’ll tell you what to expect at every stage of your patient journey, answer any questions you have about your treatment, and be there to support you every step of the way.',
    imgSrc: 'ladyHospital.jpg', // Replace with the actual path to your image
  },
  {
    name: 'Life changing',
    description: 'Cataract surgery allows you to get back to enjoying your hobbies and seeing the people you love, with 99% of patients confirming it really improves their quality of life.',
    imgSrc: 'ladyHospital.jpg', // Replace with the actual path to your image
  },
  {
    name: 'Cataracts treatment',
    description: 'Everything you need to know about your surgery/treatment, including what to expect when you visit your SpaMedica hospital for the first time.',
    imgSrc: 'ladyHospital.jpg', // Replace with the actual path to your image
  },
  {
    name: 'Locations',
    description: "With over 50 specialist eye hospitals across the country - and more scheduled to open next year - there's bound to be a SpaMedica near you.",
    imgSrc: 'ladyHospital.jpg', // Replace with the actual path to your image
  },
];

export default function TreatmentSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Locations Across The UK</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get back the things you enjoy most
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DrydenMedica is the UK’s largest provider of NHS cataract surgery with an average four-week waiting time for treatment and excellent patient outcomes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <img src={feature.imgSrc} alt={feature.name} className="h-10 w-10 rounded-lg object-cover" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}


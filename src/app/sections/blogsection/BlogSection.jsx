const posts = [
    {
      id: 1,
      title: 'The Anatomy of the Human Eye',
      href: '#',
      description:
        'The human eye is a complex and intricate organ, essential for the sense of vision. It consists of several key parts that work together to capture and process light. The outermost layer, the cornea, is a transparent dome that focuses incoming light. Behind the cornea is the iris, the colored part of the eye, which controls the size of the pupil and the amount of light that enters.',
      date: 'Mar 18, 2024',
      datetime: '2024-03-16',
      category: { title: 'Anatomy', href: '#' },
      author: {
        name: 'Theo Dryden',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          '../../theodrydenphoto.jpg',
      },   
    },
    {
        id: 1,
        title: 'Common Eye Diseases and Their Treatments',
        href: '#',
        description:
          "Eye diseases can significantly impact vision and quality of life if not properly managed. Some common eye conditions include cataracts, glaucoma, macular degeneration, and diabetic retinopathy. Cataracts, characterized by clouding of the eye's lens, can be treated with surgery to replace the lens.",
        date: 'Mar 4, 2024',
        datetime: '2024-03-16',
        category: { title: 'Common Diseases', href: '#' },
        author: {
          name: 'Theo Dryden',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            '../../theodrydenphoto.jpg',
        },   
      },
      {
        id: 1,
        title: 'The Impact of Digital Screens on Eye Health',
        href: '#',
        description:
          "In today's digital age, prolonged use of digital screens has become a common concern for eye health. Extended screen time can lead to digital eye strain, also known as computer vision syndrome, characterized by symptoms like dry eyes, headaches, blurred vision, and neck and shoulder pain.",
        date: 'Jan 16, 2024',
        datetime: '2024-03-16',
        category: { title: 'Environmental', href: '#' },
        author: {
          name: 'Theo Dryden',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            '../../theodrydenphoto.jpg',
        },   
      },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to manage your eye health with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
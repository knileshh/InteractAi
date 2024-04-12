const posts = [
    {
        id: 1,
        title: 'Be a 10x yourself',
        href: '#',
        description:
            'A man can only do a few things, but with Interact Ai you can do a lot, Manage how to plan your party without even thinking, just ask Interact Ai to prepare a list. Voila!',
        date: 'Mar 19, 2024',
        datetime: '2024-03-19',
        category: { title: 'Finance', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'CTO | Foster Care',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        },
    },
    {
        id: 2,
        title: 'Need to improve the email?',
        href: '#',
        description:
            'With Interact Ai at your side, you can quickly go through and iterate through various versions of the same e-mail. and pick the one that suits you the best.',
        date: 'Mar 19, 2024',
        datetime: '2024-03-19',
        category: { title: 'Product', href: '#' },
        author: {
            name: 'Saige Fuentes',
            role: 'CFO | Product Hunt',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 3,
        title: 'Need help with new sales pitch?',
        href: '#',
        description:
            'Get ready to get that client, with you latest and hot sales pitch. Now you can easily get new and great sales pitch inspiration from Interact Ai. Save a lot of time 💓',
        date: 'Mar 30, 2024',
        datetime: '2024-03-30',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Bowen Higgins',
            role: 'Sales | Atlassian',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 4,
        title: 'Did you forget how to parse that data? Again!',
        href: '#',
        description:
            'No worries, with Interact Ai at your fingertips you can just ask about it and get a really concise and quick answer. No more hopping blog to blog seeking the answer.',
        date: 'Mar 12, 2024',
        datetime: '2024-03-12',
        category: { title: 'Education', href: '#' },
        author: {
            name: 'Raju Sharma',
            role: 'SDE | CodeNation',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 5,
        title: 'Find the flavors quickly',
        href: '#',
        description:
            'Trying to find a new flavor to add to my dish is really easy with Interact Ai, No need to dive into those cookbooks again. Thanks',
        date: 'Mar 29, 2024',
        datetime: '2024-03-29',
        category: { title: 'Search', href: '#' },
        author: {
            name: 'Vineeta Kapoor',
            role: 'Chef | V Kitchen',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 6,
        title: 'Beat that essay deadline 👊',
        href: '#',
        description:
            "Forgot about the essay you have to write? Interact Ai is here to save the day and you marks. Create the essay in <30 min with the help of Interact Ai than taking up a whole day.",
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: 'Research', href: '#' },
        author: {
            name: 'Vikash Gokhale',
            role: 'Student | MIT',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1549237511-6b64e006ce65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },

    // More posts...
]

export default function PeopleSay() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        What others are saying about our product.
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
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50 object-cover" />
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

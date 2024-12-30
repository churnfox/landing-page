import { Link2, Brain, Lightbulb, TrendingUp } from 'lucide-react'

const steps = [
    {
        icon: Link2,
        title: 'Connect Your Data',
        description: 'Easily integrate your reviews, feedback, and customer data from platforms like email, surveys, and social media.',
        illustration: (
            <div className="relative w-12 h-32 md:w-20 md:h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-900 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-900 rounded-full" />
            </div>
        )
    },
    {
        icon: Brain,
        title: 'AI-Driven Insights',
        description: 'Let our AI analyze the data to identify trends, key pain points, and actionable opportunities.',
        illustration: (
            <div className="relative w-32 h-32 md:w-27 md:h-27">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-black-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 via-purple-600 to-black-600 rounded-full" />
                {/* <div className="absolute inset-8 bg-gradient-to-tr from-blue-700 via-purple-700 to-pink-700 rounded-full" /> */}
            </div>
        )
    },
    {
        icon: Lightbulb,
        title: 'Get Actionable Recommendations',
        description: 'Receive clear, prioritized insights to improve retention, enhance customer experience, and reduce churn.',
        illustration: (
            <div className="relative w-32 h-32 md:w-35 md:h-35">
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-purple-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-bl from-pink-600 via-purple-600 to-red-600 rounded-full" />
            </div>
        )
    },
    {
        icon: TrendingUp,
        title: 'Optimize and Grow',
        description: 'Track results over time and refine your strategies to retain more customers and drive growth.',
        illustration: (
            <div className="relative w-28 h-28 md:w-20 md:h-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse transform rotate-45" />
                <div className="absolute inset-4 bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600 rounded-lg transform rotate-45" />
            </div>
        )
    }
]

export default function HowItWorks() {
    return (
        <section id='how-it-works' className="bg-black py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-xl text-gray-400">Simple steps to transform your customer feedback into actionable insights</p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-pink-300/90 to-purple-500" />

                    {/* Steps */}
                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-glow" />

                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-center' : 'md:text-center'} space-y-4`}>
                                        <div className={`flex items-center gap-3 md:justify-center justify-start ${index % 2 === 0 ? 'md:justify-center' : 'md:justify-center'}`}>
                                            <div className={`rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 backdrop-blur-sm border border-purple-500/20 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'
                                                }`}>
                                                <step.icon className="h-6 w-6 text-purple-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <div className="text-gray-400 text-lg max-w-md mx-auto md:mx-0 md:justify-start">
                                            {Array.isArray(step.description) ? (
                                                <ul className="space-y-2 list-none">
                                                    {step.description.map((item, i) => (
                                                        <li key={i} className={`${i === 0 ? 'text-gray-300 font-medium' : 'text-gray-400'}`}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{step.description}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Illustration */}
                                    <div className="hidden md:flex-1 md:flex justify-center">
                                        {step.illustration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
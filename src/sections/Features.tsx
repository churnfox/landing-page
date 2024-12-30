import React from 'react';
import { MessageCircle, TrendingUp, UserMinus, Target, Brain, BarChart3, Sparkles, LineChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Monitor 30+ channels',
      description: 'Track customer discussions across social media and support platforms.',
    },
    {
      icon: TrendingUp,
      title: 'Spot Trending Issues',
      description: 'Identify problems before they impact your support queue.',
    },
    {
      icon: UserMinus,
      title: 'Predict Churn Risks',
      description: 'Use social sentiment to forecast and prevent customer churn.',
    },
    {
      icon: Target,
      title: 'Feature Gap Analysis',
      description: 'Stay ahead of competitors by identifying product opportunities.',
    },
    {
      icon: Brain,
      title: 'Theme Discovery',
      description: 'Uncover patterns in customer feedback and conversations.',
    },
    {
      icon: BarChart3,
      title: 'Impact Assessment',
      description: 'Understand the scope and significance of each issue.',
    },
    {
      icon: Sparkles,
      title: 'AI Insights',
      description: 'Access AI-generated summaries and actionable recommendations.',
    },
    {
      icon: LineChart,
      title: 'ROI-Focused Actions',
      description: 'Get data-driven strategies to improve retention.',
    },
  ];

  return (
    <section id="features" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            360° Feedback Intelligence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive insights from every customer touchpoint.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
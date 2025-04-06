'use client';

import { useEffect, useState } from 'react';
import { Topic } from '../../../types';
import { fetchTopicById } from '../../../api';

export default function TopicPage({ params }: { params: { id: string } }) {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTopic() {
      try {
        const fetchedTopic = await fetchTopicById(params.id);
        setTopic(fetchedTopic);
      } catch (error) {
        console.error('Failed to load topic:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTopic();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#FDCA6F] to-[#01CFC9] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#FDCA6F] to-[#01CFC9] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Topic Not Found</h1>
          <p className="text-white text-xl">The topic you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#FDCA6F] to-[#01CFC9] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-6">{topic.topic}</h1>
        <p className="text-xl text-white/90 mb-8">{topic.description}</p>
        
        <div className="space-y-6">
          {topic.content.map((card, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{card.title}</h2>
              <p className="text-white/90">{card.htmlContent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Topic } from '../types';
import TopicCard from './TopicCard';
import { fetchTopics } from '../api';

export default function PopularTopics() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTopics();
  }, );

  async function loadTopics() {
    try {
      const fetchedTopics = await fetchTopics();
      setTopics(fetchedTopics);
      for (let i = 0; i < topics.length; i++) {
        console.log(topics[i]);
      }
    } catch (error) {
      console.error('Failed to load topics:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 bg-white/80 backdrop-blur-sm py-12 rounded-2xl">
      <main>
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center lg:text-left">Popular Topics</h2>
        {isLoading ? (
          <div className="text-center py-8">Loading topics...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <TopicCard key={topic._id} topic={topic} index={index} />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ScrollLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}
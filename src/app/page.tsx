'use client';

import { useState, useEffect } from 'react';
import { Topic } from '../types';
import TopicCard from '../components/TopicCard';
import { fetchTopics, generateLearningCards } from '../api';

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    topic: '',
    level: 'I\'m new to this topic',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    loadTopics();
  }, []);
 
  async function loadTopics() {
    try {
      const fetchedTopics = await fetchTopics();
      setTopics(fetchedTopics);
      console.log(fetchedTopics)
    } catch (error) {
      console.error('Failed to load topics:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const result = await generateLearningCards(formData);
      // Handle the generated cards result here
      console.log('Generated cards:', result);
      // You might want to redirect to a new page or show the cards
    } catch (error) {
      console.error('Failed to generate cards:', error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#FDCA6F] to-[#01CFC9] py-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl lg:text-left text-center">
              <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
                Learn anything,
                <br />
                one scroll at a time
              </h1>
              <p className="text-xl text-white/90">
                Transform any topic into bite-sized, scrollable learning cards. Perfect for quick learning and easy revision.
              </p>
            </div>

            {/* Content Generation Form */}
            <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Generate Learning Content</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What would you like to learn?</label>
                  <input
                    type="text"
                    placeholder="Enter a topic (e.g. JavaScript Basics)"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#01CFC9] focus:border-transparent"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select your level</label>
                  <select 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#01CFC9] focus:border-transparent"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  >
                    <option>I'm new to this topic</option>
                    <option>I know some basics</option>
                    <option>I can understand intermediate concepts</option>
                    <option>I'm at an advanced level</option>
                    <option>I'm an expert looking to refresh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional requirements (optional)</label>
                  <textarea
                    placeholder="Any specific areas you'd like to focus on?"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#01CFC9] focus:border-transparent"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#01CFC9] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#00B8B3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isGenerating}
                >
                  {isGenerating ? 'Generating...' : 'Generate Learning Cards'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 bg-white/80 backdrop-blur-sm py-12 rounded-2xl">
          <main>
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center lg:text-left">Popular Topics</h2>
            {isLoading ? (
              <div className="text-center py-8">Loading topics...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {topics.map((topic, index) => (
                  <TopicCard key={topic.id} topic={topic} index={index} />
                ))}
              </div>
            )}
          </main>

          <footer className="mt-16 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ScrollLearn. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

import { notFound } from 'next/navigation';
import TopicLayout from '../../../components/TopicLayout';
import { fetchTopicById } from '../../../api';

interface TopicPageProps {
  params: {
    topicId: string;
  };
}

export default async function TopicPage({ params }: TopicPageProps) {

  
  try {
    const topic = await fetchTopicById(params.topicId);
    
    if (!topic) {
      notFound();
    }

    return <TopicLayout topic={topic} />;
  } catch (error) {
    console.error('Error fetching topic:', error);
    notFound();
  }
}


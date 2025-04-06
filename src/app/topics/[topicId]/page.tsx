import { notFound } from 'next/navigation';
import { topics } from '../../../data/mockData';
import TopicLayout from '../../../components/TopicLayout';

interface TopicPageProps {
  params: {
    topicId: string;
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const { topicId } = params;
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  return <TopicLayout topic={topic} />;
}

// Generate static paths for all topics
export function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }));
}
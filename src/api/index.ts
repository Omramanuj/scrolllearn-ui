import { Topic } from '../types';

const API_BASE_URL = 'http://localhost:6969/api';

export async function fetchTopics(): Promise<Topic[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/topics`);
    if (!response.ok) {
      throw new Error('Failed to fetch topics');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching topics:', error);
    throw error;
  }
}

interface GenerateCardsRequest {
  topic: string;
  level: string;
  description: string;
}

export async function fetchTopicById(id: string): Promise<Topic> {
  try {
    const response = await fetch(`${API_BASE_URL}/topics-content/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch topic');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching topic:', error);
    throw error;
  }
}

export async function generateLearningCards(request: GenerateCardsRequest) {
  try {
    const response = await fetch(`${API_BASE_URL}/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to generate learning cards');
    }
    console.log(response.json())
    return response.json();
  } catch (error) {
    console.error('Error generating learning cards:', error);
    throw error;
  }
}
import { AtpAgent } from '@atproto/api';

export const Agent = new AtpAgent({
  service: 'https://bsky.social',
});

export const getTimeline = async () => {
  try {
    const response = await Agent.getTimeline({ limit: 20 });
    return response;
  } catch (error) {
    console.error('Failed to load timeline:', error);
    return null;
  }
};

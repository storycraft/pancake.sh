import { Octokit } from '@octokit/rest';
import { PAT_GITHUB } from 'astro:env/server';

const octokit = new Octokit({
  auth: PAT_GITHUB,
});

const { data } = await octokit.users.getAuthenticated();

export const user = {
  loginId: data.login,
  email: data.email,
  profile: {
    name: data.name || '',
    avatarUrl: data.avatar_url,
    statusMessage: data.bio,
  },
  socials: {
    twitter: data.twitter_username ?? undefined,
    youtube: 'storycraft8814',
  },
};

import { Octokit } from '@octokit/rest';
import { GITHUB_TOKEN } from 'astro:env/server';

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
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

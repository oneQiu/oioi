'use client';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';

console.log(process.env.NODE_ENV);
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always',
  });
}

export const Providers: RFC = ({ children }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

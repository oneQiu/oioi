import { PostHogContent } from '@/components/PostHog';

export default function PostHog() {
  return (
    <div className={'flex flex-col gap-2'}>
      <h1 className={'text-3xl'}>Post Hog</h1>
      <PostHogContent />
    </div>
  );
}

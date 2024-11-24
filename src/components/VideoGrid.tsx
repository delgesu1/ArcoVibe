import { AnimatePresence, motion } from 'framer-motion';
import { VideoCard } from './VideoCard';
import type { Video } from '@/lib/data';

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-[1400px] mx-auto"
    >
      <AnimatePresence mode="popLayout">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogHeader,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Video } from '@/lib/data';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden dark:bg-neutral-900/50 dark:hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:border-neutral-800/50 transition-shadow duration-300">
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              />
              <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                }}
              >
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{video.title}</h3>
              <div className="flex flex-wrap gap-2">
                {video.moods.map((mood) => (
                  <Badge key={mood} variant="secondary">
                    {mood}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{video.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
import { useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoGrid } from '@/components/VideoGrid';
import { MoodFilter } from '@/components/MoodFilter';
import { moods, videos } from '@/lib/data';
import { motion } from 'framer-motion';

function App() {
  const [selectedMoods, setSelectedMoods] = useState<Set<string>>(new Set());
  const [isDark, setIsDark] = useState(false);

  const filteredVideos = videos.filter((video) =>
    selectedMoods.size === 0
      ? true
      : Array.from(selectedMoods).every((mood) => video.moods.includes(mood))
  );

  const handleMoodToggle = (mood: string) => {
    setSelectedMoods((prev) => {
      const next = new Set(prev);
      if (next.has(mood)) {
        next.delete(mood);
      } else {
        if (next.size < 3) {
          next.add(mood);
        }
      }
      return next;
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleCategoryShuffle = (category: string) => {
    const categoryVideos = videos.filter(video => 
      video.moods.some(mood => mood === category)
    );

    if (categoryVideos.length === 0) {
      console.log('No videos found for this category.');
      return; // Early return if no videos are found
    }

    const randomVideo = categoryVideos[Math.floor(Math.random() * categoryVideos.length)];
    // Handle showing the random video (perhaps using the same dialog as VideoCard)
    console.log(randomVideo);
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-neutral-800/40 dark:via-neutral-900/80 dark:to-neutral-950 dark:before:content-[''] dark:before:fixed dark:before:inset-0 dark:before:bg-[radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.02),transparent_20%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.02),transparent_20%)] dark:before:pointer-events-none">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-neutral-800/50 dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:bg-neutral-900/50">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
              Arco
            </h1>
            <span className="text-2xl font-light tracking-wide text-neutral-500 dark:text-neutral-400">
              Vibe
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </Button>
          </motion.div>
        </div>
      </header>
      <main className="container mx-auto">
        <MoodFilter
          moods={moods}
          selectedMoods={selectedMoods}
          onMoodToggle={handleMoodToggle}
          handleCategoryShuffle={handleCategoryShuffle} // Added missing prop
        />
        <VideoGrid videos={filteredVideos} />
      </main>
    </div>
  );
}

export default App;
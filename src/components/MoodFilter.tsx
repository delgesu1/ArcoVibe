import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { categoryColors, getMoodCategory } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Shuffle } from 'lucide-react';

interface MoodFilterProps {
  moods: readonly string[];
  selectedMoods: Set<string>;
  onMoodToggle: (mood: string) => void;
  handleCategoryShuffle: (category: string) => void;
  handleShuffleAll: () => void;
}

// Group names for your categories
const categoryNames = {
  '1': 'Joyful & Bright',
  '2': 'Peaceful & Calm',
  '3': 'Contemplative',
  '4': 'Dramatic & Intense',
  '5': 'Heroic & Grand',
  '7': 'Passionate & Intimate',
  '8': 'Mystical & Ethereal',
  '9': 'Powerful & Dynamic',
  '10': 'Natural & Temporal'
} as const;

type CategoryKey = keyof typeof categoryNames;

export function MoodFilter({ moods, selectedMoods, onMoodToggle, handleCategoryShuffle, handleShuffleAll }: MoodFilterProps) {
  const isAtLimit = selectedMoods.size >= 3;

  // Group moods by category
  const moodsByCategory = moods.reduce((acc, mood) => {
    const category = String(getMoodCategory(mood)) as CategoryKey;
    if (!acc[category]) acc[category] = [];
    acc[category].push(mood);
    return acc;
  }, {} as Record<CategoryKey, string[]>);

  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:border-neutral-800/50 dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:bg-neutral-900/50">
      <div className="flex flex-wrap gap-4 p-6 max-w-[1400px] mx-auto">
        {Object.entries(moodsByCategory).map(([category, categoryMoods]) => {
          const selectedInCategory = categoryMoods.filter(mood => selectedMoods.has(mood));
          const hasSelected = selectedInCategory.length > 0;

          return (
            <div key={category} className="flex flex-col gap-2">
              <HoverCard openDelay={0} closeDelay={150}>
                <HoverCardTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <Button
                      variant="ghost"
                      className={`
                        group relative
                        px-4 py-2 rounded-lg font-medium
                        bg-gradient-to-r ${categoryColors[category as CategoryKey]}
                        text-white hover:opacity-90
                        transition-all duration-200
                        ${hasSelected ? 'ring-2 ring-white ring-opacity-50' : ''}
                      `}
                    >
                      {categoryNames[category as CategoryKey]}
                      {hasSelected && (
                        <span className="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-sm">
                          {selectedInCategory.length}
                        </span>
                      )}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <Shuffle className="h-4 w-4 text-white/70" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </HoverCardTrigger>

                <HoverCardContent 
                  side="bottom" 
                  align="start"
                  sideOffset={8}
                  alignOffset={-4}
                  className="w-[280px] p-3 bg-background/95 backdrop-blur-lg border shadow-lg"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {categoryMoods.map((mood) => {
                      const isSelected = selectedMoods.has(mood);
                      const isDisabled = !isSelected && isAtLimit;

                      return (
                        <motion.div
                          key={mood}
                          whileHover={{ scale: isDisabled ? 1 : 1.02 }}
                          whileTap={{ scale: isDisabled ? 1 : 0.98 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onMoodToggle(mood)}
                            disabled={isDisabled}
                            className={`
                              w-full text-sm whitespace-nowrap justify-start
                              ${isDisabled ? 'opacity-50' : ''}
                              ${isSelected ? 'bg-accent font-bold' : 'hover:bg-accent/50'}
                            `}
                          >
                            {mood}
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCategoryShuffle(category)}
                      className="w-full hover:bg-accent/50 text-sm font-medium"
                    >
                      <Shuffle className="h-4 w-4 mr-2" />
                      Shuffle
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              {/* Show selected moods below the category */}
              {hasSelected && (
                <div className="flex gap-1 flex-wrap">
                  {selectedInCategory.map(mood => (
                    <Badge
                      key={mood}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-destructive/20"
                      onClick={() => onMoodToggle(mood)}
                    >
                      {mood} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {/* Shuffle All Button */}
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleShuffleAll}
            className="w-full bg-white text-black hover:bg-gray-200 font-medium rounded-lg shadow-md transition-all duration-200"
          >
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle All
          </Button>
        </div>
      </div>
    </div>
  );
}
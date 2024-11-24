export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  moods: string[];
}

export const categoryColors = {
  1: 'from-amber-400 to-orange-500',
  2: 'from-sky-400 to-indigo-500',
  3: 'from-violet-400 to-purple-500',
  4: 'from-red-400 to-rose-500',
  5: 'from-emerald-400 to-teal-500',
  7: 'from-pink-400 to-rose-500',
  8: 'from-blue-400 to-indigo-500',
  9: 'from-red-500 to-orange-600',
  10: 'from-gray-400 to-slate-500'
} as const;

export const moods = [
  // Category 1
  'Joy', 'Triumphant', 'Playful', 'Radiant', 'Vibrant', 'Funny',
  // Category 2
  'Peaceful', 'Tranquil', 'Meditative', 'Dreamy', 'Warm', 'Nostalgic', 'Lyrical',
  // Category 3
  'Solemn', 'Poignant', 'Mournful', 'Yearning', 'Wistful', 'Introspective', 'Melancholy', 'Catharsis',
  // Category 4
  'Dramatic', 'Tense', 'Ominous', 'Brooding', 'Foreboding', 'Tragic', 'Fierce', 'Chiaroscuro', 'Dissonance',
  // Category 5
  'Heroic', 'Stately', 'Exalted', 'Epic',
  // Category 7
  'Sweeping', 'Sensual', 'Passionate', 'Intimate', 'Velvety',
  // Category 8
  'Ethereal', 'Enigmatic', 'Transcendent', 'Mystical', 'Spiritual', 'Ambiguity', 'Juxtaposition', 'Symbolism', 'Dimension',
  // Category 9
  'Relentless', 'Ferocious', 'Commanding', 'Momentum', 'Arc',
  // Category 10
  'Dawn', 'Twilight', 'Storm', 'Sea', 'Dance', 'Procession', 'Triumph', 'Lament', 'Labyrinth'
] as const;

export const videos: Video[] = [
  {
    id: '1',
    title: 'Beethoven Symphony No. 9 - Ode to Joy',
    url: 'https://www.youtube.com/watch?v=t3217H8JppI',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    moods: ['Joy', 'Heroic', 'Triumphant'],
  },
  {
    id: '2',
    title: 'Mozart Piano Concerto No. 21',
    url: 'https://www.youtube.com/watch?v=fNU-XAZjhzA',
    thumbnail: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&q=80',
    moods: ['Peaceful', 'Lyrical', 'Ethereal'],
  },
  {
    id: '3',
    title: 'Bach Brandenburg Concertos',
    url: 'https://www.youtube.com/watch?v=NCPM8DEsvmc',
    thumbnail: 'https://images.unsplash.com/photo-1569845312740-5056eaf076b2?w=800&q=80',
    moods: ['Playful', 'Dance', 'Lyrical'],
  },
  {
    id: '4',
    title: 'Debussy Clair de Lune',
    url: 'https://www.youtube.com/watch?v=WNcsUNKlAKw',
    thumbnail: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&q=80',
    moods: ['Ethereal', 'Dreamy', 'Intimate'],
  },
  {
    id: '5',
    title: 'Tchaikovsky Swan Lake',
    url: 'https://www.youtube.com/watch?v=9rJoB7y6Ncs',
    thumbnail: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&q=80',
    moods: ['Dramatic', 'Passionate', 'Dance'],
  },
  {
    id: '6',
    title: 'Vivaldi Four Seasons',
    url: 'https://www.youtube.com/watch?v=GRxofEmo3HA',
    thumbnail: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80',
    moods: ['Storm', 'Vibrant', 'Dramatic'],
  },
  {
    id: '7',
    title: 'Mahler Symphony No. 5',
    url: 'https://www.youtube.com/watch?v=vOvXhyldUko',
    thumbnail: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80',
    moods: ['Heroic', 'Passionate', 'Tragic'],
  },
  {
    id: '8',
    title: 'Chopin Nocturnes',
    url: 'https://www.youtube.com/watch?v=9E6b3swbnWg',
    thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
    moods: ['Intimate', 'Dreamy', 'Wistful'],
  },
  {
    id: '9',
    title: 'Glass Metamorphosis',
    url: 'https://www.youtube.com/watch?v=M73x3O7dhmg',
    thumbnail: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=800&q=80',
    moods: ['Enigmatic', 'Momentum', 'Meditative'],
  },
  {
    id: '10',
    title: 'Shostakovich Symphony No. 5',
    url: 'https://www.youtube.com/watch?v=JH3T6YwwU9s',
    thumbnail: 'https://images.unsplash.com/photo-1610123598195-eea6b6be4c48?w=800&q=80',
    moods: ['Relentless', 'Tragic', 'Heroic'],
  },
  {
    id: '11',
    title: 'Gorecki Symphony No. 3',
    url: 'https://www.youtube.com/watch?v=r30D3SW4OVw',
    thumbnail: 'https://images.unsplash.com/photo-1528032947483-4e1df543253a?w=800&q=80',
    moods: ['Poignant', 'Spiritual', 'Lament'],
  },
  {
    id: '12',
    title: 'Pärt Fratres',
    url: 'https://www.youtube.com/watch?v=3X9LvC9WkkQ',
    thumbnail: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?w=800&q=80',
    moods: ['Spiritual', 'Tranquil', 'Introspective'],
  },
  {
    id: '13',
    title: 'Rachmaninoff Piano Concerto No. 2',
    url: 'https://www.youtube.com/watch?v=rEGOihjqO9w',
    thumbnail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
    moods: ['Passionate', 'Dramatic', 'Triumphant'],
  },
  {
    id: '14',
    title: 'Stravinsky Rite of Spring',
    url: 'https://www.youtube.com/watch?v=EkwqPJZe8ms',
    thumbnail: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80',
    moods: ['Ferocious', 'Dissonance', 'Storm'],
  },
  {
    id: '15',
    title: 'Vaughan Williams - The Lark Ascending',
    url: 'https://www.youtube.com/watch?v=IOWN5fQnzGk',
    thumbnail: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80',
    moods: ['Dawn', 'Ethereal', 'Lyrical'],
  },
  {
    id: '16',
    title: 'Sibelius Symphony No. 2',
    url: 'https://www.youtube.com/watch?v=SAOf46CXaaw',
    thumbnail: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80',
    moods: ['Heroic', 'Sweeping', 'Triumphant'],
  },
  {
    id: '17',
    title: 'Brahms Piano Quartet No. 1',
    url: 'https://www.youtube.com/watch?v=67G_ckKtNlw',
    thumbnail: 'https://images.unsplash.com/photo-1506747958701-808cb3805b0f?w=800&q=80',
    moods: ['Passionate', 'Dramatic', 'Momentum'],
  },
  {
    id: '18',
    title: 'Ligeti - Lux Aeterna',
    url: 'https://www.youtube.com/watch?v=-iVYu5lyX5M',
    thumbnail: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    moods: ['Mystical', 'Enigmatic', 'Brooding'],
  },
  {
    id: '19',
    title: 'Elgar - Cello Concerto',
    url: 'https://www.youtube.com/watch?v=OPhkZW_jwc0',
    thumbnail: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800&q=80',
    moods: ['Yearning', 'Nostalgic', 'Intimate'],
  },
  {
    id: '20',
    title: 'Holst - Neptune, the Mystic',
    url: 'https://www.youtube.com/watch?v=v4wuV14QlNM',
    thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    moods: ['Ethereal', 'Mystical', 'Twilight'],
  },
  {
    id: '21',
    title: 'Prokofiev - Dance of the Knights',
    url: 'https://www.youtube.com/watch?v=DUmq1cpcglQ',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    moods: ['Commanding', 'Fierce', 'Procession'],
  },
  {
    id: '22',
    title: 'Fauré - Requiem: In Paradisum',
    url: 'https://www.youtube.com/watch?v=6-i1ESIRKdA',
    thumbnail: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80',
    moods: ['Spiritual', 'Tranquil', 'Ethereal'],
  },
  {
    id: '23',
    title: 'Scriabin - Prometheus: Poem of Fire',
    url: 'https://www.youtube.com/watch?v=V3B7uQ5K0IU',
    thumbnail: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80',
    moods: ['Transcendent', 'Ferocious', 'Radiant'],
  },
  {
    id: '24',
    title: 'Smetana - The Moldau',
    url: 'https://www.youtube.com/watch?v=3G4NKzmfC-Q',
    thumbnail: 'https://images.unsplash.com/photo-1504214208698-ea446addfa7e?w=800&q=80',
    moods: ['Sweeping', 'Dance', 'Sea'],
  },
  {
    id: '25',
    title: 'Barber - Adagio for Strings',
    url: 'https://www.youtube.com/watch?v=WAoLJ8GbA4Y',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    moods: ['Poignant', 'Mournful', 'Ethereal'],
  },
  {
    id: '26',
    title: 'Ravel - Daphnis et Chloé',
    url: 'https://www.youtube.com/watch?v=YHrstmOPKBQ',
    thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
    moods: ['Dawn', 'Sensual', 'Ethereal'],
  },
  {
    id: '27',
    title: 'Wagner - Ride of the Valkyries',
    url: 'https://www.youtube.com/watch?v=GGU1P6lBW6Q',
    thumbnail: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=800&q=80',
    moods: ['Epic', 'Commanding', 'Storm'],
  },
  {
    id: '28',
    title: 'Pärt - Spiegel im Spiegel',
    url: 'https://www.youtube.com/watch?v=TJ6Mzvh3XCc',
    thumbnail: 'https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?w=800&q=80',
    moods: ['Meditative', 'Spiritual', 'Tranquil'],
  },
  {
    id: '29',
    title: 'Holst - Mars, the Bringer of War',
    url: 'https://www.youtube.com/watch?v=L0bcRCCg01I',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    moods: ['Relentless', 'Ominous', 'Commanding'],
  },
  {
    id: '30',
    title: 'Satie - Gymnopédies',
    url: 'https://www.youtube.com/watch?v=_fuIMye31Gw',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    moods: ['Dreamy', 'Introspective', 'Tranquil'],
  },
  {
    id: '31',
    title: 'Messiaen - Quartet for the End of Time',
    url: 'https://www.youtube.com/watch?v=UeSVu1zbF94',
    thumbnail: 'https://images.unsplash.com/photo-150268198915-ab09c46a05c1?w=800&q=80',
    moods: ['Mystical', 'Dissonance', 'Symbolism'],
  },
  {
    id: '32',
    title: 'Dvořák - Symphony No. 9 "From the New World"',
    url: 'https://www.youtube.com/watch?v=89jOPAGJq-M',
    thumbnail: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&q=80',
    moods: ['Epic', 'Nostalgic', 'Sweeping'],
  },
  {
    id: '33',
    title: 'Tallis - Spem in Alium',
    url: 'https://www.youtube.com/watch?v=iT-ZAAi4UQQ',
    thumbnail: 'https://images.unsplash.com/photo-1490077476659-095159692ab5?w=800&q=80',
    moods: ['Spiritual', 'Stately', 'Procession'],
  },
  {
    id: '34',
    title: 'Britten - Four Sea Interludes',
    url: 'https://www.youtube.com/watch?v=VTd2aXLTA84',
    thumbnail: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80',
    moods: ['Sea', 'Storm', 'Brooding'],
  },
  {
    id: '35',
    title: 'Schnittke - Concerto Grosso No. 1',
    url: 'https://www.youtube.com/watch?v=M3Xehs1rHfM',
    thumbnail: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=800&q=80',
    moods: ['Juxtaposition', 'Dissonance', 'Enigmatic'],
  },
  {
    id: '36',
    title: 'Penderecki - Threnody',
    url: 'https://www.youtube.com/watch?v=Dp3BlFZWJNA',
    thumbnail: 'https://images.unsplash.com/photo-1518818419601-72c8673f5852?w=800&q=80',
    moods: ['Tragic', 'Ominous', 'Dissonance'],
  },
  {
    id: '37',
    title: 'Tavener - The Protecting Veil',
    url: 'https://www.youtube.com/watch?v=OcQ4_cBssDs',
    thumbnail: 'https://images.unsplash.com/photo-1506268919522-a927511962a9?w=800&q=80',
    moods: ['Mystical', 'Ethereal', 'Tranquil'],
  },
  {
    id: '38',
    title: 'Reich - Music for 18 Musicians',
    url: 'https://www.youtube.com/watch?v=ZXJWO2FQ16c',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80',
    moods: ['Momentum', 'Meditative', 'Dance'],
  }
];

// Add this function to map moods to categories
export const getMoodCategory = (mood: string): 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 => {
  const moodCategories: Record<string, 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10> = {
    // Category 1
    Joy: 1, Triumphant: 1, Playful: 1, Radiant: 1, Vibrant: 1, Funny: 1,
    // Category 2
    Peaceful: 2, Tranquil: 2, Meditative: 2, Dreamy: 2, Warm: 2, Nostalgic: 2, Lyrical: 2,
    // Category 3
    Solemn: 3, Poignant: 3, Mournful: 3, Yearning: 3, Wistful: 3, Introspective: 3, Melancholy: 3, Catharsis: 3,
    // Category 4
    Dramatic: 4, Tense: 4, Ominous: 4, Brooding: 4, Foreboding: 4, Tragic: 4, Fierce: 4, Chiaroscuro: 4, Dissonance: 4,
    // Category 5
    Heroic: 5, Stately: 5, Exalted: 5, Epic: 5,
    // Category 7
    Sweeping: 7, Sensual: 7, Passionate: 7, Intimate: 7, Velvety: 7,
    // Category 8
    Ethereal: 8, Enigmatic: 8, Transcendent: 8, Mystical: 8, Spiritual: 8, Ambiguity: 8, Juxtaposition: 8, Symbolism: 8, Dimension: 8,
    // Category 9
    Relentless: 9, Ferocious: 9, Commanding: 9, Momentum: 9, Arc: 9,
    // Category 10
    Dawn: 10, Twilight: 10, Storm: 10, Sea: 10, Dance: 10, Procession: 10, Triumph: 10, Lament: 10, Labyrinth: 10
  };

  return moodCategories[mood] || 1;
};
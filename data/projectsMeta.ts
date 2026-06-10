export const PINNED_REPOS = [
  // My GitHub repos to be pinned by name
  "Fivos-AI-ChatApp",
  "Warehouse-Tracker",
  "AIconnect4",
];

// this categorizes repos by tags
export const REPO_TAGS: Record<string, string[]> = {
  "Fivos-AI-ChatApp": ["GUI", "WinForms App", "AI", "Frontend", "Backend", "Fullstack", "SQL", "Text-to-SQL", "JSON", "C#", "Python"],
  "Warehouse-Tracker": ["Frontend", "SQL", "Permission-Based Access", "Database Management", "WinForms App", "C#"],
  "AIconnect4": ["AI", "Game", "Uniform Cost Search", "AI Algorithms", "Javascript"],
  "Merge-Sort-Algorithm": ["Algorithm", "Sorting Algorithm", "C++", "Advanced Data Structures"],
  "Strongly-Connected-Components": ["Algorithm", "Graph Algorithm", "C++", "Advanced Data Structures"],
  "Depth-First-Search": ["Algorithm", "Graph Algorithm", "C++", "Advanced Data Structures"],
  "Breadth-First-Search": ["Algorithm", "Graph Algorithm", "C++", "Advanced Data Structures"],
  "Global-Sequence-Alignment": ["Algorithm", "Dynamic Programming", "Bioinformatics", "Python"],
  "Dynamic-Programming": ["Algorithm", "Dynamic Programming", "C++", "Advanced Data Structures"],
  "Recursive-vs-Dynamic-Programming": ["Algorithm", "Dynamic Programming", "C++", "Advanced Data Structures"],
  "Recursive-vs.-Non-recursive": ["Algorithm", "Recursive", "Non-recursive", "C++", "Advanced Data Structures"],
  "Brute-Force-Algorithm-vs.-Euclidian-Algorithm": ["Algorithm", "Brute Force", "Euclidean Algorithm", "C++", "Advanced Data Structures"],
  "Princeton-Portfolio": ["Portfolio", "Web Development", "TypeScript", "JavaScript", "React", "Tailwind CSS", "Next.js", "Frontend"],
  "Job-Tracker": ["JWT Authentication", "Web Development", "TypeScript", "JavaScript", "React", "Tailwind CSS", "Next.js", "Frontend"]
};

// these are all the tags available for filtering
export const ALL_TAGS = [
  "All",
  "Pinned",
  "GUI",
  "AI",
  "SQL",
  "C++",
  "Python",
  "Advanced Data Structures"
];
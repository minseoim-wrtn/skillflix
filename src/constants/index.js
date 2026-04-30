// ============================================================
// Skillflix — Seed Data Constants & Enums
// Pre-seeded data for categories, teams, job roles, difficulties
// ============================================================

// ---------- Difficulty Levels ----------
export const DIFFICULTIES = [
  { id: 'beginner', label: 'Beginner', color: '#4ade80', emoji: '🟢', description: 'No prior experience needed' },
  { id: 'intermediate', label: 'Intermediate', color: '#facc15', emoji: '🟡', description: 'Some familiarity required' },
  { id: 'advanced', label: 'Advanced', color: '#f87171', emoji: '🔴', description: 'Deep expertise recommended' },
];

export const DIFFICULTY_LABELS = DIFFICULTIES.map((d) => d.label);

// ---------- Categories ----------
export const CATEGORIES = [
  { id: 'code-review',     name: 'Code Review',     icon: '🔍', color: '#60a5fa', description: 'Automated code review and quality analysis' },
  { id: 'automation',      name: 'Automation',      icon: '🤖', color: '#a78bfa', description: 'Workflow automation and scripting' },
  { id: 'testing',         name: 'Testing',         icon: '🧪', color: '#34d399', description: 'Test generation, coverage, and QA' },
  { id: 'documentation',   name: 'Documentation',   icon: '📝', color: '#fbbf24', description: 'Doc generation and maintenance' },
  { id: 'debugging',       name: 'Debugging',       icon: '🐛', color: '#fb923c', description: 'Bug hunting and root-cause analysis' },
  { id: 'refactoring',     name: 'Refactoring',     icon: '🔧', color: '#94a3b8', description: 'Code restructuring and cleanup' },
  { id: 'deployment',      name: 'Deployment',      icon: '🚀', color: '#f472b6', description: 'CI/CD pipelines and deploy workflows' },
  { id: 'security',        name: 'Security',        icon: '🛡️', color: '#ef4444', description: 'Vulnerability scanning and secure coding' },
  { id: 'performance',     name: 'Performance',     icon: '⚡', color: '#22d3ee', description: 'Optimization and profiling' },
  { id: 'ai-prompt',       name: 'AI & Prompts',    icon: '✨', color: '#c084fc', description: 'Prompt engineering and AI workflows' },
  { id: 'data-analysis',   name: 'Data Analysis',   icon: '📊', color: '#2dd4bf', description: 'Data processing and visualization' },
  { id: 'workflow',        name: 'Workflow',        icon: '🔄', color: '#818cf8', description: 'Developer workflow and productivity' },
  { id: 'git',             name: 'Git & VCS',       icon: '🌿', color: '#fb7185', description: 'Version control and branching strategies' },
  { id: 'api-design',      name: 'API Design',      icon: '🔗', color: '#38bdf8', description: 'API scaffolding and design patterns' },
  { id: 'devex',           name: 'Developer Experience', icon: '💻', color: '#a3e635', description: 'Tooling, shortcuts, and DX improvements' },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

// ---------- Teams / Departments ----------
export const TEAMS = [
  { id: 'engineering',  name: 'Engineering',      emoji: '⚙️',  color: '#60a5fa', description: 'Core product engineering' },
  { id: 'product',      name: 'Product',          emoji: '📋',  color: '#a78bfa', description: 'Product management and strategy' },
  { id: 'design',       name: 'Design',           emoji: '🎨',  color: '#f472b6', description: 'UI/UX and visual design' },
  { id: 'ai-ml',        name: 'AI/ML',            emoji: '🧠',  color: '#c084fc', description: 'Machine learning and AI research' },
  { id: 'data',         name: 'Data',             emoji: '📊',  color: '#2dd4bf', description: 'Data engineering and analytics' },
  { id: 'devops',       name: 'DevOps / Infra',   emoji: '🏗️',  color: '#fb923c', description: 'Infrastructure and operations' },
  { id: 'marketing',    name: 'Marketing',        emoji: '📣',  color: '#fbbf24', description: 'Growth marketing and campaigns' },
  { id: 'growth',       name: 'Growth',           emoji: '📈',  color: '#4ade80', description: 'Growth hacking and experimentation' },
  { id: 'qa',           name: 'QA',               emoji: '✅',  color: '#34d399', description: 'Quality assurance and testing' },
  { id: 'content',      name: 'Content',          emoji: '✍️',  color: '#818cf8', description: 'Content creation and strategy' },
  { id: 'platform',     name: 'Platform',         emoji: '🏛️',  color: '#94a3b8', description: 'Platform and infrastructure services' },
  { id: 'mobile',       name: 'Mobile',           emoji: '📱',  color: '#22d3ee', description: 'iOS and Android development' },
  { id: 'security',     name: 'Security',         emoji: '🔐',  color: '#ef4444', description: 'Application and infra security' },
  { id: 'support',      name: 'Customer Support', emoji: '🎧',  color: '#f87171', description: 'Customer success and support' },
];

export const TEAM_MAP = Object.fromEntries(TEAMS.map((t) => [t.id, t]));

// ---------- Job Roles ----------
export const JOB_ROLES = [
  'Frontend Engineer',
  'Backend Engineer',
  'Full-Stack Engineer',
  'AI/ML Engineer',
  'Data Engineer',
  'Data Scientist',
  'DevOps / SRE',
  'Product Manager',
  'Product Designer',
  'UX Researcher',
  'QA Engineer',
  'Security Engineer',
  'Mobile Developer',
  'Engineering Manager',
  'Tech Lead',
  'Marketer',
  'Content Strategist',
  'Growth Hacker',
  'Customer Support',
];

// ---------- Visibility Options ----------
export const VISIBILITY = {
  PUBLIC: 'public',
  TEAM_ONLY: 'team_only',
};

export const VISIBILITY_OPTIONS = [
  { value: VISIBILITY.PUBLIC, label: 'Public', icon: '🌐', description: 'Visible to everyone in the company' },
  { value: VISIBILITY.TEAM_ONLY, label: 'Team Only', icon: '🔒', description: 'Only visible to your team members' },
];

// ---------- Sort Options ----------
export const SORT_OPTIONS = [
  { value: 'trending',     label: 'Trending' },
  { value: 'newest',       label: 'Newest' },
  { value: 'most_installs', label: 'Most Installs' },
  { value: 'top_rated',    label: 'Top Rated' },
  { value: 'most_liked',   label: 'Most Liked' },
];

// ---------- Theme Constants ----------
export const THEME = {
  BG_PRIMARY: '#141414',
  BG_CARD: '#1a1a1a',
  BG_ELEVATED: '#222222',
  BG_SURFACE: '#2a2a2a',
  TEXT_PRIMARY: '#ffffff',
  TEXT_SECONDARY: '#b3b3b3',
  TEXT_MUTED: '#808080',
  ACCENT_RED: '#e50914',
  ACCENT_RED_HOVER: '#f40612',
  BORDER: '#333333',
  CARD_HOVER_SCALE: 1.08,
};

// ---------- App Constants ----------
export const APP_NAME = 'Skillflix';
export const APP_TAGLINE = 'Discover, Share & Install Claude Code Skills';
export const SKILLS_PER_ROW = 6;
export const TOP_N = 10;
export const MIN_SIMILAR_SKILLS = 3;
export const INSTALL_PATH = '~/.claude/commands/';

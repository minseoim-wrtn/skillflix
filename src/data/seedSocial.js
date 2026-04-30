// ============================================================
// Skillflix — Seed Social Data
// Sample users, ratings, likes, comments, and installs
// linked to the 20 sample skills in seedSkills.js
// ============================================================

// Re-use skill ID generator & author IDs from seedSkills
const makeSkillId = (index) => `00000000-0000-4000-a000-${String(index).padStart(12, '0')}`;
const DEMO_AUTHOR_ID = '00000000-0000-4000-b000-000000000001';
const DEMO_AUTHOR_2 = '00000000-0000-4000-b000-000000000002';
const DEMO_AUTHOR_3 = '00000000-0000-4000-b000-000000000003';

// ────────────────────────────────────────────
// Additional sample users (beyond the 3 authors)
// ────────────────────────────────────────────
const makeUserId = (index) => `00000000-0000-4000-b000-${String(index).padStart(12, '0')}`;

export const SEED_SOCIAL_PROFILES = [
  { id: makeUserId(4),  display_name: 'Priya Sharma',     email: 'priya.sharma@company.com',     job_role: 'Frontend Engineer',    team_id: 'engineering' },
  { id: makeUserId(5),  display_name: 'Marcus Johnson',   email: 'marcus.johnson@company.com',   job_role: 'Backend Engineer',     team_id: 'engineering' },
  { id: makeUserId(6),  display_name: 'Yuki Tanaka',      email: 'yuki.tanaka@company.com',      job_role: 'Product Manager',      team_id: 'product' },
  { id: makeUserId(7),  display_name: 'Elena Popov',      email: 'elena.popov@company.com',      job_role: 'Data Scientist',       team_id: 'data' },
  { id: makeUserId(8),  display_name: 'Liam O\'Brien',    email: 'liam.obrien@company.com',      job_role: 'DevOps / SRE',         team_id: 'devops' },
  { id: makeUserId(9),  display_name: 'Aisha Patel',      email: 'aisha.patel@company.com',      job_role: 'QA Engineer',          team_id: 'qa' },
  { id: makeUserId(10), display_name: 'Noah Williams',    email: 'noah.williams@company.com',    job_role: 'Security Engineer',    team_id: 'security' },
  { id: makeUserId(11), display_name: 'Camila Rodriguez', email: 'camila.rodriguez@company.com', job_role: 'Product Designer',     team_id: 'design' },
  { id: makeUserId(12), display_name: 'Ravi Gupta',       email: 'ravi.gupta@company.com',       job_role: 'Tech Lead',            team_id: 'platform' },
  { id: makeUserId(13), display_name: 'Sophia Lee',       email: 'sophia.lee@company.com',       job_role: 'Growth Hacker',        team_id: 'growth' },
  { id: makeUserId(14), display_name: 'Daniel Park',      email: 'daniel.park@company.com',      job_role: 'AI/ML Engineer',       team_id: 'ai-ml' },
  { id: makeUserId(15), display_name: 'Hannah Schmidt',   email: 'hannah.schmidt@company.com',   job_role: 'Content Strategist',   team_id: 'content' },
];

// Combine all user IDs for easy reference
const ALL_USER_IDS = [
  DEMO_AUTHOR_ID,   // 1 - Sarah Chen
  DEMO_AUTHOR_2,    // 2 - Alex Rivera
  DEMO_AUTHOR_3,    // 3 - Jordan Kim
  makeUserId(4),    // 4 - Priya Sharma
  makeUserId(5),    // 5 - Marcus Johnson
  makeUserId(6),    // 6 - Yuki Tanaka
  makeUserId(7),    // 7 - Elena Popov
  makeUserId(8),    // 8 - Liam O'Brien
  makeUserId(9),    // 9 - Aisha Patel
  makeUserId(10),   // 10 - Noah Williams
  makeUserId(11),   // 11 - Camila Rodriguez
  makeUserId(12),   // 12 - Ravi Gupta
  makeUserId(13),   // 13 - Sophia Lee
  makeUserId(14),   // 14 - Daniel Park
  makeUserId(15),   // 15 - Hannah Schmidt
];

// Helper: deterministic comment ID
const makeCommentId = (index) => `00000000-0000-4000-c000-${String(index).padStart(12, '0')}`;
const makeRatingId = (index) => `00000000-0000-4000-d000-${String(index).padStart(12, '0')}`;
const makeLikeId = (index) => `00000000-0000-4000-e000-${String(index).padStart(12, '0')}`;
const makeInstallId = (index) => `00000000-0000-4000-f000-${String(index).padStart(12, '0')}`;

// ────────────────────────────────────────────
// RATINGS — diverse scores across all 20 skills
// Each rating: { id, skill_id, user_id, score (1-5), created_at }
// ────────────────────────────────────────────
let rIdx = 1;
export const SEED_RATINGS = [
  // Skill 1: quick-review (popular, high ratings)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-02T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-02T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[5],  score: 4, created_at: '2026-04-03T09:30:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[6],  score: 5, created_at: '2026-04-03T16:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[8],  score: 4, created_at: '2026-04-04T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-05T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[13], score: 4, created_at: '2026-04-06T10:00:00Z' },

  // Skill 2: scaffold-component
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-03T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-04T12:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[10], score: 4, created_at: '2026-04-05T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-06T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[12], score: 3, created_at: '2026-04-07T11:00:00Z' },

  // Skill 3: mutation-test
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[8],  score: 5, created_at: '2026-04-04T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-05T10:30:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-06T13:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[0],  score: 4, created_at: '2026-04-07T08:00:00Z' },

  // Skill 4: auto-readme (most installs, well liked)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-06T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-06T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[5],  score: 4, created_at: '2026-04-07T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-08T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[8],  score: 5, created_at: '2026-04-09T08:30:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[10], score: 4, created_at: '2026-04-10T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-11T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[14], score: 4, created_at: '2026-04-12T16:00:00Z' },

  // Skill 5: trace-bug
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-07T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-08T13:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-09T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[11], score: 4, created_at: '2026-04-10T15:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[12], score: 5, created_at: '2026-04-11T08:00:00Z' },

  // Skill 6: extract-service
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-08T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-09T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[12], score: 4, created_at: '2026-04-10T09:00:00Z' },

  // Skill 7: deploy-checklist
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-09T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-10T12:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[0],  score: 5, created_at: '2026-04-11T09:30:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[8],  score: 4, created_at: '2026-04-12T14:00:00Z' },

  // Skill 8: vuln-scan
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[9],  score: 5, created_at: '2026-04-10T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-11T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[0],  score: 4, created_at: '2026-04-12T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-13T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[11], score: 4, created_at: '2026-04-14T09:00:00Z' },

  // Skill 9: perf-audit
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[3],  score: 4, created_at: '2026-04-11T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-12T13:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[10], score: 4, created_at: '2026-04-13T08:30:00Z' },

  // Skill 10: prompt-optimizer
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[5],  score: 5, created_at: '2026-04-12T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[13], score: 5, created_at: '2026-04-13T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[3],  score: 4, created_at: '2026-04-14T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[6],  score: 5, created_at: '2026-04-15T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[0],  score: 4, created_at: '2026-04-16T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[14], score: 5, created_at: '2026-04-17T10:30:00Z' },

  // Skill 11: csv-insights
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[6],  score: 4, created_at: '2026-04-13T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[5],  score: 3, created_at: '2026-04-14T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[12], score: 4, created_at: '2026-04-15T09:00:00Z' },

  // Skill 12: standup-prep (very popular)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-14T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-14T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[5],  score: 4, created_at: '2026-04-15T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-16T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[8],  score: 4, created_at: '2026-04-17T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[10], score: 5, created_at: '2026-04-18T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[13], score: 5, created_at: '2026-04-19T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[14], score: 4, created_at: '2026-04-20T09:30:00Z' },

  // Skill 13: smart-commit (highest installs)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-15T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[4],  score: 5, created_at: '2026-04-15T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[5],  score: 5, created_at: '2026-04-16T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[6],  score: 4, created_at: '2026-04-17T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-18T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[8],  score: 5, created_at: '2026-04-19T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[9],  score: 4, created_at: '2026-04-20T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-21T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[12], score: 5, created_at: '2026-04-22T11:30:00Z' },

  // Skill 14: api-scaffold
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-16T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-17T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[12], score: 4, created_at: '2026-04-18T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[0],  score: 5, created_at: '2026-04-19T11:00:00Z' },

  // Skill 15: env-doctor
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-17T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-18T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-19T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[8],  score: 4, created_at: '2026-04-20T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[10], score: 5, created_at: '2026-04-21T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[12], score: 4, created_at: '2026-04-22T10:30:00Z' },

  // Skill 16: gen-tests
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[3],  score: 5, created_at: '2026-04-18T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-19T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[8],  score: 5, created_at: '2026-04-20T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[11], score: 4, created_at: '2026-04-21T11:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[1],  score: 5, created_at: '2026-04-22T08:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[13], score: 4, created_at: '2026-04-23T10:30:00Z' },

  // Skill 17: eval-builder
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[13], score: 5, created_at: '2026-04-19T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[6],  score: 4, created_at: '2026-04-20T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[11], score: 5, created_at: '2026-04-21T09:00:00Z' },

  // Skill 18: api-docs-gen
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[4],  score: 4, created_at: '2026-04-20T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[11], score: 4, created_at: '2026-04-21T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[5],  score: 3, created_at: '2026-04-22T09:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[12], score: 5, created_at: '2026-04-23T11:00:00Z' },

  // Skill 19: feature-flag-audit (team_only)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[12], score: 4, created_at: '2026-04-21T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[5],  score: 5, created_at: '2026-04-22T14:00:00Z' },

  // Skill 20: secret-scanner (team_only)
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[9],  score: 5, created_at: '2026-04-22T10:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[7],  score: 5, created_at: '2026-04-23T14:00:00Z' },
  { id: makeRatingId(rIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[1],  score: 4, created_at: '2026-04-24T09:00:00Z' },
];

// ────────────────────────────────────────────
// LIKES — users who hearted each skill
// Each like: { id, skill_id, user_id, created_at }
// ────────────────────────────────────────────
let lIdx = 1;
export const SEED_LIKES = [
  // Skill 1: quick-review — 9 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-02T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-02T14:10:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[5],  created_at: '2026-04-03T09:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[6],  created_at: '2026-04-03T16:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-04T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-05T07:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[11], created_at: '2026-04-05T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[13], created_at: '2026-04-06T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[14], created_at: '2026-04-07T12:00:00Z' },

  // Skill 2: scaffold-component — 6 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-03T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-04T12:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[10], created_at: '2026-04-05T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[11], created_at: '2026-04-06T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[1],  created_at: '2026-04-07T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[2],  created_at: '2026-04-08T08:00:00Z' },

  // Skill 3: mutation-test — 4 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-04T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-05T10:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[11], created_at: '2026-04-06T13:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-07T08:05:00Z' },

  // Skill 4: auto-readme — 11 likes (most liked)
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-06T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-06T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[5],  created_at: '2026-04-07T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[6],  created_at: '2026-04-07T16:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-08T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-09T08:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-09T15:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[10], created_at: '2026-04-10T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[11], created_at: '2026-04-11T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[13], created_at: '2026-04-12T09:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[14], created_at: '2026-04-12T16:05:00Z' },

  // Skill 5: trace-bug — 7 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-07T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-08T13:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-09T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-09T16:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[11], created_at: '2026-04-10T15:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[12], created_at: '2026-04-11T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[2],  created_at: '2026-04-12T10:00:00Z' },

  // Skill 6: extract-service — 3 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-08T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[11], created_at: '2026-04-09T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[12], created_at: '2026-04-10T09:05:00Z' },

  // Skill 7: deploy-checklist — 5 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-09T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-10T12:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-11T09:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-12T08:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-12T14:05:00Z' },

  // Skill 8: vuln-scan — 6 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-10T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-11T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-12T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-13T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[11], created_at: '2026-04-14T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-15T10:00:00Z' },

  // Skill 9: perf-audit — 4 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-11T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-12T13:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[10], created_at: '2026-04-13T08:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-14T07:00:00Z' },

  // Skill 10: prompt-optimizer — 8 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[5],  created_at: '2026-04-12T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[13], created_at: '2026-04-13T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[3],  created_at: '2026-04-14T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[6],  created_at: '2026-04-15T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[0],  created_at: '2026-04-16T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[14], created_at: '2026-04-17T10:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[4],  created_at: '2026-04-18T09:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[11], created_at: '2026-04-19T11:00:00Z' },

  // Skill 11: csv-insights — 3 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[6],  created_at: '2026-04-13T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[5],  created_at: '2026-04-14T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[12], created_at: '2026-04-15T09:05:00Z' },

  // Skill 12: standup-prep — 10 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[3],  created_at: '2026-04-14T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[4],  created_at: '2026-04-14T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[5],  created_at: '2026-04-15T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[6],  created_at: '2026-04-15T16:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[7],  created_at: '2026-04-16T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[8],  created_at: '2026-04-17T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[10], created_at: '2026-04-18T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[11], created_at: '2026-04-19T07:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[13], created_at: '2026-04-19T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[14], created_at: '2026-04-20T09:35:00Z' },

  // Skill 13: smart-commit — 12 likes (most liked alongside auto-readme)
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[1],  created_at: '2026-04-15T08:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[2],  created_at: '2026-04-15T09:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[3],  created_at: '2026-04-15T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[4],  created_at: '2026-04-15T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[5],  created_at: '2026-04-16T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[6],  created_at: '2026-04-17T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[7],  created_at: '2026-04-18T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[8],  created_at: '2026-04-19T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[9],  created_at: '2026-04-20T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[12], created_at: '2026-04-22T11:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[14], created_at: '2026-04-23T08:00:00Z' },

  // Skill 14: api-scaffold — 4 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[4],  created_at: '2026-04-16T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[11], created_at: '2026-04-17T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[12], created_at: '2026-04-18T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[0],  created_at: '2026-04-19T11:05:00Z' },

  // Skill 15: env-doctor — 7 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[3],  created_at: '2026-04-17T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[4],  created_at: '2026-04-18T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[7],  created_at: '2026-04-19T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[8],  created_at: '2026-04-20T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[10], created_at: '2026-04-21T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[0],  created_at: '2026-04-22T07:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[12], created_at: '2026-04-22T10:35:00Z' },

  // Skill 16: gen-tests — 8 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[3],  created_at: '2026-04-18T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[4],  created_at: '2026-04-19T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[8],  created_at: '2026-04-20T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[9],  created_at: '2026-04-20T16:00:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[1],  created_at: '2026-04-22T08:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[13], created_at: '2026-04-23T10:35:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[5],  created_at: '2026-04-24T09:00:00Z' },

  // Skill 17: eval-builder — 3 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[13], created_at: '2026-04-19T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[6],  created_at: '2026-04-20T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T09:05:00Z' },

  // Skill 18: api-docs-gen — 5 likes
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[4],  created_at: '2026-04-20T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[5],  created_at: '2026-04-22T09:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[12], created_at: '2026-04-23T11:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[0],  created_at: '2026-04-24T08:00:00Z' },

  // Skill 19: feature-flag-audit — 2 likes (team_only, less engagement)
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[12], created_at: '2026-04-21T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[5],  created_at: '2026-04-22T14:05:00Z' },

  // Skill 20: secret-scanner — 3 likes (team_only)
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[9],  created_at: '2026-04-22T10:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[7],  created_at: '2026-04-23T14:05:00Z' },
  { id: makeLikeId(lIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[1],  created_at: '2026-04-24T09:05:00Z' },
];

// ────────────────────────────────────────────
// COMMENTS — diverse, realistic developer feedback
// Each comment: { id, skill_id, user_id, body, created_at }
// ────────────────────────────────────────────
let cIdx = 1;
export const SEED_COMMENTS = [
  // Skill 1: quick-review
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(1), user_id: ALL_USER_IDS[3],  body: 'This has completely replaced my manual code review process. The severity ratings are incredibly accurate!', created_at: '2026-04-02T10:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(1), user_id: ALL_USER_IDS[4],  body: 'Great for catching security issues I would have missed. Saved my PR from shipping a SQL injection vulnerability.', created_at: '2026-04-02T14:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(1), user_id: ALL_USER_IDS[6],  body: 'As a PM, I use this to understand code changes before approving PRs. The summary format is perfect for non-engineers.', created_at: '2026-04-03T16:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(1), user_id: ALL_USER_IDS[11], body: 'Love the structured output. Would be nice to have a --strict mode for pre-merge checks.', created_at: '2026-04-05T08:30:00Z' },

  // Skill 2: scaffold-component
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(2), user_id: ALL_USER_IDS[3],  body: 'This is a game changer for our design system work. Generates perfectly consistent components every time.', created_at: '2026-04-03T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(2), user_id: ALL_USER_IDS[10], body: 'The Storybook integration is fantastic. Wish it also generated Cypress component tests.', created_at: '2026-04-05T14:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(2), user_id: ALL_USER_IDS[11], body: 'Reduced our component setup time from 30 minutes to under 2 minutes. The accessibility attributes are a nice touch.', created_at: '2026-04-06T09:15:00Z' },

  // Skill 3: mutation-test
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(3), user_id: ALL_USER_IDS[8],  body: 'Found 12 surviving mutants in our payment module that our 95% coverage tests completely missed. Eye-opening!', created_at: '2026-04-04T09:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(3), user_id: ALL_USER_IDS[4],  body: 'The generated test cases for killing mutants are actually production-quality. Not just stubs.', created_at: '2026-04-05T10:45:00Z' },

  // Skill 4: auto-readme
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(4), user_id: ALL_USER_IDS[3],  body: 'Every new project I start, this is the first skill I run. The README it generates is better than what I\'d write manually.', created_at: '2026-04-06T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(4), user_id: ALL_USER_IDS[5],  body: 'Really smart about detecting the tech stack. It figured out our monorepo structure and documented each package separately.', created_at: '2026-04-07T09:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(4), user_id: ALL_USER_IDS[7],  body: 'The environment variables section alone saved me hours of documentation work. Automatically detected all .env vars and described them.', created_at: '2026-04-08T11:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(4), user_id: ALL_USER_IDS[10], body: 'Used this for our open-source project and got compliments from external contributors on the README quality!', created_at: '2026-04-10T14:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(4), user_id: ALL_USER_IDS[14], body: 'As a content person, I appreciate how well-structured the output is. Clean markdown with proper heading hierarchy.', created_at: '2026-04-12T16:15:00Z' },

  // Skill 5: trace-bug
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(5), user_id: ALL_USER_IDS[3],  body: 'The competing hypotheses approach is brilliant. It found a race condition that three senior engineers had missed.', created_at: '2026-04-07T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(5), user_id: ALL_USER_IDS[7],  body: 'Used this for a production incident at 2am. The structured approach kept me focused instead of randomly poking around.', created_at: '2026-04-09T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(5), user_id: ALL_USER_IDS[12], body: 'This is now part of our incident response playbook. The evidence tracking gives us great post-mortems.', created_at: '2026-04-11T08:10:00Z' },

  // Skill 6: extract-service
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(6), user_id: ALL_USER_IDS[4],  body: 'Refactored our 2000-line monolith controller into 5 clean services using this skill. Zero runtime errors after.', created_at: '2026-04-08T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(6), user_id: ALL_USER_IDS[12], body: 'The dependency injection setup it generates works perfectly with our NestJS project. Smart framework detection.', created_at: '2026-04-10T09:15:00Z' },

  // Skill 7: deploy-checklist
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(7), user_id: ALL_USER_IDS[7],  body: 'Caught a missing database migration on staging before it would have broken production. This is a must-have for any team.', created_at: '2026-04-09T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(7), user_id: ALL_USER_IDS[0],  body: 'We integrated this into our CI pipeline. Run it as a pre-deploy step and it blocks if anything fails the checklist.', created_at: '2026-04-11T09:45:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(7), user_id: ALL_USER_IDS[8],  body: 'The rollback readiness check is invaluable. Always good to know you can roll back before you push forward.', created_at: '2026-04-12T14:15:00Z' },

  // Skill 8: vuln-scan
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(8), user_id: ALL_USER_IDS[9],  body: 'Found 3 critical XSS vulnerabilities in our customer portal that our commercial SAST tool missed. Highly recommended.', created_at: '2026-04-10T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(8), user_id: ALL_USER_IDS[0],  body: 'The OWASP categorization makes it easy to prioritize fixes. The remediation code examples are actually usable too.', created_at: '2026-04-12T08:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(8), user_id: ALL_USER_IDS[7],  body: 'Running this on every PR now. It\'s like having a security engineer review every change.', created_at: '2026-04-13T14:20:00Z' },

  // Skill 9: perf-audit
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(9), user_id: ALL_USER_IDS[3],  body: 'Found 47 unnecessary re-renders in our dashboard. After fixing them, page load time dropped by 60%!', created_at: '2026-04-11T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(9), user_id: ALL_USER_IDS[4],  body: 'The bundle size analysis caught a massive lodash import. Switching to individual imports saved 200KB.', created_at: '2026-04-12T13:15:00Z' },

  // Skill 10: prompt-optimizer
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[5],  body: 'Used this on our customer support chatbot prompts. Response quality improved dramatically after optimization.', created_at: '2026-04-12T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[13], body: 'The token efficiency analysis is brilliant. Reduced our prompt from 800 tokens to 350 without losing any quality.', created_at: '2026-04-13T14:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[6],  body: 'Even for non-technical prompts, the structured improvement suggestions are incredibly helpful. Great for PM work.', created_at: '2026-04-15T11:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[0],  body: 'The caching considerations tip saved us $500/month on our API costs. Should be required reading for any LLM project.', created_at: '2026-04-16T08:15:00Z' },

  // Skill 11: csv-insights
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[6],  body: 'Analyzed a 100K row user behavior dataset in seconds. The outlier detection found fraudulent accounts we didn\'t know about.', created_at: '2026-04-13T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[12], body: 'Great for quick data exploration. The ASCII charts are surprisingly readable and easy to share in Slack.', created_at: '2026-04-15T09:15:00Z' },

  // Skill 12: standup-prep
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[3],  body: 'My morning routine is now: coffee, /standup-prep, done. Haven\'t had to think about standup updates in weeks.', created_at: '2026-04-14T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[5],  body: 'The automatic blocker detection is surprisingly good. It caught a merge conflict I forgot about.', created_at: '2026-04-15T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[7],  body: 'As a DevOps person, I love that it includes deployment stats alongside code stats. Very complete picture.', created_at: '2026-04-16T11:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[10], body: 'Our whole team uses this now. Standups are 50% shorter because everyone comes prepared.', created_at: '2026-04-18T10:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[14], body: 'Works great even for content work. It picked up my markdown file changes and summarized them nicely.', created_at: '2026-04-20T09:45:00Z' },

  // Skill 13: smart-commit
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[3],  body: 'Finally, consistently good commit messages across our whole team. The scope detection is incredibly smart.', created_at: '2026-04-15T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[5],  body: 'The breaking change detection saved us from a bad release. It flagged a removed export that would have broken consumers.', created_at: '2026-04-16T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[7],  body: 'We hooked this into our git hooks. Every commit now follows conventional commits perfectly. Beautiful git log.', created_at: '2026-04-18T08:10:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[9],  body: 'As a QA engineer, I can now actually understand what each commit does from the message alone. Huge improvement.', created_at: '2026-04-20T14:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[11], body: 'The auto-detection of issue references from branch names is a small but brilliant feature.', created_at: '2026-04-21T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[12], body: 'Been using this for 3 months. Zero regrets. Our changelog generation is now fully automated thanks to clean commit messages.', created_at: '2026-04-22T11:45:00Z' },

  // Skill 14: api-scaffold
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[4],  body: 'Scaffolded a complete CRUD API for our inventory service in under 5 minutes. Including validation, auth, and tests!', created_at: '2026-04-16T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[11], body: 'The OpenAPI spec generation is excellent. Our API docs are now always in sync with the actual code.', created_at: '2026-04-17T14:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[0],  body: 'GraphQL mode is solid. The DataLoader setup for N+1 prevention shows real production experience behind this skill.', created_at: '2026-04-19T11:10:00Z' },

  // Skill 15: env-doctor
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[3],  body: 'This is the first thing I tell new team members to run. Saves hours of "it works on my machine" debugging.', created_at: '2026-04-17T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[7],  body: 'Found that half our team had mismatched Node versions causing subtle test failures. /env-doctor diagnosed it instantly.', created_at: '2026-04-19T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[8],  body: 'The auto-fix commands are a huge time saver. It doesn\'t just find problems, it fixes them.', created_at: '2026-04-20T11:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[12], body: 'Added this to our onboarding script. New developers go from clone to running in 10 minutes now.', created_at: '2026-04-22T10:45:00Z' },

  // Skill 16: gen-tests
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[3],  body: 'Generated 47 tests for our utils library. 3 of them actually found bugs we didn\'t know about. Incredible.', created_at: '2026-04-18T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[8],  body: 'The edge case generation is where this really shines. It tests boundary values I would never have thought of.', created_at: '2026-04-20T09:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[1],  body: 'Perfect for getting that initial test coverage on legacy code. Then you can refactor with confidence.', created_at: '2026-04-22T08:15:00Z' },

  // Skill 17: eval-builder
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[13], body: 'Finally a structured way to evaluate our RAG pipeline. The adversarial test cases caught prompt injection issues.', created_at: '2026-04-19T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[6],  body: 'The regression tracking caught a 15% quality drop after a model update. Would have shipped it to production otherwise.', created_at: '2026-04-20T14:15:00Z' },

  // Skill 18: api-docs-gen
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[4],  body: 'Generated Swagger docs for our 40-endpoint API. Caught 8 undocumented endpoints and 5 type mismatches.', created_at: '2026-04-20T10:30:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[12], body: 'The curl command generation is super useful for debugging and sharing with front-end developers.', created_at: '2026-04-23T11:15:00Z' },

  // Skill 19: feature-flag-audit
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[12], body: 'Found 23 stale feature flags dating back 6 months. The cleanup suggestions were spot-on.', created_at: '2026-04-21T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[5],  body: 'Great for quarterly tech debt cleanup. Our team now runs this monthly to keep flags in check.', created_at: '2026-04-22T14:15:00Z' },

  // Skill 20: secret-scanner
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[9],  body: 'Found an AWS key that was "removed" 8 months ago but still in git history. Rotated it immediately. Critical tool.', created_at: '2026-04-22T10:20:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[7],  body: 'The pre-commit hook suggestion is brilliant. Prevention is better than detection. Set it up for our whole org.', created_at: '2026-04-23T14:15:00Z' },
  { id: makeCommentId(cIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[1],  body: 'Scanned all 50+ repos in our org. Found secrets in 12 of them. This should be mandatory for every engineering team.', created_at: '2026-04-24T09:20:00Z' },
];

// ────────────────────────────────────────────
// INSTALLS — usage tracking records
// Each install: { id, skill_id, user_id, created_at }
// Spread across skills to create realistic install history
// ────────────────────────────────────────────
let iIdx = 1;
export const SEED_INSTALLS = [
  // Skill 1: quick-review (342 total, seed a handful)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-02T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-02T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[5],  created_at: '2026-04-03T09:32:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[6],  created_at: '2026-04-03T16:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-04T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[11], created_at: '2026-04-05T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-05T12:00:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(1),  user_id: ALL_USER_IDS[14], created_at: '2026-04-06T10:02:00Z' },

  // Skill 4: auto-readme (421 installs)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-06T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-06T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[5],  created_at: '2026-04-07T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-08T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-09T08:32:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[10], created_at: '2026-04-10T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[11], created_at: '2026-04-11T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[14], created_at: '2026-04-12T16:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[6],  created_at: '2026-04-13T09:00:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(4),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-14T11:00:00Z' },

  // Skill 12: standup-prep (387 installs)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[3],  created_at: '2026-04-14T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[4],  created_at: '2026-04-14T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[5],  created_at: '2026-04-15T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[7],  created_at: '2026-04-16T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[8],  created_at: '2026-04-17T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[10], created_at: '2026-04-18T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[11], created_at: '2026-04-19T07:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[13], created_at: '2026-04-19T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(12), user_id: ALL_USER_IDS[14], created_at: '2026-04-20T09:32:00Z' },

  // Skill 13: smart-commit (456 installs — most installed)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[1],  created_at: '2026-04-15T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[2],  created_at: '2026-04-15T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[3],  created_at: '2026-04-15T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[4],  created_at: '2026-04-15T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[5],  created_at: '2026-04-16T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[6],  created_at: '2026-04-17T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[7],  created_at: '2026-04-18T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[8],  created_at: '2026-04-19T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[9],  created_at: '2026-04-20T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[12], created_at: '2026-04-22T11:32:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(13), user_id: ALL_USER_IDS[14], created_at: '2026-04-23T08:02:00Z' },

  // Skill 10: prompt-optimizer (312 installs)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[5],  created_at: '2026-04-12T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[13], created_at: '2026-04-13T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[3],  created_at: '2026-04-14T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[6],  created_at: '2026-04-15T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[0],  created_at: '2026-04-16T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[14], created_at: '2026-04-17T10:32:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(10), user_id: ALL_USER_IDS[4],  created_at: '2026-04-18T09:02:00Z' },

  // Skill 16: gen-tests (378 installs)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[3],  created_at: '2026-04-18T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[4],  created_at: '2026-04-19T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[8],  created_at: '2026-04-20T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[11], created_at: '2026-04-21T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[1],  created_at: '2026-04-22T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(16), user_id: ALL_USER_IDS[13], created_at: '2026-04-23T10:32:00Z' },

  // Skill 15: env-doctor (298 installs)
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[3],  created_at: '2026-04-17T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[4],  created_at: '2026-04-18T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[7],  created_at: '2026-04-19T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[8],  created_at: '2026-04-20T11:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[10], created_at: '2026-04-21T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(15), user_id: ALL_USER_IDS[12], created_at: '2026-04-22T10:32:00Z' },

  // Remaining skills get 2-4 install records each
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-03T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[10], created_at: '2026-04-05T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(2),  user_id: ALL_USER_IDS[11], created_at: '2026-04-06T09:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-04T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(3),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-05T10:32:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-07T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-09T09:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(5),  user_id: ALL_USER_IDS[12], created_at: '2026-04-11T08:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-08T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(6),  user_id: ALL_USER_IDS[12], created_at: '2026-04-10T09:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-09T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-11T09:32:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(7),  user_id: ALL_USER_IDS[8],  created_at: '2026-04-12T14:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[9],  created_at: '2026-04-10T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[0],  created_at: '2026-04-12T08:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(8),  user_id: ALL_USER_IDS[7],  created_at: '2026-04-13T14:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[3],  created_at: '2026-04-11T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(9),  user_id: ALL_USER_IDS[4],  created_at: '2026-04-12T13:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[6],  created_at: '2026-04-13T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(11), user_id: ALL_USER_IDS[12], created_at: '2026-04-15T09:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[4],  created_at: '2026-04-16T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[11], created_at: '2026-04-17T14:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(14), user_id: ALL_USER_IDS[0],  created_at: '2026-04-19T11:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[13], created_at: '2026-04-19T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(17), user_id: ALL_USER_IDS[6],  created_at: '2026-04-20T14:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[4],  created_at: '2026-04-20T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(18), user_id: ALL_USER_IDS[12], created_at: '2026-04-23T11:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[12], created_at: '2026-04-21T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(19), user_id: ALL_USER_IDS[5],  created_at: '2026-04-22T14:02:00Z' },

  { id: makeInstallId(iIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[9],  created_at: '2026-04-22T10:02:00Z' },
  { id: makeInstallId(iIdx++), skill_id: makeSkillId(20), user_id: ALL_USER_IDS[1],  created_at: '2026-04-24T09:02:00Z' },
];

// ────────────────────────────────────────────
// Summary statistics (for reference):
// ────────────────────────────────────────────
// Total additional users:   12 (15 total with 3 authors)
// Total ratings:            ~95 across 20 skills
// Total likes:              ~120 across 20 skills
// Total comments:           ~55 across 20 skills
// Total install records:    ~85 across 20 skills
//
// Engagement distribution:
//   Most rated:  smart-commit (9), auto-readme (8), standup-prep (8)
//   Most liked:  smart-commit (12), auto-readme (11), standup-prep (10)
//   Most commented: smart-commit (6), auto-readme (5), standup-prep (5)
//   Least engagement: feature-flag-audit, eval-builder (team_only/niche)
//
// Rating averages range from ~3.7 to ~4.9 for realistic variety

export default {
  SEED_SOCIAL_PROFILES,
  SEED_RATINGS,
  SEED_LIKES,
  SEED_COMMENTS,
  SEED_INSTALLS,
};

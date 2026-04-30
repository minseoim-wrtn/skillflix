// ============================================================
// Skillflix — Seed Skills Data
// 20 diverse sample skills spanning all categories, difficulties, and teams
// These are used for demo/development when Supabase has no data
// ============================================================

// Helper to generate deterministic UUIDs from skill names (for stable references)
const makeId = (index) => `00000000-0000-4000-a000-${String(index).padStart(12, '0')}`;
const DEMO_AUTHOR_ID = '00000000-0000-4000-b000-000000000001';
const DEMO_AUTHOR_2 = '00000000-0000-4000-b000-000000000002';
const DEMO_AUTHOR_3 = '00000000-0000-4000-b000-000000000003';

export const SEED_PROFILES = [
  { id: DEMO_AUTHOR_ID, display_name: 'Sarah Chen', email: 'sarah.chen@company.com', job_role: 'Full-Stack Engineer', team_id: 'engineering' },
  { id: DEMO_AUTHOR_2, display_name: 'Alex Rivera', email: 'alex.rivera@company.com', job_role: 'DevOps / SRE', team_id: 'devops' },
  { id: DEMO_AUTHOR_3, display_name: 'Jordan Kim', email: 'jordan.kim@company.com', job_role: 'AI/ML Engineer', team_id: 'ai-ml' },
];

export const SEED_SKILLS = [
  // ────────────────────────────────────────────
  // 1. Code Review — Beginner — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(1),
    name: 'quick-review',
    description: 'Instant code review with severity-rated feedback on any staged changes or specified files',
    category_id: 'code-review',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 342,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer'],
    usage_guide: 'Run /quick-review to analyze your staged git changes. Optionally pass a file path to review a specific file.',
    body: `---
name: quick-review
description: Instant code review with severity-rated feedback
---

Review the code changes and provide structured feedback.

## Instructions

1. Check \`git diff --staged\` for staged changes, or read the file path if one is provided as $ARGUMENTS
2. For each issue found, rate severity: 🔴 Critical, 🟡 Warning, 🟢 Suggestion
3. Check for:
   - Logic errors and edge cases
   - Security vulnerabilities (SQL injection, XSS, etc.)
   - Performance concerns
   - Code style and naming conventions
   - Missing error handling
4. Provide a summary with total issues by severity
5. Suggest specific fixes with code snippets

## Output Format

### Review Summary
- 🔴 Critical: N issues
- 🟡 Warning: N issues
- 🟢 Suggestion: N issues

### Detailed Findings
[For each issue, show file, line, severity, description, and suggested fix]
`,
    created_at: '2026-04-01T09:00:00Z',
  },

  // ────────────────────────────────────────────
  // 2. Automation — Intermediate — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(2),
    name: 'scaffold-component',
    description: 'Auto-generate React/Vue/Svelte components with tests, stories, and styles from a single prompt',
    category_id: 'automation',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 289,
    target_job_roles: ['Frontend Engineer', 'Full-Stack Engineer'],
    usage_guide: 'Run /scaffold-component ButtonGroup --framework react --with-tests --with-stories to generate a full component scaffold.',
    body: `---
name: scaffold-component
description: Generate a complete component scaffold with tests and stories
---

Generate a production-ready component scaffold based on the user's request.

## Arguments
\$ARGUMENTS should contain: ComponentName [--framework react|vue|svelte] [--with-tests] [--with-stories] [--with-styles]

## Instructions

1. Parse the component name and options from \$ARGUMENTS
2. Detect the project framework if not specified (check package.json)
3. Generate the following files:
   - Component file with TypeScript types and props interface
   - Unit test file using the project's test framework (Jest/Vitest)
   - Storybook story file (if --with-stories)
   - CSS Module or styled-components file (if --with-styles)
4. Follow the project's existing component patterns and naming conventions
5. Include JSDoc comments and accessibility attributes (aria-*)
6. Export from the nearest index/barrel file

## Component Template Checklist
- [ ] Props interface with sensible defaults
- [ ] ForwardRef support
- [ ] Error boundary consideration
- [ ] Loading/empty states
- [ ] Keyboard navigation
`,
    created_at: '2026-04-02T14:30:00Z',
  },

  // ────────────────────────────────────────────
  // 3. Testing — Advanced — QA
  // ────────────────────────────────────────────
  {
    id: makeId(3),
    name: 'mutation-test',
    description: 'Run mutation testing analysis to find weak spots in your test suite and generate missing test cases',
    category_id: 'testing',
    difficulty: 'advanced',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 156,
    target_job_roles: ['QA Engineer', 'Full-Stack Engineer', 'Backend Engineer'],
    usage_guide: 'Run /mutation-test src/utils/parser.ts to analyze test coverage quality for a specific module.',
    body: `---
name: mutation-test
description: Mutation testing to find weak test coverage
---

Perform mutation testing analysis on the specified code to identify undertested logic.

## Arguments
\$ARGUMENTS: file or directory path to analyze

## Instructions

1. Read the target source file(s) from \$ARGUMENTS
2. Identify all testable mutations:
   - Boundary condition changes (< to <=, > to >=)
   - Boolean negations
   - Arithmetic operator swaps (+/-, */÷)
   - Return value modifications
   - Null/undefined injections
   - String constant changes
   - Array boundary off-by-one
3. For each mutation:
   - Apply the mutation mentally
   - Check if existing tests would catch it
   - If NOT caught → flag as "surviving mutant"
4. Generate new test cases that kill surviving mutants
5. Report mutation score: killed / (killed + survived)

## Output
- Mutation score percentage
- List of surviving mutants with locations
- Generated test code for each surviving mutant
- Prioritized list of which mutations are most dangerous
`,
    created_at: '2026-04-03T10:15:00Z',
  },

  // ────────────────────────────────────────────
  // 4. Documentation — Beginner — Content
  // ────────────────────────────────────────────
  {
    id: makeId(4),
    name: 'auto-readme',
    description: 'Generate or update a comprehensive README.md by analyzing your project structure and code',
    category_id: 'documentation',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_3,
    install_count: 421,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'Engineering Manager'],
    usage_guide: 'Simply run /auto-readme in your project root. It will analyze the codebase and generate a polished README.',
    body: `---
name: auto-readme
description: Auto-generate a comprehensive README from your codebase
---

Analyze the project and generate a professional README.md file.

## Instructions

1. Scan the project structure using file listing
2. Read package.json (or equivalent) for project metadata
3. Detect:
   - Programming language and framework
   - Build system and scripts
   - Dependencies and their purposes
   - Test framework
   - CI/CD configuration
   - Docker/container setup
4. Generate README sections:
   - Project title and badges
   - Description and motivation
   - Features list
   - Prerequisites
   - Installation steps
   - Usage examples with code blocks
   - Configuration/environment variables
   - API reference (if applicable)
   - Testing instructions
   - Deployment guide
   - Contributing guidelines
   - License
5. Use the project's existing README as a base if one exists
6. Write the result to README.md

Keep the tone professional but approachable. Use emojis sparingly for section headers.
`,
    created_at: '2026-04-05T08:00:00Z',
  },

  // ────────────────────────────────────────────
  // 5. Debugging — Intermediate — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(5),
    name: 'trace-bug',
    description: 'Systematic root-cause analysis with competing hypotheses, evidence tracking, and fix verification',
    category_id: 'debugging',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 267,
    target_job_roles: ['Full-Stack Engineer', 'Backend Engineer', 'Frontend Engineer'],
    usage_guide: 'Run /trace-bug "Users see 500 error on checkout page" to start systematic debugging. Provide as much context as possible.',
    body: `---
name: trace-bug
description: Systematic root-cause analysis with hypotheses tracking
---

Perform structured root-cause analysis for the reported bug.

## Arguments
\$ARGUMENTS: Bug description or error message

## Process

### Phase 1: Gather Evidence
1. Read the bug description from \$ARGUMENTS
2. Search for related error messages in the codebase
3. Check recent git changes in affected areas
4. Look at error handling and logging patterns

### Phase 2: Generate Hypotheses
Create 3-5 competing hypotheses, each with:
- Description of the suspected cause
- Evidence FOR this hypothesis
- Evidence AGAINST this hypothesis
- Confidence level (Low/Medium/High)

### Phase 3: Test Hypotheses
For each hypothesis (highest confidence first):
1. Identify the specific code path
2. Trace data flow through the path
3. Look for edge cases, race conditions, null checks
4. Mark as CONFIRMED or ELIMINATED

### Phase 4: Fix & Verify
1. Propose a minimal fix for the confirmed root cause
2. Identify related areas that might have the same bug
3. Suggest a regression test
4. Check if the fix introduces new issues

## Output: Structured bug report with root cause, fix, and prevention strategy
`,
    created_at: '2026-04-06T11:45:00Z',
  },

  // ────────────────────────────────────────────
  // 6. Refactoring — Advanced — Platform
  // ────────────────────────────────────────────
  {
    id: makeId(6),
    name: 'extract-service',
    description: 'Safely extract a module or class into a standalone service with dependency injection and interface contracts',
    category_id: 'refactoring',
    difficulty: 'advanced',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 134,
    target_job_roles: ['Backend Engineer', 'Full-Stack Engineer', 'Tech Lead'],
    usage_guide: 'Run /extract-service src/controllers/payment.ts PaymentService to extract payment logic into a dedicated service.',
    body: `---
name: extract-service
description: Extract code into a standalone service with proper interfaces
---

Safely refactor a module into a standalone service layer.

## Arguments
\$ARGUMENTS: <source-file> <ServiceName>

## Instructions

1. Read the source file and identify the extraction boundary
2. Analyze all dependencies (imports, function calls, shared state)
3. Design the service interface:
   - Define TypeScript interface with all public methods
   - Identify constructor dependencies for DI
   - Define DTOs for input/output types
4. Create the service:
   - New service file with class implementing the interface
   - Constructor with dependency injection
   - Move relevant logic from source to service
   - Add proper error handling and logging
5. Update the source file:
   - Replace extracted logic with service calls
   - Add service instantiation or DI registration
   - Update imports
6. Create or update tests:
   - Unit tests for the new service with mocked dependencies
   - Update existing tests that relied on the extracted code
7. Verify no circular dependencies were introduced

## Safety Checks
- Run existing tests after refactoring
- Verify all callers still work
- Check for broken imports across the project
`,
    created_at: '2026-04-07T16:20:00Z',
  },

  // ────────────────────────────────────────────
  // 7. Deployment — Intermediate — DevOps
  // ────────────────────────────────────────────
  {
    id: makeId(7),
    name: 'deploy-checklist',
    description: 'Pre-deployment validation checklist that verifies env vars, migrations, tests, and rollback readiness',
    category_id: 'deployment',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 198,
    target_job_roles: ['DevOps / SRE', 'Full-Stack Engineer', 'Backend Engineer', 'Engineering Manager'],
    usage_guide: 'Run /deploy-checklist staging before deploying. It will verify everything is ready.',
    body: `---
name: deploy-checklist
description: Pre-deployment validation and readiness verification
---

Run a comprehensive pre-deployment checklist.

## Arguments
\$ARGUMENTS: environment name (staging, production, etc.)

## Checklist Items

### 1. Code Quality
- [ ] All tests passing (\`npm test\` or equivalent)
- [ ] No TypeScript/lint errors
- [ ] No console.log statements in production code
- [ ] No TODO/FIXME comments in changed files

### 2. Environment Configuration
- [ ] All required env vars are set for target environment
- [ ] No hardcoded secrets or API keys
- [ ] Feature flags configured correctly
- [ ] Third-party service endpoints match environment

### 3. Database
- [ ] Migrations are up to date
- [ ] Migration rollback scripts exist
- [ ] No destructive schema changes without data migration plan
- [ ] Indexes added for new queries

### 4. Dependencies
- [ ] No known vulnerabilities (npm audit)
- [ ] Lock file is committed
- [ ] No unused dependencies

### 5. Monitoring & Rollback
- [ ] Health check endpoints responding
- [ ] Error tracking configured
- [ ] Rollback procedure documented
- [ ] Previous deployment tag identified

Report status: ✅ READY / ⚠️ WARNINGS / 🚫 BLOCKED
`,
    created_at: '2026-04-08T09:30:00Z',
  },

  // ────────────────────────────────────────────
  // 8. Security — Advanced — Security
  // ────────────────────────────────────────────
  {
    id: makeId(8),
    name: 'vuln-scan',
    description: 'OWASP Top 10 vulnerability scanner that checks your code for injection, XSS, CSRF, and auth flaws',
    category_id: 'security',
    difficulty: 'advanced',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 223,
    target_job_roles: ['Security Engineer', 'Backend Engineer', 'Full-Stack Engineer'],
    usage_guide: 'Run /vuln-scan src/api/ to scan API routes for security vulnerabilities.',
    body: `---
name: vuln-scan
description: OWASP Top 10 vulnerability scanner for application code
---

Scan code for security vulnerabilities based on OWASP Top 10.

## Arguments
\$ARGUMENTS: directory or file path to scan

## Scan Categories

### A01: Broken Access Control
- Missing authorization checks on endpoints
- IDOR vulnerabilities (direct object references)
- Missing CORS configuration

### A02: Cryptographic Failures
- Hardcoded secrets or API keys
- Weak hashing algorithms (MD5, SHA1 for passwords)
- Missing encryption for sensitive data

### A03: Injection
- SQL injection in raw queries
- NoSQL injection
- Command injection via exec/spawn
- XSS via unescaped user input in templates

### A05: Security Misconfiguration
- Debug mode enabled in production
- Default credentials
- Verbose error messages exposing internals
- Missing security headers

### A07: Authentication Failures
- Missing rate limiting on auth endpoints
- Weak password validation
- Session fixation vulnerabilities
- Missing MFA consideration

## Output
For each finding:
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- OWASP category
- File and line number
- Description and exploitation scenario
- Recommended fix with code example
`,
    created_at: '2026-04-09T13:00:00Z',
  },

  // ────────────────────────────────────────────
  // 9. Performance — Intermediate — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(9),
    name: 'perf-audit',
    description: 'Analyze React components for unnecessary re-renders, bundle size issues, and optimization opportunities',
    category_id: 'performance',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 178,
    target_job_roles: ['Frontend Engineer', 'Full-Stack Engineer'],
    usage_guide: 'Run /perf-audit src/components/ to analyze React components for performance issues.',
    body: `---
name: perf-audit
description: React performance audit for re-renders, bundle size, and optimizations
---

Analyze React components for performance issues and suggest optimizations.

## Arguments
\$ARGUMENTS: component directory or file path

## Analysis Areas

### Re-render Analysis
1. Find components that re-render unnecessarily
2. Check for missing React.memo() on pure components
3. Identify inline function/object creation in render
4. Flag useEffect with missing or incorrect dependency arrays
5. Detect state updates that could be batched

### Bundle Size
1. Check for large imports that should be tree-shaken
2. Identify components that should be lazy-loaded
3. Find duplicate dependencies
4. Flag large static assets that aren't optimized

### Data Fetching
1. Waterfall request patterns
2. Missing data caching/memoization
3. Over-fetching (requesting more data than displayed)
4. Missing pagination/virtualization for large lists

### Suggested Optimizations
For each issue, provide:
- Current impact estimate (Low/Medium/High)
- Specific code change with before/after
- Expected improvement
`,
    created_at: '2026-04-10T07:15:00Z',
  },

  // ────────────────────────────────────────────
  // 10. AI & Prompts — Beginner — AI/ML
  // ────────────────────────────────────────────
  {
    id: makeId(10),
    name: 'prompt-optimizer',
    description: 'Analyze and optimize LLM prompts for clarity, token efficiency, and output quality',
    category_id: 'ai-prompt',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_3,
    install_count: 312,
    target_job_roles: ['AI/ML Engineer', 'Full-Stack Engineer', 'Product Manager'],
    usage_guide: 'Run /prompt-optimizer "your prompt text here" or pass a file path containing the prompt.',
    body: `---
name: prompt-optimizer
description: Optimize LLM prompts for clarity and efficiency
---

Analyze and improve an LLM prompt for better results.

## Arguments
\$ARGUMENTS: prompt text or file path containing a prompt

## Analysis Steps

1. Read the prompt from \$ARGUMENTS (detect if it's a file path or inline text)
2. Evaluate the prompt on these dimensions:
   - **Clarity**: Is the instruction unambiguous?
   - **Specificity**: Are constraints and requirements explicit?
   - **Structure**: Is it well-organized with clear sections?
   - **Token Efficiency**: Can it be shorter without losing meaning?
   - **Output Format**: Is the expected output format defined?
   - **Edge Cases**: Are boundary conditions addressed?
   - **Examples**: Are few-shot examples included where helpful?

3. Generate an optimized version with:
   - Clear role/system instruction
   - Structured sections with headers
   - Explicit output format specification
   - Relevant examples if applicable
   - Token count comparison (before vs after)

4. Provide a diff showing what changed and why

## Tips included:
- When to use system vs user prompts
- Prompt caching considerations for Anthropic API
- Temperature and top_p recommendations
`,
    created_at: '2026-04-11T15:30:00Z',
  },

  // ────────────────────────────────────────────
  // 11. Data Analysis — Intermediate — Data
  // ────────────────────────────────────────────
  {
    id: makeId(11),
    name: 'csv-insights',
    description: 'Analyze CSV/JSON data files and generate summary statistics, visualizations, and actionable insights',
    category_id: 'data-analysis',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_3,
    install_count: 145,
    target_job_roles: ['Data Scientist', 'Data Engineer', 'Product Manager'],
    usage_guide: 'Run /csv-insights data/users.csv to get a comprehensive analysis of your dataset.',
    body: `---
name: csv-insights
description: Analyze data files and generate insights with statistics
---

Analyze a CSV or JSON data file and provide comprehensive insights.

## Arguments
\$ARGUMENTS: path to a CSV or JSON file

## Analysis Pipeline

### 1. Data Profiling
- Row count, column count
- Data types per column
- Missing value analysis
- Unique value counts

### 2. Statistical Summary
- Numeric columns: mean, median, std, min, max, quartiles
- Categorical columns: top values, frequency distribution
- Date columns: range, gaps, trends

### 3. Data Quality
- Duplicate rows
- Outlier detection (IQR method)
- Format inconsistencies
- Encoding issues

### 4. Correlations & Patterns
- Numeric correlations (Pearson)
- Categorical associations
- Time-based trends if date column exists

### 5. Actionable Insights
- Key findings in plain English
- Data quality recommendations
- Suggested next analyses
- Anomalies worth investigating

## Output: Markdown report with tables and ASCII charts
`,
    created_at: '2026-04-12T11:00:00Z',
  },

  // ────────────────────────────────────────────
  // 12. Workflow — Beginner — Product
  // ────────────────────────────────────────────
  {
    id: makeId(12),
    name: 'standup-prep',
    description: 'Auto-generate your daily standup update from git commits, branch status, and JIRA/Linear tickets',
    category_id: 'workflow',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 387,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'Engineering Manager', 'Product Manager'],
    usage_guide: 'Run /standup-prep before your daily standup. It auto-generates your update from your recent activity.',
    body: `---
name: standup-prep
description: Generate daily standup from git activity and project context
---

Generate a formatted standup update based on recent work activity.

## Instructions

1. Get recent git activity:
   - \`git log --oneline --since="yesterday" --author=$(git config user.email)\`
   - \`git diff --stat HEAD~5\` for files changed
   - Current branch and its status

2. Analyze the commits and changes to determine:
   - What was completed yesterday
   - What's in progress (uncommitted changes, current branch work)
   - Potential blockers (merge conflicts, failing tests, TODOs)

3. Format as standup update:

## Output Format

### ✅ Yesterday
- [Completed items based on commits]

### 🔄 Today
- [In-progress items based on current branch/changes]
- [Planned items based on TODO comments and branch name]

### 🚧 Blockers
- [Any identified blockers or concerns]

### 📊 Stats
- X commits | Y files changed | +Z/-W lines

Keep each bullet point concise (1 line). Use past tense for completed, future tense for planned.
`,
    created_at: '2026-04-13T06:00:00Z',
  },

  // ────────────────────────────────────────────
  // 13. Git — Beginner — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(13),
    name: 'smart-commit',
    description: 'Generate conventional commit messages from staged changes with scope detection and breaking change flags',
    category_id: 'git',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 456,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'DevOps / SRE'],
    usage_guide: 'Stage your changes with git add, then run /smart-commit to generate and apply a conventional commit.',
    body: `---
name: smart-commit
description: Generate conventional commit messages from staged changes
---

Analyze staged git changes and generate a properly formatted conventional commit message.

## Instructions

1. Run \`git diff --staged\` to see all staged changes
2. Analyze the nature of changes:
   - **feat**: New feature or capability
   - **fix**: Bug fix
   - **refactor**: Code restructuring without behavior change
   - **docs**: Documentation only
   - **test**: Adding or fixing tests
   - **chore**: Build, CI, dependency updates
   - **perf**: Performance improvement
   - **style**: Code formatting (no logic change)
3. Detect the scope from file paths (e.g., auth, api, ui, db)
4. Check for breaking changes (API signature changes, removed exports, schema changes)
5. Generate the commit message:

\`\`\`
<type>(<scope>): <short description>

<body explaining what and why, not how>

[BREAKING CHANGE: description if applicable]
\`\`\`

6. Present the message and ask for confirmation before committing
7. Run \`git commit -m "<message>"\` when confirmed

## Rules
- Subject line max 72 characters
- Body wraps at 80 characters
- Use imperative mood ("add" not "added")
- Reference issue numbers if detectable from branch name
`,
    created_at: '2026-04-14T08:45:00Z',
  },

  // ────────────────────────────────────────────
  // 14. API Design — Advanced — Platform
  // ────────────────────────────────────────────
  {
    id: makeId(14),
    name: 'api-scaffold',
    description: 'Generate REST or GraphQL API endpoints with validation, auth middleware, error handling, and OpenAPI spec',
    category_id: 'api-design',
    difficulty: 'advanced',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 189,
    target_job_roles: ['Backend Engineer', 'Full-Stack Engineer', 'Tech Lead'],
    usage_guide: 'Run /api-scaffold "User management CRUD with email verification" --style rest to scaffold an entire API module.',
    body: `---
name: api-scaffold
description: Generate complete API endpoints with validation and docs
---

Scaffold a complete API module with all production concerns addressed.

## Arguments
\$ARGUMENTS: API description [--style rest|graphql] [--auth jwt|session|apikey]

## Generated Files

### REST Mode
1. **Route handler** with CRUD operations
2. **Validation schemas** (Zod/Joi) for request body, params, query
3. **Auth middleware** for protected routes
4. **Error handling** with consistent error response format
5. **OpenAPI/Swagger spec** for the new endpoints
6. **Integration tests** with supertest/vitest

### GraphQL Mode
1. **Type definitions** (SDL)
2. **Resolvers** with DataLoader for N+1 prevention
3. **Input validation** types
4. **Auth directives**

## Standards
- Use existing project patterns and ORM (Prisma/TypeORM/Drizzle)
- Include pagination for list endpoints
- Add rate limiting annotations
- Follow REST naming conventions (plural nouns, proper HTTP methods)
- Include response type definitions
- Add request/response logging hooks
`,
    created_at: '2026-04-15T12:00:00Z',
  },

  // ────────────────────────────────────────────
  // 15. Developer Experience — Beginner — DevOps
  // ────────────────────────────────────────────
  {
    id: makeId(15),
    name: 'env-doctor',
    description: 'Diagnose and fix common development environment issues — missing tools, wrong versions, broken configs',
    category_id: 'devex',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_2,
    install_count: 298,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'DevOps / SRE'],
    usage_guide: 'Run /env-doctor when something feels broken in your dev setup. It checks everything.',
    body: `---
name: env-doctor
description: Diagnose and fix development environment issues
---

Run a comprehensive health check on the development environment.

## Checks

### Runtime Versions
- Node.js version matches .nvmrc / .node-version / engines field
- Python version matches .python-version / pyproject.toml
- Package manager version (npm/yarn/pnpm/bun)

### Dependencies
- node_modules exists and matches lock file
- No phantom dependencies
- Peer dependency warnings

### Configuration
- .env file exists with all required variables (check .env.example)
- IDE settings (.vscode/settings.json) are project-compatible
- Git hooks are installed (husky/lefthook)
- TypeScript config is valid

### Services
- Database connection works
- Redis/cache connectivity
- Required ports are available (not in use)

### Common Fixes
For each issue found:
1. Explain what's wrong
2. Provide the exact fix command
3. Offer to run it automatically

## Output: Health report card with ✅/❌ for each check and auto-fix commands
`,
    created_at: '2026-04-16T14:30:00Z',
  },

  // ────────────────────────────────────────────
  // 16. Testing — Beginner — QA
  // ────────────────────────────────────────────
  {
    id: makeId(16),
    name: 'gen-tests',
    description: 'Automatically generate unit tests for any function or module with edge cases and mocking',
    category_id: 'testing',
    difficulty: 'beginner',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 378,
    target_job_roles: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'QA Engineer'],
    usage_guide: 'Run /gen-tests src/utils/formatter.ts to auto-generate comprehensive unit tests.',
    body: `---
name: gen-tests
description: Auto-generate unit tests with edge cases and mocking
---

Generate comprehensive unit tests for the specified file or function.

## Arguments
\$ARGUMENTS: file path [function name]

## Instructions

1. Read the target file and understand each exported function
2. Detect the project's test framework (Jest, Vitest, Mocha, etc.)
3. For each function, generate tests covering:
   - **Happy path**: Normal inputs and expected outputs
   - **Edge cases**: Empty strings, zero, null, undefined, large numbers
   - **Error cases**: Invalid input types, missing required params
   - **Boundary values**: Min/max, array boundaries, string limits
4. Mock external dependencies:
   - Database calls
   - API requests (fetch/axios)
   - File system operations
   - Date/time (use fake timers)
5. Follow the project's test file naming convention
6. Include setup/teardown if needed
7. Add descriptive test names following "should X when Y" pattern

## Output
- Test file written to the correct location
- Summary of test count and coverage areas
- Suggestions for integration tests if applicable
`,
    created_at: '2026-04-17T10:00:00Z',
  },

  // ────────────────────────────────────────────
  // 17. AI & Prompts — Advanced — AI/ML
  // ────────────────────────────────────────────
  {
    id: makeId(17),
    name: 'eval-builder',
    description: 'Build structured LLM evaluation suites with test cases, scoring rubrics, and regression tracking',
    category_id: 'ai-prompt',
    difficulty: 'advanced',
    visibility: 'public',
    author_id: DEMO_AUTHOR_3,
    install_count: 98,
    target_job_roles: ['AI/ML Engineer', 'Data Scientist', 'Tech Lead'],
    usage_guide: 'Run /eval-builder "Summarization quality for support tickets" to create an eval suite for your LLM feature.',
    body: `---
name: eval-builder
description: Build LLM evaluation suites with test cases and scoring
---

Create a structured evaluation suite for an LLM-powered feature.

## Arguments
\$ARGUMENTS: description of the LLM feature to evaluate

## Generated Artifacts

### 1. Test Case Dataset
- 10-20 diverse test cases with:
  - Input prompt/context
  - Expected output characteristics
  - Edge cases (long input, multilingual, ambiguous)
  - Adversarial cases (prompt injection, off-topic)

### 2. Scoring Rubric
- Dimension-based scoring (1-5 scale):
  - Accuracy/Correctness
  - Relevance
  - Completeness
  - Tone/Style
  - Safety/Harmlessness
- Per-dimension weight configuration

### 3. Evaluation Harness
- Script that runs all test cases
- Supports human eval and LLM-as-judge
- Outputs CSV with scores per dimension
- Calculates aggregate metrics

### 4. Regression Tracking
- Baseline scores file
- Comparison script (current vs baseline)
- Alert thresholds for score drops

## Output: Complete eval directory with test cases, rubric, runner script, and baseline
`,
    created_at: '2026-04-18T16:45:00Z',
  },

  // ────────────────────────────────────────────
  // 18. Documentation — Intermediate — Engineering
  // ────────────────────────────────────────────
  {
    id: makeId(18),
    name: 'api-docs-gen',
    description: 'Extract API documentation from code comments, types, and routes into OpenAPI/Swagger spec',
    category_id: 'documentation',
    difficulty: 'intermediate',
    visibility: 'public',
    author_id: DEMO_AUTHOR_ID,
    install_count: 167,
    target_job_roles: ['Backend Engineer', 'Full-Stack Engineer', 'Tech Lead'],
    usage_guide: 'Run /api-docs-gen src/routes/ to generate OpenAPI documentation from your route handlers.',
    body: `---
name: api-docs-gen
description: Generate OpenAPI spec from code comments and route definitions
---

Extract and generate API documentation from source code.

## Arguments
\$ARGUMENTS: API routes directory path

## Instructions

1. Scan all route/controller files in the directory
2. For each endpoint, extract:
   - HTTP method and path
   - Request parameters (path, query, body)
   - Response types and status codes
   - Authentication requirements
   - JSDoc/TSDoc comments
3. Infer types from:
   - TypeScript interfaces/types
   - Zod/Joi validation schemas
   - Prisma models (for response shapes)
4. Generate OpenAPI 3.0 specification:
   - Info section with API title and version
   - Server URLs from environment config
   - Path operations with full request/response docs
   - Component schemas from shared types
   - Security schemes
5. Write to docs/openapi.yaml
6. Optionally generate a Markdown API reference

## Bonus
- Detect undocumented endpoints and flag them
- Validate existing OpenAPI spec against actual code
- Generate example requests with curl commands
`,
    created_at: '2026-04-19T09:15:00Z',
  },

  // ────────────────────────────────────────────
  // 19. Workflow — Intermediate — Growth
  // ────────────────────────────────────────────
  {
    id: makeId(19),
    name: 'feature-flag-audit',
    description: 'Scan codebase for stale feature flags, clean up dead code paths, and generate a flag inventory report',
    category_id: 'workflow',
    difficulty: 'intermediate',
    visibility: 'team_only',
    author_id: DEMO_AUTHOR_3,
    install_count: 87,
    target_job_roles: ['Full-Stack Engineer', 'Product Manager', 'Growth Hacker', 'Tech Lead'],
    usage_guide: 'Run /feature-flag-audit to scan for all feature flags in the codebase and identify stale ones for cleanup.',
    body: `---
name: feature-flag-audit
description: Audit feature flags for staleness and generate cleanup PRs
---

Scan the codebase for feature flag usage and identify cleanup opportunities.

## Instructions

1. Search for feature flag patterns:
   - \`isEnabled('flag-name')\`
   - \`useFeatureFlag('flag-name')\`
   - \`process.env.FEATURE_*\`
   - GrowthBook, LaunchDarkly, or custom flag checks
2. For each flag found:
   - List all files and line numbers where it's used
   - Check git blame for when it was added
   - Determine if it's a kill switch, experiment, or rollout flag
   - Flag age (>30 days = stale candidate)
3. Cross-reference with feature flag service (if config found):
   - Is the flag still active?
   - What's its current value/rollout percentage?
   - Is it at 100% (can be removed)?
4. Generate inventory report
5. For flags safe to remove, generate cleanup suggestions:
   - Which code path to keep (true or false branch)
   - Files to modify
   - Dead code to remove

## Output: Feature flag inventory with staleness scores and cleanup plan
`,
    created_at: '2026-04-20T13:30:00Z',
  },

  // ────────────────────────────────────────────
  // 20. Security — Intermediate — Security (Team-only)
  // ────────────────────────────────────────────
  {
    id: makeId(20),
    name: 'secret-scanner',
    description: 'Deep scan for leaked secrets, API keys, tokens, and credentials in code, configs, and git history',
    category_id: 'security',
    difficulty: 'intermediate',
    visibility: 'team_only',
    author_id: DEMO_AUTHOR_2,
    install_count: 176,
    target_job_roles: ['Security Engineer', 'DevOps / SRE', 'Backend Engineer'],
    usage_guide: 'Run /secret-scanner to scan the current repo for any leaked secrets or credentials.',
    body: `---
name: secret-scanner
description: Scan for leaked secrets, API keys, and credentials
---

Deep scan the repository for leaked secrets and sensitive data.

## Scan Targets

### File Contents
Search all files for patterns matching:
- AWS keys: \`AKIA[0-9A-Z]{16}\`
- GitHub tokens: \`ghp_[a-zA-Z0-9]{36}\`
- Slack tokens: \`xox[baprs]-[a-zA-Z0-9-]+\`
- Generic API keys: \`[a-zA-Z_]*(?:api|secret|token|key|password|auth)[a-zA-Z_]*\\s*[=:]\\s*['"][^'"]+['\"]\`
- Private keys: \`-----BEGIN .* PRIVATE KEY-----\`
- Connection strings with credentials
- JWT tokens

### Configuration Files
- .env files (even in .gitignore)
- docker-compose.yml
- CI/CD configs (.github/workflows, .gitlab-ci.yml)
- Terraform/infrastructure files
- Kubernetes manifests

### Git History (optional)
- Check if any secrets were previously committed and "removed"
- Scan recent commits for accidental credential commits

## Output
For each finding:
- 🔴 Severity (Critical if production key, High if any valid secret)
- File path and line number
- Masked preview of the secret
- Remediation: rotate, revoke, add to .gitignore
- Pre-commit hook suggestion to prevent future leaks
`,
    created_at: '2026-04-21T11:00:00Z',
  },
];

// ────────────────────────────────────────────
// Category distribution summary:
// ────────────────────────────────────────────
// code-review: 1 (quick-review)
// automation: 1 (scaffold-component)
// testing: 2 (mutation-test, gen-tests)
// documentation: 2 (auto-readme, api-docs-gen)
// debugging: 1 (trace-bug)
// refactoring: 1 (extract-service)
// deployment: 1 (deploy-checklist)
// security: 2 (vuln-scan, secret-scanner)
// performance: 1 (perf-audit)
// ai-prompt: 2 (prompt-optimizer, eval-builder)
// data-analysis: 1 (csv-insights)
// workflow: 2 (standup-prep, feature-flag-audit)
// git: 1 (smart-commit)
// api-design: 1 (api-scaffold)
// devex: 1 (env-doctor)
//
// Difficulties: beginner=7, intermediate=8, advanced=5
// Visibility: public=18, team_only=2
// Authors: Sarah Chen=8, Alex Rivera=6, Jordan Kim=6

export default SEED_SKILLS;

# Vizzy Labs Coding Challenge - Interviewer Guide

**CONFIDENTIAL - DO NOT SHARE WITH CANDIDATES**

This guide explains how to conduct technical interviews using the Vizzy Labs coding challenges, with a focus on evaluating AI-assisted development skills.

---

## Philosophy: Why This Format?

Traditional coding challenges test if someone can write code. But in an AI-assisted world, that's no longer the differentiator. We need to evaluate:

1. **Can they leverage AI effectively?** - Not just "use AI" but direct it purposefully
2. **Do they understand what they're building?** - Not black-box coding
3. **Can they identify and correct AI mistakes?** - Critical oversight ability
4. **Do they have a development process?** - Not just vibing

This challenge is intentionally designed with **minimal hints** so that:
- Candidates must investigate the problem themselves
- AI tools won't get a perfect solution from just the README
- We can see how candidates think, not just how their AI thinks

---

## Repository Structure

```
vizzylabs-code-challenge/
├── README.md                           # Candidate-facing, minimal info
│
├── ai-automation-challenge/            # SHARE WITH CANDIDATES
│   ├── README.md                       # Minimal hints, just describes problems
│   ├── models.py                       # Has bugs (no hint comments)
│   ├── moderation_service.py           # Incomplete (no hint comments)
│   ├── main.py                         # Incomplete (no hint comments)
│   ├── mock_clients.py                 # Working - don't modify
│   └── requirements.txt
│
├── mobile-backend-challenge/           # SHARE WITH CANDIDATES
│   ├── README.md                       # Minimal hints, just says "it's slow"
│   ├── services/creator_service.py     # Has performance bugs (no hints)
│   ├── services/analytics_service.py   # Stub (no hints)
│   ├── routes/analytics.py             # Stub (no hints)
│   ├── schemas.py                      # Incomplete (no hints)
│   └── [other files - working]
│
└── internal/                           # NEVER SHARE - EVALUATOR ONLY
    ├── INTERVIEWER_GUIDE.md            # This file
    ├── INTERVIEWER_SCORING_SHEET.md    # Technical scoring rubric
    ├── AI_WORKFLOW_EVALUATION.md       # AI usage evaluation framework
    ├── SETUP_GUIDE.md                  # Setup and troubleshooting
    └── solutions/
        ├── ai-automation-challenge/
        │   └── SOLUTION_REFERENCE.md   # Complete solutions
        └── mobile-backend-challenge/
            └── SOLUTION_REFERENCE.md   # Complete solutions
```

---

## What Candidates See vs What They Don't

### Candidates SEE:
- Brief problem description ("it's slow", "has bugs")
- File locations to investigate
- Setup instructions
- Time limit

### Candidates DON'T SEE:
- What the specific bugs are (no "N+1 problem" mentions)
- Solution code or hints
- Evaluation criteria
- Scoring breakdown
- This interviewer guide

---

## Interview Format

### Total Time: ~22 minutes

| Phase | Duration | What Happens |
|-------|----------|--------------|
| Setup | 1 min | Candidate shares screen, confirms setup |
| Coding | 15 min | Candidate works on challenge |
| AI Workflow Discussion | 5-7 min | You evaluate their AI process |
| Wrap Up | 1 min | Thank them, explain next steps |

---

## Before the Interview

### Candidate Requirements
- [ ] Repository cloned
- [ ] Python 3.9+ installed
- [ ] AI coding tool ready (Cursor, Copilot, Claude Code, etc.)
- [ ] Screen share working
- [ ] Can run uvicorn

### Your Requirements
- [ ] This guide open
- [ ] Scoring sheet ready (from internal/INTERVIEWER_SCORING_SHEET.md)
- [ ] AI Workflow Evaluation sheet (from internal/AI_WORKFLOW_EVALUATION.md)
- [ ] Solution reference accessible (for your reference only)
- [ ] Timer ready
- [ ] Note-taking tool

---

## During the Coding Phase (15 minutes)

### What to Observe (Take Notes)

**AI Interaction Patterns:**
- How do they prompt the AI?
- Do they read AI output before accepting?
- Do they iterate on prompts?
- Do they make manual corrections?

**Problem-Solving Approach:**
- Do they investigate before asking AI to fix?
- Do they understand the problem first?
- Do they test their changes?
- Do they prioritize effectively?

**Technical Skills:**
- Do they understand the code they're generating?
- Can they spot issues in AI output?
- Do they follow patterns in the codebase?

### When to Intervene

**DO intervene if:**
- Stuck for >3 minutes with no progress
- Completely wrong path that wastes remaining time
- Misunderstood the problem entirely

**DON'T intervene to:**
- Give away solutions
- Tell them about specific bugs
- Suggest AI prompts

**Sample hints (if needed):**
- "Have you looked at [specific file] yet?"
- "What do you think might be causing the slowness?"
- "Maybe test that change before moving on"

---

## Post-Coding Discussion (5-7 minutes)

**This is critical.** Use the AI Workflow Evaluation Framework to assess:

### 1. Prompt Construction (1-2 minutes)
Ask: "Walk me through how you structured your prompts to the AI."

Listen for:
- Deliberate vs random prompting
- Context-setting before requests
- Iteration based on output

### 2. Workflow & Planning (1-2 minutes)
Ask: "Before you started, what was your plan? How did the AI follow it?"

Listen for:
- Had a mental model before starting
- Noticed when AI deviated
- Corrected course when needed

### 3. Code Understanding (2-3 minutes)
Pick a specific piece of AI-generated code and ask: "Explain what this does and why."

Listen for:
- Can they explain the code fluently?
- Do they understand the underlying concepts?
- Do they know trade-offs?

---

## Challenge-Specific Notes

### AI Automation Challenge

**The Hidden Bugs:**
1. `models.py`: Missing validators for whitespace content, empty creator_id, safety/violation consistency
2. `moderation_service.py`: Hardcoded confidence, always returns NONE violation, no fallback chain, no error handling
3. `main.py`: Service never initialized, no timing, no error handling

**What Good Candidates Notice:**
- Service is None on startup (will crash)
- OpenAI results aren't using actual API data
- There's an Anthropic client but it's never called
- No timeout handling

**AI Will Struggle With:**
- Understanding the mock client interface without hints
- Creating a good prompt for Anthropic without guidance
- The cross-field validator pattern

### Mobile Backend Challenge

**The Hidden Bugs:**
1. `creator_service.py`: N+1 query (queries all creators, then loops), no pagination used, possible duplicates
2. `schemas.py`: Missing response models
3. `analytics_service.py` & `routes/analytics.py`: Empty stubs

**What Good Candidates Notice:**
- The endpoint is slow (they should test it)
- Pagination parameters exist but aren't used
- The code loads everything then filters in Python

**AI Will Struggle With:**
- Identifying N+1 without explicit hints
- Understanding the pagination should use offset/limit
- Creating efficient SQLAlchemy queries

---

## Scoring

### Use Two Evaluation Tools:

1. **Technical Scoring Sheet** (`internal/INTERVIEWER_SCORING_SHEET.md`)
   - Evaluates: code quality, bug fixes, completeness
   - Max: 100 points

2. **AI Workflow Evaluation** (`internal/AI_WORKFLOW_EVALUATION.md`)
   - Evaluates: prompt construction, planning, understanding
   - Max: 55 points

### Combined Assessment

| Technical Score | AI Workflow Score | Recommendation |
|----------------|-------------------|----------------|
| 70+ | 35+ | **Strong Hire** |
| 70+ | 25-34 | **Hire** (coach on AI practices) |
| 60-69 | 35+ | **Hire** (coach on technical) |
| 60-69 | 25-34 | **Maybe** (discuss with team) |
| <60 | Any | **No Hire** |
| Any | <25 | **No Hire** (black-box coder) |

---

## Key Signals

### Green Flags (Hire)
- Investigates the problem before asking AI to fix
- Iterates on AI prompts when output isn't right
- Makes manual corrections to AI output
- Can explain all code they "wrote"
- Had a plan and followed it
- Tests changes before moving on

### Red Flags (No Hire)
- "Just asked AI to fix everything"
- Can't explain what specific code does
- No plan, just started asking AI
- Accepted all AI output without review
- Over-reliant: "I couldn't do this without AI"
- Gets defensive about AI choices

### Yellow Flags (Discuss)
- Good technical output but poor AI workflow
- Strong AI workflow but incomplete technical solution
- Can explain some code but not all
- Some planning but not followed through

---

## Common Scenarios

### Candidate Finishes Early
- Ask them to improve or refactor something
- Ask more in-depth AI workflow questions
- Have them explain trade-offs of their approach

### Candidate Struggles Throughout
- Give hints at 3+ minute stuck points
- Evaluate what they DID complete thoroughly
- Focus discussion on their process and thinking

### AI Tool Breaks/Slow
- Note in evaluation
- Give extra time if significant (1-2 minutes)
- Don't penalize for tool issues

### Candidate Wants to Use Different Tool
- That's fine, any AI tool is acceptable
- Note which tool they used

---

## After the Interview

1. Complete Technical Scoring Sheet
2. Complete AI Workflow Evaluation
3. Write 2-3 sentence summary
4. Make recommendation with rationale
5. Note any specific strengths/concerns
6. Submit evaluation to hiring platform

---

## Resetting for Next Candidate

```bash
# Reset code files
git checkout ai-automation-challenge/
git checkout mobile-backend-challenge/

# Database is in-memory, restarts automatically
```

---

## FAQ

**Q: What if the candidate doesn't use AI at all?**
A: That's fine for the technical portion. Note it in AI Workflow as "chose not to use AI" and evaluate based on their reasoning. Strong manual coders are still valuable.

**Q: What if they look at the internal/ folder?**
A: This shouldn't happen if you share the repo correctly (exclude internal/). If it does, the interview is compromised - reschedule with awareness.

**Q: What if AI gives them a perfect solution immediately?**
A: With the minimal hints in our README, this is unlikely. If it happens, the AI Workflow questions will reveal if they understand the solution. "AI luck" without understanding is still a red flag.

**Q: How strict should I be on time?**
A: At 15 minutes, give a 1-minute warning. At 16 minutes, stop coding. The time constraint is part of the evaluation.

---

## Contact

Questions about this interview process:
- Slack: #eng-hiring
- Email: hiring@vizzylabs.com

---

*Remember: We're evaluating potential teammates, not just code. Technical skill AND how they work with AI matters.*

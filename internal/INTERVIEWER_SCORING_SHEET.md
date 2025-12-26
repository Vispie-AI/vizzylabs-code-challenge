# Vizzy Labs Coding Challenge - Complete Scoring Sheet

**Candidate Name:** ___________________________
**Position:** [ ] AI Automation Engineer  [ ] Mobile Backend Engineer
**Interview Date:** ___________________________
**Interviewer:** ___________________________

---

## Pre-Interview Checklist

- [ ] Candidate screen sharing ready
- [ ] Timer ready (15 min coding + 5-7 min discussion)
- [ ] AI Workflow Evaluation framework accessible
- [ ] Solution reference accessible (for your reference only)

---

# PART A: TECHNICAL EVALUATION (70 points)

*Score only the challenge for the candidate's position*

---

## AI AUTOMATION ENGINEER CHALLENGE

### Bug Identification & Fixing (40 points)

**Service Initialization (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Fixed with proper lifespan/startup, dependency injection |
| 6-8 | Fixed but not ideal pattern |
| 3-5 | Partially fixed, service works |
| 0-2 | Not addressed or still broken |

**Score: ___/10**

**Validation Issues (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | All validators (whitespace, empty creator_id, safety consistency) |
| 6-8 | Two validators correct |
| 3-5 | One validator correct |
| 0-2 | No validators or incorrect |

**Score: ___/10**

**OpenAI Integration (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Extracts actual violation type AND confidence |
| 6-8 | One correctly extracted |
| 3-5 | Attempted fix but incorrect |
| 0-2 | Not addressed |

**Score: ___/10**

**Fallback & Error Handling (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Full fallback chain with proper timeout handling |
| 6-8 | Fallback works, minor issues |
| 3-5 | Partial implementation |
| 0-2 | No fallback or broken |

**Score: ___/10**

### Code Quality (20 points)

**Async Patterns (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Proper async/await, asyncio.wait_for for timeout |
| 6-8 | Mostly correct, minor issues |
| 3-5 | Works but messy |
| 0-2 | Incorrect patterns |

**Score: ___/10**

**Prompt Engineering for Anthropic (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Clear structured prompt, returns valid JSON |
| 6-8 | Works but could be clearer |
| 3-5 | Basic prompt, may have issues |
| 0-2 | Poor or no prompt |

**Score: ___/10**

### Completion (10 points)

| Score | Criteria |
|-------|----------|
| 9-10 | All features working |
| 6-8 | Most features done |
| 3-5 | Half complete |
| 0-2 | Minimal completion |

**Score: ___/10**

**AI AUTOMATION TECHNICAL TOTAL: ___/70**

---

## MOBILE BACKEND ENGINEER CHALLENGE

### Performance Fix (40 points)

**Problem Identification (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Correctly identified N+1 query pattern |
| 6-8 | Identified "too many queries" generally |
| 3-5 | Knew something was wrong, vague |
| 0-2 | Couldn't identify the issue |

**Score: ___/10**

**Query Optimization (15 pts)**

| Score | Criteria |
|-------|----------|
| 13-15 | Proper JOIN with GROUP BY, single query |
| 9-12 | Works but not optimal |
| 5-8 | Improved but still has issues |
| 0-4 | No fix or still N+1 |

**Score: ___/15**

**Pagination (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Correct offset/limit using page params |
| 6-8 | Works with calculation issues |
| 3-5 | Attempted but incorrect |
| 0-2 | No pagination |

**Score: ___/10**

**Response Time (5 pts)**

| Score | Criteria |
|-------|----------|
| 5 | <500ms consistently |
| 3-4 | 500-1000ms |
| 1-2 | 1-2 seconds |
| 0 | >2 seconds |

**Score: ___/5**

### Analytics Implementation (20 points)

**Service Layer (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Efficient SQL, handles division by zero |
| 6-8 | Works but calculates in Python |
| 3-5 | Partial implementation |
| 0-2 | Not implemented |

**Score: ___/10**

**Route & Schemas (10 pts)**

| Score | Criteria |
|-------|----------|
| 9-10 | Complete route with error handling, proper schemas |
| 6-8 | Works, basic implementation |
| 3-5 | Partial implementation |
| 0-2 | Not implemented |

**Score: ___/10**

### Code Quality (10 points)

| Score | Criteria |
|-------|----------|
| 9-10 | Clean patterns, proper Pydantic, efficient SQLAlchemy |
| 6-8 | Generally good, minor issues |
| 3-5 | Works but messy |
| 0-2 | Poor quality |

**Score: ___/10**

**MOBILE BACKEND TECHNICAL TOTAL: ___/70**

---

# PART B: AI WORKFLOW EVALUATION (55 points)

*Use the detailed AI_WORKFLOW_EVALUATION.md during discussion*

### B1: Prompt Construction (10 pts)
*"Walk me through how you structured your prompts to the AI"*

| Score | Criteria |
|-------|----------|
| 9-10 | Deliberate structure, provides context, iterates based on output |
| 6-8 | Some reasoning, generally good prompts |
| 3-5 | Vague or generic prompts |
| 0-2 | No clear strategy, just accepting first output |

**Score: ___/10**

**Notes:** _______________________________________________

---

### B2: Workflow & Planning (15 pts)
*"What was your plan before starting? How did AI follow it?"*

| Score | Criteria |
|-------|----------|
| 13-15 | Clear plan with priorities, noticed deviations, corrected AI |
| 9-12 | Had a plan, some course correction |
| 5-8 | Vague plan, mostly followed AI's lead |
| 0-4 | No plan, started asking AI randomly |

**Score: ___/15**

**Notes:** _______________________________________________

---

### B3: Code Understanding (20 pts)
*Pick a specific piece of code: "Explain what this does and why"*

**Code asked about:** _______________________________________________

| Score | Criteria |
|-------|----------|
| 17-20 | Explains fluently, understands concepts and trade-offs |
| 12-16 | Generally understands, some gaps |
| 6-11 | Surface-level, misses key concepts |
| 0-5 | Cannot explain the code |

**Score: ___/20**

**Notes:** _______________________________________________

---

### B4: AI Correction Capability (10 pts)
*"Did you have to correct anything the AI suggested?"*

| Score | Criteria |
|-------|----------|
| 9-10 | Made meaningful corrections, has review process |
| 6-8 | Some corrections or improvements |
| 3-5 | Minor corrections only |
| 0-2 | Accepted all AI output without changes |

**Score: ___/10**

**Notes:** _______________________________________________

---

**AI WORKFLOW TOTAL: ___/55**

---

# COMBINED SCORING

| Section | Score | Max |
|---------|-------|-----|
| A: Technical | | 70 |
| B: AI Workflow | | 55 |
| **TOTAL** | | **125** |

---

## Recommendation Matrix

| Technical (70) | AI Workflow (55) | Recommendation |
|----------------|------------------|----------------|
| 50+ (71%+) | 35+ (64%+) | **Strong Hire** |
| 50+ (71%+) | 25-34 (45-63%) | **Hire** |
| 42-49 (60-70%) | 35+ (64%+) | **Hire** |
| 42-49 (60-70%) | 25-34 (45-63%) | **Maybe** - Discuss |
| <42 (<60%) | Any | **No Hire** |
| Any | <25 (<45%) | **No Hire** (black-box coder) |

---

## Final Recommendation

[ ] **Strong Hire** - Excellent technical + understands AI workflow
[ ] **Hire** - Solid candidate, meets expectations
[ ] **Maybe** - Discuss with team
[ ] **No Hire** - Below minimum bar

---

## Summary

**Key Strengths:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Concerns:**
1. _______________________________________________
2. _______________________________________________

**Overall Notes:**
_______________________________________________
_______________________________________________
_______________________________________________

---

**Interviewer:** ___________________________
**Date:** ___________________________

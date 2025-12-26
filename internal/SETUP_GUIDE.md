# Setup Guide for Vizzy Labs Coding Challenges

**INTERNAL DOCUMENT - DO NOT SHARE WITH CANDIDATES**

---

## Repository Structure

```
vizzylabs-code-challenge/
├── README.md                           ← CANDIDATE-FACING (minimal info)
│
├── ai-automation-challenge/            ← SHARE WITH CANDIDATES
│   ├── README.md                       (minimal hints)
│   ├── models.py                       (bugs, no hint comments)
│   ├── moderation_service.py           (incomplete, no hints)
│   ├── main.py                         (incomplete, no hints)
│   ├── mock_clients.py                 (working)
│   └── requirements.txt
│
├── mobile-backend-challenge/           ← SHARE WITH CANDIDATES
│   ├── README.md                       (minimal hints - "it's slow")
│   ├── services/creator_service.py     (bugs, no hints)
│   ├── services/analytics_service.py   (stub)
│   ├── routes/analytics.py             (stub)
│   ├── schemas.py                      (incomplete)
│   └── [other working files]
│
└── internal/                           ← NEVER SHARE
    ├── INTERVIEWER_GUIDE.md            (main guide)
    ├── INTERVIEWER_SCORING_SHEET.md    (scoring)
    ├── AI_WORKFLOW_EVALUATION.md       (AI usage eval)
    ├── SETUP_GUIDE.md                  (this file)
    └── solutions/
        ├── ai-automation-challenge/
        │   └── SOLUTION_REFERENCE.md
        └── mobile-backend-challenge/
            └── SOLUTION_REFERENCE.md
```

---

## Sharing with Candidates

**What to share:**
- Root `README.md`
- `ai-automation-challenge/` (entire folder)
- `mobile-backend-challenge/` (entire folder)

**What to NEVER share:**
- `internal/` folder (contains solutions and evaluation materials)

**Recommended approach:**
1. Clone the repo
2. Delete the `internal/` folder before sharing
3. Or use a separate branch/repo for candidates

---

## Quick Test - AI Automation Challenge

```bash
cd ai-automation-challenge
pip install -r requirements.txt
uvicorn main:app --reload
```

**Expected:** Server starts but crashes when endpoint is called (service is None)

**Test endpoint:**
```bash
curl -X POST "http://localhost:8000/moderate" \
  -H "Content-Type: application/json" \
  -d '{"content": "test", "creator_id": "123"}'
```

**Expected:** Error (service not initialized)

---

## Quick Test - Mobile Backend Challenge

```bash
cd mobile-backend-challenge
pip install -r requirements.txt
uvicorn main:app --reload
```

**Expected:**
- Server starts
- Database seeded automatically (100 creators, 1000 videos)

**Test endpoints:**
```bash
# This should be SLOW (3-5 seconds) - that's the bug
time curl "http://localhost:8000/creators/feed?page=1&page_size=20"

# Health check
curl "http://localhost:8000/health"
```

---

## Interview Flow

### Phase 1: Setup (1 min)
- Confirm candidate has repo cloned
- Confirm screen share working
- Brief overview: "15 min coding, then we'll discuss"

### Phase 2: Coding (15 min)
**Observe silently:**
- How they use AI tools
- Whether they investigate before fixing
- If they test their changes

**Only intervene if:**
- Stuck >3 minutes with no progress
- Completely wrong direction

### Phase 3: AI Workflow Discussion (5-7 min)
Use questions from AI_WORKFLOW_EVALUATION.md:
1. "How did you structure your prompts?"
2. "What was your plan before starting?"
3. "Explain this code to me" (pick something AI generated)

### Phase 4: Wrap Up (1 min)
- Thank candidate
- Explain next steps

---

## Evaluation Tools

1. **INTERVIEWER_SCORING_SHEET.md** - Technical + AI Workflow scoring
2. **AI_WORKFLOW_EVALUATION.md** - Deep dive on AI usage questions
3. **solutions/SOLUTION_REFERENCE.md** - Expected solutions (for your reference)

---

## Common Setup Issues

### "No module named 'fastapi'"
```bash
pip install -r requirements.txt
```

### "Port 8000 already in use"
```bash
uvicorn main:app --port 8001
```

### "Database not seeding"
Restart the app - seed_data runs on startup

---

## Resetting Between Candidates

```bash
# Reset all code files to original state
git checkout ai-automation-challenge/
git checkout mobile-backend-challenge/

# Database is in-memory, resets on restart
```

---

## Key Evaluation Points

### What We're Testing:
1. **Can they identify problems?** (without hints telling them)
2. **Do they investigate before asking AI to fix?**
3. **Do they understand what the AI generates?**
4. **Can they explain their solution?**

### Red Flags:
- "Just asked AI to fix everything"
- Can't explain the code they generated
- No testing of changes
- Accepted all AI output without review

### Green Flags:
- Investigated the problem first
- Iterated on AI prompts
- Made corrections to AI output
- Can explain every piece of code

---

## Support

**Questions?**
- Slack: #eng-hiring
- Email: hiring@vizzylabs.com

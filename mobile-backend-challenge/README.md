# Mobile Backend Engineer Challenge

**Time Limit:** 15 minutes
**Position:** Mobile Backend Engineer

---

## Scenario

You've joined Vizzy Labs as a Mobile Backend Engineer. The Creator Discovery API has been running in production for 6 months.

**The code works. The API responds quickly.**

However, the mobile team has concerns...

---

## The Situation

**From Mobile Lead (in standup):**
> "Users on slower connections (3G, poor WiFi) say the app feels sluggish even though your API response times look fine in our dashboards. The feed takes forever to appear. We've had to add loading spinners everywhere."

**From Product Manager (via email):**
> "We're launching creator analytics next sprint. We need an endpoint showing a creator's top performing videos. But more importantly - our mobile app's data usage is through the roof. Users are complaining about their data plans. Can we do something about response sizes?"

**From iOS Developer (in Slack):**
> "Every time I scroll the feed, I'm making a new request and parsing the same creator data over and over. Is there any way we can cache this better? Also, the response has like 15 fields per creator - we only show 4 in the list view."

**From QA (bug report):**
> "The feed sometimes shows duplicate creators when paginating. Not sure if it's frontend or backend."

---

## Your Task

**You have 15 minutes.** The interviewer is your stakeholder - ask them questions.

We want to see:

1. **How do you diagnose these issues?**
   - Multiple complaints, but are they the same root cause?
   - What would you investigate first?
   - What questions would you ask the mobile team?

2. **What do you prioritize?**
   - You can't fix everything in 15 minutes
   - What's most important? Why?

3. **Implement something**
   - Pick the highest-impact improvement you can make
   - Use AI to help code, but YOU decide what to build

---

## Current System

```bash
cd mobile-backend-challenge
pip install -r requirements.txt
uvicorn main:app --reload
```

The database seeds automatically with 100 creators and 1000 videos.

Test the feed:
```bash
curl "http://localhost:8000/creators/feed?page=1&page_size=20"
```

---

## Files

All files are functional. Modify whatever you think needs changing.

| File | Description |
|------|-------------|
| `main.py` | FastAPI application |
| `routes/creators.py` | Creator feed endpoint |
| `routes/analytics.py` | Analytics endpoint (stub) |
| `services/creator_service.py` | Service layer |
| `services/analytics_service.py` | Analytics service (stub) |
| `schemas.py` | Pydantic response models |
| `models.py` | SQLAlchemy models |
| `database.py` | Database setup |

---

## Important

**We are NOT looking for:**
- You to "find the bug" (the code runs)
- A perfect solution (none exists)
- You to finish everything (impossible in 15 min)

**We ARE looking for:**
- How you think about mobile-specific constraints
- Your prioritization under time pressure
- Your ability to make decisions with incomplete information
- Whether you can direct AI tools vs being directed by them

---

## Remember

**The API works. The question is: what should it do BETTER for mobile?**

That's a design decision, not a bug fix.

# Mobile Backend Engineer Coding Challenge

**Time Limit:** 15 minutes
**Position:** Mobile Backend Engineer

## Scenario

**URGENT:** The mobile team just reported a critical issue with the Creator Discovery Feed API:

**The Problem:**
- The `/creators/feed` endpoint is extremely slow (taking 3-5 seconds)
- Mobile users are complaining about app performance
- The target response time should be under 500ms

**Also Needed:**
- A new video analytics endpoint to show top performing videos for a creator
- The mobile team needs it for a new feature launch

---

## Setup

```bash
cd mobile-backend-challenge
pip install -r requirements.txt
uvicorn main:app --reload
```

The database will automatically seed with test data on startup (100 creators, 1000 videos).

## Test the Slow Endpoint

```bash
# This is currently SLOW - measure it
time curl "http://localhost:8000/creators/feed?page=1&page_size=20"
```

---

## Your Tasks

### Task 1: Fix the Slow Endpoint

The `/creators/feed` endpoint is unacceptably slow. Investigate why and fix it.

**Files to examine:**
- `services/creator_service.py` - The service layer
- `routes/creators.py` - The route handler

**Target:** Response time under 500ms

---

### Task 2: Implement Analytics Endpoint

Create an endpoint to get a creator's top performing videos by engagement.

**Requirements:**
- Endpoint: `GET /analytics/creator/{creator_id}/videos`
- Return top 10 videos sorted by engagement rate
- Engagement rate = (likes + comments) / views
- Handle edge cases (e.g., videos with 0 views)

**Files to implement:**
- `services/analytics_service.py`
- `routes/analytics.py`

---

### Task 3: Response Schemas

Create appropriate Pydantic response models for mobile optimization.

**File:** `schemas.py`

Consider what fields a mobile app actually needs for:
1. A list view of creators (scrolling feed)
2. Video analytics display

---

## Files Overview

**Complete (no changes needed):**
- `main.py` - FastAPI app setup
- `database.py` - Database connection
- `models.py` - SQLAlchemy models
- `seed_data.py` - Test data generation

**Needs Work:**
- `services/creator_service.py` - Has performance issues
- `services/analytics_service.py` - Needs implementation
- `routes/analytics.py` - Needs implementation
- `schemas.py` - Missing response models

---

## Testing

```bash
# Test the feed endpoint (should be fast after your fix)
time curl "http://localhost:8000/creators/feed?page=1&page_size=20"

# Test analytics endpoint (after implementation)
curl "http://localhost:8000/analytics/creator/1/videos"
```

---

## Notes

- Use your AI coding assistant however you'd like
- Focus on making it work and perform well
- Feel free to ask clarifying questions

Good luck!

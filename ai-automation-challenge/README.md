# AI Automation Engineer Coding Challenge

**Time Limit:** 15 minutes
**Position:** AI Automation Engineer

## Scenario

You're building a **content moderation service** for Vizzy Labs that analyzes creator video descriptions for policy violations. The service uses multiple AI providers for reliability.

Your predecessor started the implementation but left it incomplete. There are bugs and missing functionality. Your job is to **make it work**.

---

## Setup

```bash
cd ai-automation-challenge
pip install -r requirements.txt
uvicorn main:app --reload
```

## Test the API

```bash
curl -X POST "http://localhost:8000/moderate" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Check out my awesome video!",
    "creator_id": "creator123",
    "video_id": "video456"
  }'
```

---

## The Problem

The current implementation has several issues:

1. **The service doesn't start properly** - Something is wrong with initialization
2. **Validation is incomplete** - Some invalid requests are being accepted
3. **The OpenAI integration has bugs** - Results are not accurate
4. **No backup when OpenAI fails** - There's an Anthropic client available but not used
5. **Error handling is missing** - Service crashes on failures

---

## Files

| File | Status |
|------|--------|
| `models.py` | Request/Response models - has issues |
| `moderation_service.py` | Core logic - incomplete |
| `main.py` | FastAPI app - incomplete |
| `mock_clients.py` | Mock AI clients - **working, don't modify** |

The mock clients simulate real OpenAI and Anthropic APIs. They work correctly - you don't need real API keys.

---

## Expected Outcome

When complete, the service should:
- Start without errors
- Reject invalid requests properly
- Return accurate moderation results
- Handle failures gracefully
- Track processing time

---

## Notes

- Use your AI coding assistant however you'd like
- The mock clients in `mock_clients.py` are fully functional
- Focus on making it work first, then improve if time allows
- Feel free to ask clarifying questions

Good luck!

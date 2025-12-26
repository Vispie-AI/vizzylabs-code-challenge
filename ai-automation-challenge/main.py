from fastapi import FastAPI, HTTPException, Depends
from contextlib import asynccontextmanager
import time
from models import ModerationRequest, ModerationResponse
from moderation_service import ModerationService
import os

app = FastAPI(title="Content Moderation API")

moderation_service = None


@app.post("/moderate", response_model=ModerationResponse)
async def moderate_content(request: ModerationRequest):
    """Moderate content for policy violations."""
    result = await moderation_service.moderate_content(request)

    return ModerationResponse(
        video_id=request.video_id,
        moderation=result,
        processing_time_ms=0.0
    )

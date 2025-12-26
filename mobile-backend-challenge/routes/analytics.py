from fastapi import APIRouter, Depends, Path, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from services.analytics_service import AnalyticsService

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/creator/{creator_id}/videos")
async def get_creator_video_analytics(
    creator_id: int = Path(..., description="Creator ID", gt=0),
    db: Session = Depends(get_db)
):
    """
    Get video analytics for a creator's top performing videos.

    Returns top 10 videos sorted by engagement rate.
    Not yet implemented - returns empty list.
    """
    service = AnalyticsService(db)
    analytics = service.get_top_videos_by_engagement(creator_id)

    if not analytics:
        # Currently returns empty since not implemented
        return []

    return analytics

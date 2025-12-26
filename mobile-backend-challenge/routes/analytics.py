from fastapi import APIRouter, Depends, Path
from sqlalchemy.orm import Session
from database import get_db
from services.analytics_service import AnalyticsService

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/creator/{creator_id}/videos")
async def get_creator_video_analytics(
    creator_id: int = Path(..., description="Creator ID", gt=0),
    db: Session = Depends(get_db)
):
    """Get video analytics for a creator's top performing videos"""
    pass

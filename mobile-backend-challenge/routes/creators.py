from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from schemas import CreatorResponse
from services.creator_service import CreatorService

router = APIRouter(prefix="/creators", tags=["creators"])


@router.get("/feed", response_model=List[CreatorResponse])
async def get_creator_feed(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(20, ge=1, le=100, description="Items per page"),
    db: Session = Depends(get_db)
):
    """
    Get paginated creator feed for mobile app.

    Returns creators with all their profile data, ordered by follower count.
    """
    service = CreatorService(db)
    creators = service.get_feed(page, page_size)
    return creators

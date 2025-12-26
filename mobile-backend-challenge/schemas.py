from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class CreatorBase(BaseModel):
    username: str
    display_name: str


class CreatorResponse(CreatorBase):
    """Full creator response with all fields"""
    id: int
    follower_count: int
    total_views: int
    avg_engagement_rate: float

    class Config:
        from_attributes = True


class CreatorFeedResponse(BaseModel):
    """Response model for creator feed"""
    pass


class VideoAnalyticsResponse(BaseModel):
    """Response model for video analytics"""
    pass

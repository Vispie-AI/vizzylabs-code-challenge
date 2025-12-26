from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class CreatorResponse(BaseModel):
    """Full creator response - currently used for all endpoints"""
    id: int
    username: str
    display_name: str
    follower_count: int
    total_views: int
    avg_engagement_rate: float
    created_at: datetime

    class Config:
        from_attributes = True


# Note: These are placeholder schemas that could be implemented
# if different response shapes are needed for different use cases

class CreatorFeedResponse(BaseModel):
    """Could be used for optimized feed responses"""
    pass


class VideoAnalyticsResponse(BaseModel):
    """Could be used for video analytics endpoint"""
    pass

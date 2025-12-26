from sqlalchemy.orm import Session
from models import Video
from typing import List, Dict


class AnalyticsService:
    def __init__(self, db: Session):
        self.db = db

    def get_top_videos_by_engagement(
        self,
        creator_id: int,
        limit: int = 10
    ) -> List[Dict]:
        """
        Get top videos by engagement rate for a creator.

        Not yet implemented - needed for mobile analytics feature.
        """
        # TODO: Implement this when analytics feature is prioritized
        return []

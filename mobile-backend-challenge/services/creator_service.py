from sqlalchemy.orm import Session
from sqlalchemy import func
from models import Creator, Video
from typing import List


class CreatorService:
    def __init__(self, db: Session):
        self.db = db

    def get_feed(self, page: int, page_size: int) -> List[Creator]:
        """
        Get paginated creator feed.

        Returns creators ordered by follower count (most popular first).
        Only includes creators who have at least one video.
        """
        offset = (page - 1) * page_size

        # Get creators who have videos, ordered by followers
        creators = (
            self.db.query(Creator)
            .join(Video, Creator.id == Video.creator_id)
            .group_by(Creator.id)
            .order_by(Creator.follower_count.desc())
            .offset(offset)
            .limit(page_size)
            .all()
        )

        return creators

    def get_creator_by_id(self, creator_id: int) -> Creator:
        """Get a single creator by ID"""
        return self.db.query(Creator).filter(Creator.id == creator_id).first()

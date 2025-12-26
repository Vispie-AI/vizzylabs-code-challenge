from sqlalchemy.orm import Session
from models import Creator, Video
from typing import List


class CreatorService:
    def __init__(self, db: Session):
        self.db = db

    def get_feed(self, page: int, page_size: int) -> List[Creator]:
        """Get paginated creator feed"""
        creators = self.db.query(Creator).all()

        result = []
        for creator in creators:
            video_count = self.db.query(Video).filter(
                Video.creator_id == creator.id
            ).count()

            if video_count > 0:
                result.append(creator)

        return result

import time
import random

class Article:
    def __init__(self,
                 _id: int,
                 title: str,
                 title_picture: str,
                 text: str,
                 summary: str,
                 topic: list[str],
                 authors: list[str],
                 date,
                 pictures: dict[str, str]) -> None:
        self.article_id = _id
        self.title = title
        self.title_picture = title_picture
        self.text = text
        self.summary = summary
        self.topic = topic
        self.date = date
        self.authors = authors
        self.pictures = pictures


def get_test_article(article_id: int = 0) -> Article:
    return Article(
        article_id if article_id else random.randint(0, 9999),
        "Test",
        "path_title_picture",
        "Awesome article only for you",
        "Are you proud",
        ["example", "beta"],
        ["felix"],
        time.time(),
        {
            "pic1": "/path/picture1",
            "pic2": "/path/picture2"
        }
    )

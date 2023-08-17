import time
import random

from main import Config
from FF_exceptions import NoDebugEnvException


class Article:
    def __init__(self,
                 _id: int,
                 title: str,
                 pictures: list[str],
                 title_picture: str,
                 text: str,
                 summary: str,
                 topic: list[str],
                 authors: list[str],
                 date) -> None:
        self.id = _id
        self.title = title
        self.pictures = pictures
        self.title_picture = title_picture
        self.text = text
        self.summary = summary
        self.topic = topic
        self.authors = authors
        self.date = date


def serialize(articles):
    if not isinstance(articles, list):
        articles = [articles]
    return_dict = {}
    for index, article in enumerate(articles):
        return_dict[index] = article.__dict__
    return return_dict


def get_test_article() -> Article:
    if not Config.DEBUG:
        raise NoDebugEnvException(get_test_article.__name__)
    return Article(
        random.randint(0, 9999),
        "Test",
        ["path1", "path2"],
        "path_title",
        "Awesome article only for you",
        "Are you proud",
        ["example", "beta"],
        ["felix"],
        time.time()
    )


def get_list_of_test_articles(number=5) -> list[Article]:
    if not Config.DEBUG:
        raise NoDebugEnvException(get_list_of_test_articles.__name__)
    return [
        get_test_article() for x in range(number)
    ]

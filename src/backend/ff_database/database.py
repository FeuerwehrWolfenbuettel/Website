import sqlite3
from pathlib import Path

from ff_articles.article import Article

class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        self.connection = None
        self.db_path = Path(__file__).resolve().parent / "feuerwehr.sqlite3"

    def __enter__(self):
        self.connection = sqlite3.connect(self.db_path)
        return self.connection

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.close()


def store_article(articleInfo):
    """
    Stores a article in the database

    Args:
        articleInfo (Article): The article to store
    """
    with DatabaseConnection() as db:
        cursor = db.cursor()
        cursor.execute("INSERT INTO articles "
                       "(title, title_picture, text, "
                       "summary, topic, authors, date) "
                       "VALUES (?, ?, ?, ?, ?, ?, ?)",

                       (articleInfo.title, articleInfo.title_picture,
                        articleInfo.text, articleInfo.summary,
                        str(articleInfo.topic),
                        str(articleInfo.authors),
                        articleInfo.date))
        last_id = cursor.lastrowid

        for picture in articleInfo.pictures:
            cursor.execute("INSERT INTO pictures "
                           "(path, picture_tag, article_id) "
                           "VALUES (?, ?, ?)",
                           (picture, articleInfo.pictures[picture], last_id))
        db.commit()


def load_article(article_id: int) -> Article:
    """
    Loads an article from the database and builds
    an Article object from it

    Args:
        article_id (int): Article id of the article to load

    Returns:
        Article: Article object from database
    """
    with DatabaseConnection() as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM articles WHERE id = ?", (article_id,))
        article_row = cursor.fetchone()
        cursor.execute(
            "SELECT * FROM pictures WHERE article_id = ?", (article_id,))
        picture_rows = cursor.fetchall()
        pictures = {
            row[1]: row[2] for row in picture_rows
        }
        return Article(*article_row, pictures)

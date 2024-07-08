import sqlite3
from database import store_article
from ff_articles import article

if __name__ == '__main__':
    conn = sqlite3.connect('feuerwehr.sqlite3')
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS articles "
              "(id INTEGER PRIMARY KEY, "
              "title TEXT, "
              "title_picture TEXT, text TEXT, "
              "summary TEXT, topic TEXT, "
              "authors TEXT, date TEXT)")

    c.execute("CREATE TABLE IF NOT EXISTS pictures "
              "(id INTEGER PRIMARY KEY, "
              "path TEXT, "
              "picture_tag TEXT, "
              "article_id INTEGER, "
              "FOREIGN KEY(article_id) REFERENCES articles(id))")

    conn.close()

    for i in range(5):
        store_article(article.get_test_article())

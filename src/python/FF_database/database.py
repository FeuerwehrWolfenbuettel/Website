import os
import sqlite3
from contextlib import closing

connection = sqlite3.connect(f"{os.getenv('DATA_PATH')}//article.sqlite")

class Database:
    def __init__(self) -> None:
        pass

cursor = connection.cursor()
cursor.execute("CREATE TABLE Article (articleID_PK INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL," +
               "summary TEXT NOT NULL, text TEXT NOT NULL, topic TEXT NOT NULL, date DATE NOT NULL, author TEXT)")

cursor.execute("CREATE TABLE pircture (pictureID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "+
               "articleID_FK INTEGER NOT NULL, pic BLOB, metadaten TEXT, subtitle TEXT"+
                 "FOREIGN KEY (articleID_FK) REFERENCES article (articleID_PK) )")

with closing(sqlite3.connect(f"{os.getenv('DATA_PATH')}//article.sqlite")) as connection:
    with closing(connection.cursor()) as cursor:
        rows = cursor.execute("SELECT 1").fetchall()
        print(rows)
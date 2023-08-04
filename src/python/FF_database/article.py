import FF_database.database as data

class Article:
    def __init__(self, title: str) -> None:
        self.title = title

    def write_to_database(self):
        x = data.Database()

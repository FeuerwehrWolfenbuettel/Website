
from main import Config

class Role:
    def __init__(self, name: str, permissions: set(str)) -> None:
        self.name = name
        self.permissions = permissions

def load_roles()
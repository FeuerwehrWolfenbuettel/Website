class NoDebugEnvException(Exception):
    def __init__(self, *args: object) -> None:
        super().__init__("You are not in a debug environment. Change the Config class in the main.py")

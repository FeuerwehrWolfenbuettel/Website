class NoDebugEnvException(Exception):
    def __init__(self, function: str) -> None:
        super().__init__(
            f"{function} is not allowed in a non debug environment. Change the Config class in the main.py")

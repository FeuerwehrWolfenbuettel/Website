import argparse
import logging
from dataclasses import dataclass

from flask import Flask
from flask_restful import Api

from routes import article_routes


@dataclass
class Config:
    """
    Configuration
    """
    PORT = 9001
    REST_PATH = "/rest/v1"
    DEBUG = True


def get_parser() -> argparse.ArgumentParser:
    """Creates parser"""
    new_parser = argparse.ArgumentParser(
        prog="FF Website"
    )

    new_parser.add_argument("-v", "--verbosity",
                            required=False,
                            action='count', default=0,
                            help="increase output verbosity (e.g.: --vv is more than -v)")

    return new_parser


def add_article_endpoints(api: Api):
    """
    Adds all article related endpoints

    Args:
        api (Api): rest api
    """
    api.add_resource(article_routes.AllArticles,
                     f"{Config.REST_PATH}{article_routes.AllArticles.PATH}")
    api.add_resource(article_routes.SingleArticle,
                     f"{Config.REST_PATH}{article_routes.SingleArticle.PATH}")
    api.add_resource(article_routes.ArticleByTopics,
                     f"{Config.REST_PATH}{article_routes.ArticleByTopics.PATH}")


class Server:
    def __init__(self) -> None:
        self.app = Flask(__name__)
        self.api = Api(self.app)
        self.config = Config()
        self.endpoints_loaded = False
        self.config_loaded = False

    def add_endpoints(self):
        add_article_endpoints(self.api)

        self.endpoints_loaded = True

    def load_config(self):
        self.config_loaded = True

    def start(self):
        if not self.endpoints_loaded:
            return
        if not self.config_loaded:
            return

        self.app.run(debug=Config.DEBUG, port=Config.PORT)


def main(args=None):
    server = Server()
    server.add_endpoints()
    server.load_config()
    server.start()


if __name__ == '__main__':
    args = get_parser().parse_args()
    LOG_FORMAT = '[%(asctime)s.%(msecs)03d|%(levelname)s|%(name)s] %(message)s'
    level = logging.DEBUG - args.verbosity + \
        1 if args.verbosity > 0 else logging.INFO
    logging.basicConfig(format=LOG_FORMAT, datefmt="%H:%M:%S",
                        level=level)
    main(args)

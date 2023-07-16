import argparse
import logging
from dataclasses import dataclass

from flask import Flask
from flask_restful import Api

import routes.routes as routes


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
    api.add_resource(routes.AllArticles,
                     f"{Config.REST_PATH}{routes.AllArticles.PATH}")
    api.add_resource(routes.SingleArticle,
                     f"{Config.REST_PATH}{routes.SingleArticle.PATH}")
    api.add_resource(routes.ArticleByTopics,
                     f"{Config.REST_PATH}{routes.ArticleByTopics.PATH}")


def create_app() -> Flask:
    """
    Creates Flask app and adds the routes to it

    Returns:
        Flask: Flask app
    """
    app = Flask(__name__)
    api = Api(app)
    add_article_endpoints(api)

    return app


def main(args=None):
    """Main Function"""
    app = create_app()
    app.run(debug=Config.DEBUG, port=Config.PORT)


if __name__ == '__main__':
    args = get_parser().parse_args()
    LOG_FORMAT = '[%(asctime)s.%(msecs)03d|%(levelname)s|%(name)s] %(message)s'
    level = logging.DEBUG - args.verbosity + \
        1 if args.verbosity > 0 else logging.INFO
    logging.basicConfig(format=LOG_FORMAT, datefmt="%H:%M:%S",
                        level=level)
    main(args)

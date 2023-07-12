import argparse
import logging

from flask import Flask

# import FF_database

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


def create_app() -> Flask:
    """
    Creates Flask app and adds the routes to it

    Returns:
        Flask: Flask app
    """
    app = Flask(__name__)
    return app


def main(args=None):
    """Main Function"""
    app = create_app()
    app.run(host="0.0.0.0")


if __name__ == '__main__':
    args = get_parser().parse_args()
    LOG_FORMAT = '[%(asctime)s.%(msecs)03d|%(levelname)s|%(name)s] %(message)s'
    level = logging.DEBUG - args.verbosity + 1 if args.verbosity > 0 else logging.INFO
    logging.basicConfig(format=LOG_FORMAT, datefmt="%H:%M:%S",
                        level=level)
    main(args)

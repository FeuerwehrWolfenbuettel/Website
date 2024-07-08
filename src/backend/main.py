import logging
import argparse
from pathlib import Path

import uvicorn
from fastapi import FastAPI

from ff_database import database

PROJECT_CONSTANTS = {
    "ROOT_DIR": Path(__file__).resolve().parent,
    "DB_DIR: ": Path(__file__).resolve().parent / "ff_database" / "feuerwehr.sqlite3"
}


def get_parser():
    """
    Generate an argument parser
    :return: New argument parser
    """
    new_parser = \
        argparse.ArgumentParser(description='FF Wolfenbüttel Website Backend',
                                formatter_class=argparse.RawTextHelpFormatter)

    new_parser.add_argument('-v', '--verbosity', required=False,
                            action='count', default=False,
                            help='increase output verbosity '
                                 '(e.g.: -vv is more than -v).')

    new_parser.add_argument("--no-logfile", dest="no_logfile", required=False,
                            action="store_true",
                            help="Do not log into a \"LastRun.log\" file")

    return new_parser


def setup_logger(args) -> int:
    """
    Setup and configure a logger
    provide --no-logfile to not create a last_run.log
    Args:
        args : startup arguments
    """
    log_format = "[%(asctime)s.%(msecs)03d|%(levelname)s|%(name)s] %(message)s"
    # level is set to 10 (DEBUG) if -v is given, 9 if -vv, and so on. Otherwise to 20 (INFO)
    level = logging.DEBUG - args.verbosity + \
        1 if args.verbosity else logging.INFO
    # logging.basicConfig(format=LOG_FORMAT, datefmt="%H:%M:%S", level=level)
    formatter = logging.Formatter(log_format, datefmt="%H:%M:%S")

    if not args.no_logfile:
        file_handler = logging.FileHandler('last_run.log', mode="w")
        file_handler.setFormatter(formatter)
        logging.getLogger().addHandler(file_handler)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    logging.getLogger().addHandler(console_handler)
    logging.getLogger().setLevel(level)
    return level


backend = FastAPI()

@backend.get("/article/{article_id}")
def get_article_by_id(article_id: int):
    return database.load_article(article_id)


def main(args, logging_level):

    uvicorn.run("main:backend", host="0.0.0.0",
                port=5000, log_level=logging_level)


if __name__ == "__main__":
    parser = get_parser()
    parsed_args = parser.parse_args()
    log_level = setup_logger(parsed_args)
    main(args=parsed_args, logging_level=log_level)

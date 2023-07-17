from http import HTTPStatus

from flask import Response
from flask_restful import Resource, request

from article import article


ARTICLE_BASE_PATH = "/article"


class AllArticles(Resource):
    PATH = f"{ARTICLE_BASE_PATH}/all"

    def get(self):
        if request.is_json:
            req = request.get_json()
            if req.get("override_resource_limiter"):
                return self._return_all_articles()
            if req.get("preload_number_articles"):
                return self._return_preload_articles(req.get("preload_number_articles"))
            return Response(status=HTTPStatus.BAD_REQUEST, response="Invalid Payload")

        return self._return_articles()

    def _return_all_articles(self):
        return article.serialize(article.get_list_of_test_articles())

    def _return_preload_articles(self, number):
        return article.serialize(article.get_list_of_test_articles(number))

    def _return_articles(self):
        return article.serialize(article.get_list_of_test_articles())


class SingleArticle(Resource):
    PATH = f"{ARTICLE_BASE_PATH}/id/<int:article_id>"

    def get(self, article_id: int):
        return f"Article Id: {article_id}"


class ArticleByTopics(Resource):
    PATH = f"{ARTICLE_BASE_PATH}/topic/<string:topic>"

    def get(self, topic: str):
        return article.serialize(article.get_list_of_test_articles())

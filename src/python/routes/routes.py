from flask_restful import Resource, request

from article import article


class AllArticles(Resource):
    PATH = "/article"

    def get(self):
        if request.is_json:
            req = request.get_json()
            if req.get("override_resource_limiter"):
                return "Override"
            if req.get("preload_number_articles"):
                return req.get("preload_number_articles")
            return "invalid json"

        return "Letzen 50 Article"


class SingleArticle(Resource):
    PATH = f"{AllArticles.PATH}/id/<int:article_id>"

    def get(self, article_id: int):
        return f"Article Id: {article_id}"


class ArticleByTopics(Resource):
    PATH = f"{AllArticles.PATH}/topic/<string:topic>"

    def get(self, topic: str):
        return article.serialize(article.get_list_of_test_articles())

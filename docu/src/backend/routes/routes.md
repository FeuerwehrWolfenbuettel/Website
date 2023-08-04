# Backend routes

## All Articles

```sh

GET http://127.0.0.1:9001/rest/v1/article/all

```

Returns the last 50 articles in descending order in the context of the creation date
to override this behavior provide in the request body

```json

{
    "override_resource_limiter": true
}

```

This will return a list of ids of ALL known articles.

If you want preload some articles provide the body

```json

{
    "preload_number_articles": <NumberOfArticles>
}

```

in this case the provided number of articles are returned with summary and picture

## Single Article

```sh

GET http://127.0.0.1:9001/rest/v1/article/id/<int:number>

```

Returns the Article with the provided id

## Article by topic

```sh

GET http://127.0.0.1:9001/rest/v1/article/topic/<string:topic>

```

Returns a list of articles that matches the topic

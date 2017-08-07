# NODE EXPRESS TEST
#### Built using express-generator, mongodb as database and mongoose as ODM

Route | HTTP | Description
----- | ---- | -----------
/items | GET | get items, accept page for current page (default = 1) and result for result per page (default = 30) as query, for example: /items?page=2&result=15
/items | POST | create new item
/items/:id | PATCH | update an item
/items/:id | DELETE | delete an item
# Миниприложение для работы с транзакциями

Состоит из 3 экранов:
1) Авторизация
> Необходимо ввести `username` и `password`. Любые комбинации будут корректными. Главное условие: поля не должны быть пустыми.
2) Добавление транзакции
> Форма добавления транзакции. Необходимо указать банк и сумму.
3) Таблица отображения транзакций
> При выводе таблицы эмулируется ajax-запрос. Выводится список транзакций. Любую транзакцию можно удалить. Транзакции храняся в `localStorage`

# Запуск

## Запуск в режиме разработки

```bash
npm start
```

## Запуск сборки

```bash
npm run build
```

# Demo
![Demo](/internals/gif/bank-demo.gif)

# Live Demo
[Демо приложения на heroku](https://bank-transactions.herokuapp.com/)
# Classroom backend

Express + TypeScript + PostgreSQL (Neon) + Drizzle ORM.

## Первичная настройка

Нужен Node.js 22 LTS или новее.

1. Установите зависимости: `npm install`.
2. Скопируйте `.env.example` в `.env` и укажите `DATABASE_URL` из окна **Connect** в Neon.
3. Проверьте подключение: `npm run db:check` (выполняет `select 1`).
4. Запустите сервер: `npm run dev`.

`.env` уже исключён из Git. Не публикуйте строку подключения.

## Работа с базой

- `src/db/index.ts` — общий клиент `db`. Импортируйте его в сервисах через относительный путь с расширением `.js`, например `import { db } from './db/index.js'` из `src`.
- `src/db/schema.ts` — определения таблиц через `drizzle-orm/pg-core`. Пока файл пуст: добавьте таблицы перед созданием первой миграции.
- `drizzle.config.ts` — настройки Drizzle Kit.
- `drizzle/` — SQL-миграции и метаданные, которые появятся после генерации. Сохраняйте их в Git.

После изменения схемы:

```sh
npm run db:generate
# Проверьте сгенерированный SQL перед применением.
npm run db:migrate
```

`npm run db:studio` открывает интерфейс работы с базой.

`npm run db:push` применяет схему напрямую без генерации файлов миграций. Используйте его как альтернативу для прототипирования в отдельной базе разработки; основной процесс проекта — `generate` + `migrate`.

Приложение не применяет миграции автоматически при запуске. Команды Drizzle Kit читают `DATABASE_URL` из `.env` или окружения.

Клиент использует Neon HTTP: он подходит для запросов и пакетных операций, но не поддерживает интерактивные транзакции с `db.transaction()`. Для них потребуется другой драйвер. Обычный локальный PostgreSQL не предоставляет Neon HTTP API.

## Сборка

```sh
npm run build
npm start
```

Документация: [Drizzle + Neon](https://orm.drizzle.team/docs/connect-neon), [настройка и миграции](https://orm.drizzle.team/docs/get-started/neon-new).

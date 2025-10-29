# Restaurant Project (Scaffold)

## Что внутри
- frontend/ — React + Vite + Tailwind scaffold
- backend/ — PHP API endpoints (api.php routes to reservation/contact/order)
- sql/schema.sql — SQL schema для создания базы MySQL

## Быстрый старт (Frontend)
1. Перейдите в папку frontend
2. Установите зависимости: `npm install`
3. Запустите dev-сервер: `npm run dev` (порт 3000)

## Быстрый старт (Backend)
- Разместите папку backend на PHP-сервере (Apache, Nginx + PHP-FPM).
- Настройте виртуальный хост и укажите окружение переменных (или отредактируйте db.php напрямую).
- Импортируйте `sql/schema.sql` в MySQL.
- Точки API:
  - POST /api/reservation
  - POST /api/contact
  - POST /api/order

## Тема светлая/тёмная
- Toggle реализован в `frontend/src/components/ThemeToggle.jsx`
- Состояние темы сохраняется в localStorage

## Примечания
- Это scaffold: необходимо подключить реальные данные из Figma (изображения, тексты, адаптивные правки).
- Для интеграции платежей (Stripe) потребуется серверная логика с секретными ключами.

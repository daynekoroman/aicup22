# CHANGELOG

## v1.2.1

- Id игроков и ботов теперь случайным образом перемешаны
- Увеличена скорострельность (`rounds_per_second`) до 15 и уменьшен разброс (`spread`) до 15 посоха (`Staff`)
- При `bot_strength >= 3` (в финале) добавлена механика простых уворотов от снарядов для ботов
- Исправлен номер тика в приложении (иногда показывался на 1 меньше настоящего)
- Добавлен альтернативный клиент для C++ с импользований `std::variant` вместо классов и наследований для OneOf типов
- Добавлен clang компилятор для C++

## v1.2.0

- Исправлены некоторые случаи падения игровой логики
- Отображение текущего числа выживших команд/юнитов
- Отображение имен игроков над юнитами (можно отключить клавишей `N`)
- Отображение координат курсора в схематичном режиме (можно отключить клавишей `C`)
- `PlacedText` теперь может отображать несколько строк, также исправлены некорректный размер/выравнивание
- Контролирование скорости воспроизведения
- Улучшена камера слежения
- Клавишей `U` теперь можно включать/выключать отображение отладочных данных

## v1.1.1

- Камера теперь следит за центром юнита, не учитывая направление зрения
- Снова можно зумить на всю карту
- Исправлен режим повтора (`--repeat`) приложения

## v1.1.0

- Антиалиасинг теперь выключен по умолчанию (улучшенная производительность визуализатора и фикс падения приложения для некоторых пользователей)
- Исправлено выравнивание текста (`PlacedText.alignment`) в отладочном интерфейсе
- Исправлен баг - лут (и другие сущности) были невидимы под юнитами, но в вне сектора зрения
- выделение игрока в таблице очков, за чьим юнитом следит камера
- Добавлены опции приложения `--fullscreen`, `--window-width/--window-height`, `--start-paused`
- Новые версии клиентов теперь также получают номер отображаемого тика в методе `debug_update`
- Автоматическое слежение за юнитом на старте и переключение при смерти текущего отслеживаемого юнита
- Клик по игроку в таблице очков теперь переводит слежение камеры на следующего юнита этого игрока

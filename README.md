# Лендинг

## Перед стартом проекта необходимо:

* Убедиться, что установленный node.js и npm. Для этого достаточно написать в терминале:

> node -v

> npm -v

Если вы видите версию, например, v8.1.4 тогда все ок. 
Если нет, не установлены - тогда ставим.


* Убедиться что установлен gulp 4 версии, так как, если будет меньше - работать не будет. 
Если не установлен - тогда ставим.

> npm install gulpjs/gulp-cli#4.0 -g

> npm install gulpjs/gulp-cli#4.0 --save-dev

## Инструкция для старта проекта:

* Склонировать данный репозиторий

> git clone https://github.com/mrSergeyNovikov/FirstLanding.git

* Запустить команду npm install. Данная команда установит все пакеты, которые указаны в файле package.json, а также все их зависимости.


## Основные команды Git

> git add

* Команда git add добавляет содержимое рабочей директории в индекс (staging area) для последующего коммита. По умолчанию git commit использует лишь этот индекс, так что вы можете использовать git add для сборки слепка вашего следующего коммита.

> git status

* Команда git status показывает состояния файлов в рабочей директории и индексе: какие файлы изменены, но не добавлены в индекс; какие ожидают коммита в индексе. Вдобавок к этому выводятся подсказки о том, как изменить состояние файлов.

> git commit -m "some commit"

* Команда git commit берёт все данные, добавленные в индекс с помощью git add, и сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на этот слепок.

> git push origin master

* Команда git push используется для установления связи с удалённым репозиторием, вычисления локальных изменений отсутствующих в нём, и собственно их передачи в вышеупомянутый репозиторий. Этой команде нужно право на запись в репозиторий, поэтому она использует аутентификацию.

> git branch

* Команда git branch — это своего рода "менеджер веток". Она умеет перечислять ваши ветки, создавать новые, удалять и переименовывать их.

> git checkout

* Команда git checkout используется для переключения веток и выгрузки их содержимого в рабочую директорию.

> git merge

* Команда git merge используется для слияния одной или нескольких веток в текущую. Затем она устанавливает указатель текущей ветки на результирующий коммит.
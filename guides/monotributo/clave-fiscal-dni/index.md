---
layout: default
title: Clave Fiscal по DNI
description: Получаем Clave Fiscal по DNI
---
# Получаем Clave Fiscal по DNI

Если у вас уже есть [DNI]({{ "/ids#DNI" | dict_url }}), по получить [DNI]({{ "/ids#clave-fiscal" | dict_url }}) можно онлайн не выходя из дома. Процесс не сложный и займет не более 10 минут (если с серверами AFIP все в порядке).

Первым делом надо скачать приложение __MiAFIP__ из [AppStore](https://itunes.apple.com/us/app/mi-afip/id1237748064?mt=8) или [GooglePlay](https://play.google.com/store/apps/details?id=ar.gob.afip.mobile.android.contribuyentes.mi_afip&hl=es).

<details>
  <summary>Если ссылки не работают, или вы не доверяете этому ресурсу</summary>
  
  - Приложение можно найти восполязвавшись поском маректплейса, набрав название __MiAFIP__.
  - Перейдя по соответсвующей ссылке на странице налоговой [прямая ссылка](https://www.afip.gob.ar/celular/apps/mi-afip.asp)


  Или найти эту информацию самостоятельно на [сайте AFIP](https://www.afip.gob.ar/). Примерный путь:
  
  Micrositios 
  ![home]({{ 'afip/micrositios.home.png' | img_url }})
  
  AFIP en tu celular 
  ![home]({{ 'afip/micrositios.main.png' | img_url }})

  Mi AFIP
  ![home]({{ 'afip/miafip.micrositios.png' | img_url }})

  И вуаля - переходим по ссылке нашего маркетплейса, сканирует QR-код или сравниваем, что ссылки совпадают, с передставленными выше))
  ![home]({{ 'afip/miafip.micrositios.png' | img_url }})
  
  Если вдруг вы обнаружи, что ссылки выше на совпадают с сылками на сайте __AFIP__, то пожалуйсто - оповестите меня об этом исползуя [bot]() или заведя новую таску на [GitHub](), воспользовавшись [этой инструкцией]()
  
</details>

Открываем приложение и жмем на кнопку _Solicitar o recuperar Clave Fiscal_

![MiAFIP home]({{ 'afip/miafip.home.app.png' | img_url }})

Приложение запросит достутп к камере - надо его предоставить, что бы была возможность отсканировать штрих-код [DNI]({{ "/ids#DNI" | dict_url }}) и фотографию себя.

![MiAFIP request access]({{ 'afip/miafip.request-access.app.png' | img_url }})

Когда приложение запросит сделать ваше селфи - это действие будет состоять из 2х этапов:
- посмотреть в камеру онфас
- и повернуть голову налево в полоборота

Приложение дает звуковые подсказки на испанском и при завершении этапа воспроизводит легкую вибрацию.

Слегующим шагом надо придумать пароль. 

![MiAFIP create password]({{ 'afip/miafip.create-password.app.png' | img_url }})

Стоит учесть, что пароль временный и при первом входе в севис на сайте вам предложат его поменять, хотя это и не обязательно.

На этом все! Поздравляю! Теперь можно двигаться дальше и регистрировать свой [CUIT]({{ '/monotributo/cuit' | guides_url }})

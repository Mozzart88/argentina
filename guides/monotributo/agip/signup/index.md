---
layout: default
title: Регитсрируемся в AGIP
description: Регитсрируемся в AGIP
links:
  afip_lk: https://auth.afip.gob.ar/contribuyente_/login.xhtml
  agip: https://agip.gob.ar/
  guides:
    contribute: '/guides/contribute'
images:
  step1_1: /img/agip/sigup/step1_1.png
  step1_2: /img/agip/sigup/step1_2.png
  step1_3: /img/agip/sigup/step1_3.png
  step1_4: /img/agip/sigup/step1_4.png
  step1_4_link: /img/agip/sigup/step1_4_link.png
  step2_1: /img/agip/sigup/step2_1.png
  step2_2: /img/agip/sigup/step2_2.png
  download_confirmation: /img/agip/sigup/download_confirmation.png
---
# {{ page.description }}

В [AGIP]({{ page.links.agip }}) надо регистрироваться только если вы ведете деятельность на территории __CABA__ (но это не точно).
На сколько мне известно есть 2 способа зарегистрироваться:
- лично посетив отделение __AGIP__
- через личный кабинет [AFIP]({{ page.links.afip_lk }})

В этой статье я расскажу про регистрацию через личный кабинет.

## Что нужно?
Перед тем как регистрироваться в __AGIP__ надо:
- Получить [CDI]({{ '/ids/#CDI' | dict_url }}), [прекарию]({{ '/ids/#precaria' | dict_url }}) или [DNI]({{ '/dni/submit-an-appointment-for-dni' | guides_url }})
- Получить [Clave Fiscal]({{ '/ids#clave-fiscal' | dict_url }}) для [AFIP]({{ '/orgs/#AFIP' | dict_url }})
- Получить [CUIT]({{  '/ids#CUIT' | dict_url  }})
- Зарегистрировать в __AFIP__ [Monotributo]({{ '/monotributo/submit-monotributo' | guides_url}})

Для большинства из этих требований уже написаны [гайды]({{ '/' | guides_url }}). Если вы хотите добавить и/или изменить информацию на сайте, то для этого тоже есть [инструкция]({{ '/contribution' | guides_url }}).

## Шаг 1 - регистрация через личный кабинет __AFIP__
Я не буду говорить, что надо авторизоваться в Личном Каинете __AFIP__, потому что по моему - это и так очевидно.
После авторизации в ЛК в поисковом поле вводим запрос _agip_ и получаем единственный вариант "_AGIP Administración Gubernamental de Ingresos Públicos - Clave Ciudad Nivel 2_" - жмем по нему. 

![Step 1.1]({{ page.images.step1_1 }})

Откроется сайт __AGIP__ в новой вкладке. 

![Step 1.2]({{ page.images.step1_2 }})

<!-- NOTE -->
Не рекомендую ее закрывать до того, пока вы не заполните и не подтвердите действие - потому, что повторный запрос через ЛК __AFIP__ сгенерирует ошибку и вам придеться проходить эту процедуру оффлайн (но это не точно).
<!-- NOTE -->

![Step 1.3 error]({{ page.images.step1_3 }})


В открывшейся вкладке надо указать адрес электронной почты, которую вы указывали при регистрации в __AFIP__, подтвердить ее и нажать _Enviar_. В результате вам придет письмо со сылкой на второй шаг регистрации.

![Step 1.4 mail]({{ page.images.step1_4 }})

И учтите, что у вас есть всего 96 часов, чтобы завершить регистрацию - так указано в письме.

Из письма надо перейти по ссылке, которая слкывается за словом "_aquí_", выделенным зеленым шрифтом.

![Step 1.4 mail link]({{ page.images.step1_4_link }})

Переходим по ссылке и ко второму шагу.

## Шаг 2 - подтверждение данных.

В открывшейся вкладке проверяем уже подставленные данные и дополняем пробелы, а именно:
- семейное положение
- национальность
- телефон
- Domicilio Constituído - если я правильно понял, то фактический адрес, указанный при регистрации _монотрибуто_
- пароль и его проверка

![Step 2.1]({{ page.images.step2_1 }})

Просто скопировать адрес из _Domicilio Fiscal_ в _Domicilio Constituído_ не получиться - он заполняется через отдельное окошко.

![Step 2.2 domicilio]({{ page.images.step2_2 }})

Еще раз проверяем и жмем единственную кнопку - _Confimación_.

## Заключение

На этом все - вы зарегистрировались в ЛК __AGIP__!
По желанию можно скачать подверждение регстрации в системе по ссылке на следующем экране.

![Download constancia]({{ page.images.download_confirmation }})

## Что дальще?
* [Регистрация своих доходов в AGIP по "упращенке"]({{ '/monotributo/agip/simplefied-mode' | guides_url }}) (только для __CABA__)
* [Как платить налоги в AGIP]({{ '/monotributo/agip/taxes/how-to-pay' | guides_url }})

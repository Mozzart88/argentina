---
layout: default
title: Монотрибуто | Регистрация
description: Регистрируем Монотрибуто
---
# {{ page.description }}

Монотрибуто - это аналог ИП или самозанятого. Зарегистрировавшись как монотрибутист у вас появится возможность легализовывать свои доходы(если вы не работаете в найме), платить налоги и получить [Obra Social]({{ '/docks/#obra-social' | dict_url }}) (аналог **ОМС**). 

## Что нужно?
Для получения статуса монотрибутиста нужно пройти несколько предварительных этапов, а именно:
- Получить [CDI]({{ '/ids/#CDI' | dict_url }}), [прекарию]({{ '/ids/#precaria' | dict_url }}) или [DNI]({{ '/dni/submit-an-appointment-for-dni' | guides_url }})
- Получить [Clave Fiscal]({{ '/ids#clave-fiscal' | dict_url }}) для [AFIP]({{ '/orgs/#AFIP' | dict_url }})
- Получить [CUIT]({{  '/ids#CUIT' | dict_url  }})

Для большинства из этих требований уже написаны гайды. Если вы хотите добавить и/или изменить информацию на сайте, то для этого тоже есть [инструкция]({{ '' }}).

Так же желательно заранее определиться с видами деятельности, соц. страховкой и категорией монорибуто.
- [Классификатор родов деятельности](https://serviciosweb.afip.gob.ar/genericos/nomencladorActividades/index.aspx)
- [Классификатор соц страховки](https://www.sssalud.gob.ar/index.php?cat=consultas&page=bus_os_padron)
- [Список страховок](https://www.sssalud.gob.ar/?page=listRnosc&tipo=3)
- [Категории монотрибуто](https://www.afip.gob.ar/monotributo/categorias.asp)

## Итак приступим
Первым делом надо авторизоваться на портале [AFIP]().
![AFIP auth]()

В личном кабинете выбираем пункт _Registro Único Tributario_
![Home]()

На следующем экране нас спросят когда мы начали свою деятельность
![Whene did you start]()

Если честно, я не совсем понимаю смысл этого вопроса, потому что, как мы узнаем позже, далее нас опять спросят это и будет только 2 варианта текущий месяц и следующий.

Но в любом случае выбираем нужный месяц (в моем случае это январь 2024) и переходим к следующему вопросу - в кчестве кого мы хотим зарегистрироваться.
![Select mode]()

Тут есть 2 варианта - монотрибуто или наемный рабочий (если я правильно понял этот пункт). Выбираем монотрибуто.

На следующем шаге нам надо указать адреса и их отношения друг к другу:
- фактический
- юридический
- филиалы (если есть)
![Domicilio main]()

На этом этапе есть несколько нюансов. Первый - это то что доступные отношения и их описани между адресами могут меняться; когда я регистрировал свою супругу те варианты что были в анкете и на официальной [странице помощи]() по регистрации моторибуто уже не соотвествовали, так же как и их иерархия и взаимосвязь; а когда я регистрировал монотрибуто на себя (спустя месяц) - доступные варианты, их описание, иерархия и взаимоотношения тоже уже были изменены по сравнению с тем, что было, когда я регистрировал свою супругу. Второе исходя из описания (а точнее перевода описания через google переводчик) не до конца понятно что правильно выбирать. Поэтому я выбрал то, что на мой взгляд казалось логичным исходя из описания, офицальной инструкции и личного опыта людей, которые так или иначе делять им. В связи с этим спешу напомнить 2 вещи:
1. Это информационный портал, и я не беру на себя никакой ответсвенности за ваши действия.
1. Если вы знаете об этом процессе больше, чем я, то вы всегда можете связаться со мной для уточнения информации на этом ресурсе для общего блага.

Давйте для начала посмотрим какие варианты есть (на момент написания статьи):
<ul>
  <dt>JURISDICCION SEDE</dt>
  <dd>
    Ты должен назначить ему адрес (фактический или налоговый), так как это обязательно.
    <ul>
    <li>Если ты осуществляешь деятельность в более чем одной юрисдикции (соглашение о мультилатеральности), то это та, где у тебя есть центр администрации.</li>
    <li>Если ты осуществляешь свою деятельность только в одной юрисдикции (местный налогоплательщик), то это налоговый адрес, который ты указал для налога на доходы провинции (взносы по брутто-доходам).</li>
    </ul>
  </dd>
  <dt>FISCAL JURISDICCIONAL</dt>
  <dd>
    Это налоговый адрес в юрисдикциях, отличных от места нахождения. Для каждой юрисдикции, в которой ты осуществляешь деятельность, ты можешь назначить адрес с этим типом. Ты не можешь назначить его в той же юрисдикции, где определил место своей юрисдикции.
  </dd>
  <dt>PRINCIPAL DE ACTIVIDADES</dt>
  <dd>
    Это место, где ты осуществляешь основную деятельность, по которой получаешь большую часть доходов. Ты можешь назначить его только один раз, и он не может быть объединен с типом адреса без деятельности. Обязателен для участников многостороннего соглашения.
  </dd>
  <dt>OTROS DOMICILIOS DE ACTIV.</dt>
  <dd>
    Филиалы или вторичные адреса, где ты осуществляешь другие виды деятельности.
  </dd>
  <dt>SIN ACTIVIDAD</dt>
  <dd>
    Это адрес, заявленный в юридических целях, который не определяет юрисдикций. Его нельзя назначить как фискальный адрес.
  </dd>
</ul>

Мой выбор пал на _JURISDICCIÓN SEDE_ для юридического адреса (_Fiscal_) и _SIN ACTIVIDAD_ для физического (_Real_).
![Domicilio complite]()

Если надо добавить адреса филиалов/точек продаж, то жмем кнопку _AGREGAR_, и по завершении _SIGUENTE_.
![Domicilio add]()
![Domicilio commit]()

Следующий экран и внимание вопрос "Осуществляете ли вы деятельность в других юрисдикциях?" - имеется ввиду в других провинциях Аргентины - мой вариант _No_
![Otros jurisdiccion]()

Далее нам пердлагается выбрать категории деятельности.
![Actividades main]()

Если вы этого не сделали за ранее, то стоит обратиться к официальному [классификатору](). По известной мне информации можно выбрать до 3х видов. В текстовое поле можно вводить название вида или код. Каждый надо подтверждать отдельно.
![Actividades confirmaiton]()

Так как основная моя деятельность связана с разработкой ПО, то для себя я выбрал следующие коды:
- 620100: Компьюерные консалтинговые услуги и поставка компьтерного програмного обеспечения
- 620300: Консалтинговые услуги в области информационных технологий
- 620900: Компьюерные услуги не включенные в другие категории
![Actividades my selection]()

Обратите внимание, что первый выбраный вами вид деятельности по умолчанию будет считаться основным, а последующий - дополнительными.

Переходим к следующему шагу - проверка и подтверждение предоставленных данных. Стоит на всякий случай перепроверить и затем нажать на _CONFIRMAR_
![Data confirmation]()

Вроде все? Ан - нет. Далее нам предлагается выбрать систему налогообложения - упрощенную или общуюю - врамках этой статьи мы выбираем упрощенную _Monotributo_
![Tax mode]()

Про налогообложение в Аргентине можно почитать [тут]().

На следующем экране нам в крации описываю процесс регистрации, что он состоит из 5 шагов и займет примерно 15 минут. Жмем _DARSE DE ALTA_
![Darse de alta]()
![Darse de alta]()

### Шаг №1 - Как ты будешь работать?
Тут есть 3 варианта:
- Как Независимый работник (наш выбор)
- Как член кооператива
- Как продвигаемый работкин (не совсем понятно что это значит)
![Step 1]()

### Шаг №2 - Месяц начала деятельности
Как я уже упоминал выше не совсем понятно зачем нам был дан выбор предыдущего месяца, но на этом шаге можно выбрать только текущий и следующий. Как бы там ни было - выбираем подходящий для нас месяц. И нменого ниже в текстовом поле надо указать примерный ожидаемый доход(имеется ввиду выручка) за год в пессо. От этого будет зависеть категория монотрибуто и сумма ежемесячного налога. Если вы не определились с этим вопросом ранее, то на [этой странице]() можно ознакомиться с категориями. При выборе категории учтите следующее:
- От категории зависит не только сумма максимального и мимнимального дохода, но так же приделы арендуемой площади и потребляемой электроэнергии, который вы можете использовать для налогового вычета.
- Категорию можно менять 2 раза в год как большую так и в меньшую стороны.
- Смена категрий может происходить автоматически на основе ваших задекларированых доходов (выставленные фактуры) или в ручную.
И далее устанавливаем переключатель _Si/No_ в зависимости от того арендуем мы какие-либо площади для осуществления деятельности.
Когда ввели все требуемые от нас данные жмем _SIGUIENTE_

![Step 2]()

В рамках этой статья я не расказываю как получить налоговые вычеты, так как не заморачивался с этим, но если у вас есть информация и желание, то вы всегда можете связаться со мной по [этой инструкции]()

### Шаг №3 - Пенсионные взносы
Тут нам предлагается выбрать кто и как будет платить пенсионные за нас:
- Trabajador activa - мой выбор, я сам за себя заплачу все взносы
- Empleado en relación dependencia - зависимый (наемный) работник - за меня плати мой работодатель
- Jubilado - пенсионер - уже все заплатил и теперь получаю свою пенсию
- Aporto a una Caja Previsional Provincial - относиться к отдельным категориям (учителя, врачи, юристы ...), которые платят пенсионные взносы в специализированные фонды
- Locador de bienes muebles o inmuebles - арендатор движемого или недвижимого имущества - в пояснении написано, что этой категории нет смысла платить социальные взносы (???)

![Step 3]()

### Шаг №4 - Соцстраховка
На этом шаге нам предлагается выбрать компанию в которую мы будем платить соц.взносы и при желании добавить родственниов. В начале статьи я приводил ссылки на ресурсы, где можно посмотреть полный список доступных страховок для монотрибуто и класификатор их. Если вы еще не выбрали, то самое время. Я особо не заморачивался и выбрал __OBRA SOCIAL EMPRESARIOS, PROFESIONALE Y MONOTRIBUTIS__ (4-0170-4), а родственников я пока не добавлял.

![Step 4.1]()

Стоит учесть, что страховка начинает работать только после 3х месяцев оплаты (но это не точно).

Перед тем как перейти на следующий шаг обязательно скачайте все документы, которые вам предлагает система и поставить галочку, что согласы сами отнести анкету в [ANSES]({{ '' }})

![Step 4.2]()

### Шаг №5 - Проверяем данные
Тут у нас есть возможность проверить данные, которые мы предоставили в предыдущих шагах, и при необходимости можно их изменить.

![Step 5.1]()

И в самом низу страницы можно увидеть категорию монотрибуто и сумму налога/взносов с учетом страховки.

![Step 5.2]()

### Последний этап - скачать все документы.
Я не уверен, что это надо, но раз предлагают, то лучше скачать все документы, которые есть на этой странице в разделе __Descarga tus credenciales__. Так же на этой странице можно добавить сотрудников, точки продаж и задикларировать активы, если они превышают лимиты по категории.

На этом все - поздарвляю! Теперь Вы Монотрибутиста - самозанятый/индивидуальный предприниматель и налогоплатильщик Аргентины!

## Что дальще?
* [Регистрация в AGIP]({{ '' }}) (только для __CABA__)
* [Как выставлять Фактуры]({{ '' }})
* [Как платить налоги]({{ '' }})
* [Заполненяем анкету]({{ '' }}) соцстраховки для [ANSES]({{ '' }})



[Официальная страница помощи](https://afip.gob.ar/monotributo/ayuda/que-es.asp)
За нал 46.360 и по бн 92.720 ([info](https://contadoresenred.com/facturacion-a-consumidor-final-monto-limite-para-no-identificar-comprador-julio-2023/))
---
layout: default
title: "Справочник: Идентификаторы"
description: "Названия идентификаторов документов и где их искать"
---
# {{ page.description }}

<dl>
  <dt id="CDI">CDI</dt>
  <dd>
    <p>
    <b>Clave de Identificación</b> - удостоверение иностранца, который по каким-либо причинам не может получить <b><a href="#CUIL">CUIL</a></b> и/или <b><a href="#CUIT">CUIT</a></b>. Позволяет открыть счет в банке, трудоустроиться и зарегистрироваться как <a href="{{ '/guides/monotributo/quickstart' | relative_url }}">monotributista</a>, приобрести автомобиль и недвижимость.
    </p>
    <p><b>Срок получения - ??.</b></p>
  </dd>

  <dt id="CUIL">CUIL</dt>
  <dd>
    <p>
    <b>Código Único de Identificación Laboral</b> - аналог нашего СНИЛС. Обычно совпадает с <a href="#CUIT"><b>CUIT</b></a>, но не обязательно. Получается в <a href="{{ '/guides/dictionary/orgs#anses' | relative_url }}"><b>ANSES</b></a> или присваивается автоматически с <a href="#DNI"><b>DNI</b></a>. В последнем случае - указан на <b><a href="#DNI">DNI</a></b>. Нужен для трудо-устройства в широком смысле.
    </p>
    <p><b>Срок получения - от 30 минут.</b></p>
    <a href="{{ '/guides/cuil/quickstart' | relative_url }}" class="btn">Гайд</a>
  </dd>

  <dt id="CUIT">CUIT</dt>
  <dd>
    <p>
      <b>Clave Única de Identificación Tributaria</b> - аналог нашего ИНН. 
      Обычно совпадает с <a href="#CUIL"><b>CUIL</b></a>, но не обязательно.
      Получается в <a href="{{ '/guides/dictionary/orgs#afip' | relative_url }}"><b>AFIP</b></a> или присваивается автоматически с <a href="#DNI"><b>DNI</b></a>. Нужен для открытия юр. лица.
    </p>
    <p><b>Срок получения - от 15 минут.</b></p>
    <a href="{{ '/guides/monotributo/cuit' | relative_url }}" class="btn">Гайд</a>
  </dd>

  <dt id="DNI">DNI</dt>
  <dd>
    <p>
      <b>Documento Nacional de Identidad</b> - национальное удостоверение личности гражданина или, в нашем случае, иностранца, получившего разрешение на пребывание в стране с не туристическими целями. 
    Выдается при рождении или по одобрению иммиграционной службы.
    Привозится по месту прописки или забирается в <b><a href="{{ '/guides/dictionary/orgs#renaper' | relative_url }}">Renaper</a></b>.
    Нужен в большинстве случаев (открытие банковского счета, регистрация на <a href="https://www.mercadolibre.com.ar/" target="_blank">Mercado Libre</a> и т.д.).
    </p>
    <p><b>Срок получения - от 1 месяца.</b></p>
    <a href="{{ '/guides/dni/quickstart' | relative_url }}" class="btn">Гайд</a>
  </dd>

  <dt id="numero-de-boleta-prenumerada">Número de Boleta prenumerada</dt>
  <dd>
    <p>
      Длинный номер, указаный в нижней части <b><a href="{{ '/guides/dictionary/docs#cerificado-de-residecia-precaria' | relative_url }}">прекарии</a></b>.
    </p>
    <p>
    Нужен для получения номера <b><a href="#DNI">DNI</a></b>.
    </p>
    <p><b>Срок получения - от 1 дня.</b></p>
  </dd>

  <dt id="numero-de-disposicion-de-migraciones">Номер распоряхения миграционной службы на поучение ВНЖ/ПМЖ</dt>
  <dd>
    <p>
      В некоторых пабликах называется <i>trámite</i>, но это ошибочный термин. Расположен в правом верхнем углу распоряжения, которое будет доступно после получения подтверждения от иммиграционной службы. Сервис по отслеживанию <a href="https://www.migraciones.gov.ar/accesible/consultaTramitePrecaria/ConsultaUnificada.php" target="_blank">тут</a>.
    </p>
    <p>
    Нужен для получения номера <b><a href="#DNI">DNI</a></b>.
    </p>
    <p><b>Срок получения - от 1 недели.</b></p>
  </dd>
</dl>
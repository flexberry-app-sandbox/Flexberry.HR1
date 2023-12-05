import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISHRАнкетаLForm from './forms/i-i-s-h-r-анкета-l';
import IISHRДолжностьLForm from './forms/i-i-s-h-r-должность-l';
import IISHRОтделLForm from './forms/i-i-s-h-r-отдел-l';
import IISHRСотрудникLForm from './forms/i-i-s-h-r-сотрудник-l';
import IISHRТЧ_отчетаLForm from './forms/i-i-s-h-r-т-ч-отчета-l';
import IISHRАнкетаEForm from './forms/i-i-s-h-r-анкета-e';
import IISHRДолжностьEForm from './forms/i-i-s-h-r-должность-e';
import IISHRОтделEForm from './forms/i-i-s-h-r-отдел-e';
import IISHRСотрудникEForm from './forms/i-i-s-h-r-сотрудник-e';
import IISHRТЧ_отчетаEForm from './forms/i-i-s-h-r-т-ч-отчета-e';
import IISHRАнкетаModel from './models/i-i-s-h-r-анкета';
import IISHRДолжностьModel from './models/i-i-s-h-r-должность';
import IISHRОтделModel from './models/i-i-s-h-r-отдел';
import IISHRОтчетModel from './models/i-i-s-h-r-отчет';
import IISHRСотрудникModel from './models/i-i-s-h-r-сотрудник';
import IISHRТЧ_отчетаModel from './models/i-i-s-h-r-т-ч-отчета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-r-анкета': IISHRАнкетаModel,
    'i-i-s-h-r-должность': IISHRДолжностьModel,
    'i-i-s-h-r-отдел': IISHRОтделModel,
    'i-i-s-h-r-отчет': IISHRОтчетModel,
    'i-i-s-h-r-сотрудник': IISHRСотрудникModel,
    'i-i-s-h-r-т-ч-отчета': IISHRТЧ_отчетаModel
  },

  'application-name': 'HR',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HR',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HR',
          title: 'HR'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'отдел-кадров': {
          caption: 'Отдел кадров',
          title: 'Отдел кадров',
          'i-i-s-h-r-должность-l': {
            caption: 'ДолжностьL',
            title: 'Должность'
          },
          'i-i-s-h-r-отдел-l': {
            caption: 'ОтделL',
            title: 'Отдел'
          },
          'i-i-s-h-r-анкета-l': {
            caption: 'АнкетаL',
            title: 'Анкета'
          },
          'i-i-s-h-r-т-ч-отчета-l': {
            caption: 'ТЧ_отчетаL',
            title: 'Т ч_отчета'
          },
          'i-i-s-h-r-сотрудник-l': {
            caption: 'СотрудникL',
            title: 'Сотрудник'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-h-r-анкета-l': IISHRАнкетаLForm,
    'i-i-s-h-r-должность-l': IISHRДолжностьLForm,
    'i-i-s-h-r-отдел-l': IISHRОтделLForm,
    'i-i-s-h-r-сотрудник-l': IISHRСотрудникLForm,
    'i-i-s-h-r-т-ч-отчета-l': IISHRТЧ_отчетаLForm,
    'i-i-s-h-r-анкета-e': IISHRАнкетаEForm,
    'i-i-s-h-r-должность-e': IISHRДолжностьEForm,
    'i-i-s-h-r-отдел-e': IISHRОтделEForm,
    'i-i-s-h-r-сотрудник-e': IISHRСотрудникEForm,
    'i-i-s-h-r-т-ч-отчета-e': IISHRТЧ_отчетаEForm
  },

});

export default translations;

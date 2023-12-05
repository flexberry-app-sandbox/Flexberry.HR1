import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_приема: DS.attr('date'),
  контакты: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-h-r-должность', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-h-r-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_приема: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-h-r-сотрудник', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    дата_приема: attr('Дата_приема', { index: 3 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Отдел', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' }),
    должность: belongsTo('i-i-s-h-r-должность', 'Должность', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-h-r-сотрудник', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    дата_приема: attr('Дата_приема', { index: 3 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Название', {
      название: attr('Название', { index: 4 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-h-r-должность', 'Название', {
      название: attr('Название', { index: 5 })
    }, { index: -1, hidden: true })
  });
};

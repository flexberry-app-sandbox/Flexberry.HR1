import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  контакты: DS.attr('string'),
  лК: DS.attr('string'),
  образование: DS.attr('string'),
  опыт_работы: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-h-r-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  лК: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.лК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  опыт_работы: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.опыт_работы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетаE', 'i-i-s-h-r-анкета', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    образование: attr('Образование', { index: 3 }),
    опыт_работы: attr('Опыт_работы', { index: 4 }),
    лК: attr('ЛК', { index: 5 }),
    должность: belongsTo('i-i-s-h-r-должность', 'Должность', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('АнкетаL', 'i-i-s-h-r-анкета', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    образование: attr('Образование', { index: 3 }),
    опыт_работы: attr('Опыт_работы', { index: 4 }),
    лК: attr('ЛК', { index: 5 }),
    должность: belongsTo('i-i-s-h-r-должность', 'Название', {
      название: attr('Название', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

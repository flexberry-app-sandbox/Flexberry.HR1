import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  название: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-отдел.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-h-r-отдел.validations.название.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделE', 'i-i-s-h-r-отдел', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 })
  });

  modelClass.defineProjection('ОтделL', 'i-i-s-h-r-отдел', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 })
  });
};

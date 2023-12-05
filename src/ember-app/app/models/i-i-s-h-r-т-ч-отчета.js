import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧ_отчетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-т-ч-отчета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧ_отчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;

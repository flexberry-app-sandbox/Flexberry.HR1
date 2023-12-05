import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АнкетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-анкета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетаMixin, Validations, {
});

defineProjections(Model);

export default Model;

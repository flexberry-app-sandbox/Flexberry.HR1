import {
  defineNamespace,
  defineProjections,
  Model as ТЧ_отчетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-т-ч-отчета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧ_отчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

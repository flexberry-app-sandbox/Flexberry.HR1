import {
  defineNamespace,
  defineProjections,
  Model as АнкетаMixin
} from '../mixins/regenerated/models/i-i-s-h-r-анкета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

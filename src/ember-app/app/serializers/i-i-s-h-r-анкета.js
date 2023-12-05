import { Serializer as АнкетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-анкета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АнкетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

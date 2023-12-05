import { Serializer as ОтчетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-отчет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-должность', 'Unit | Model | i-i-s-h-r-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-r-анкета',
    'model:i-i-s-h-r-должность',
    'model:i-i-s-h-r-отдел',
    'model:i-i-s-h-r-отчет',
    'model:i-i-s-h-r-сотрудник',
    'model:i-i-s-h-r-т-ч-отчета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

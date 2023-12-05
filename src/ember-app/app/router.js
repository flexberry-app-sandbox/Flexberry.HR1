import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-r-анкета-l');
  this.route('i-i-s-h-r-анкета-e',
  { path: 'i-i-s-h-r-анкета-e/:id' });
  this.route('i-i-s-h-r-анкета-e.new',
  { path: 'i-i-s-h-r-анкета-e/new' });
  this.route('i-i-s-h-r-должность-l');
  this.route('i-i-s-h-r-должность-e',
  { path: 'i-i-s-h-r-должность-e/:id' });
  this.route('i-i-s-h-r-должность-e.new',
  { path: 'i-i-s-h-r-должность-e/new' });
  this.route('i-i-s-h-r-отдел-l');
  this.route('i-i-s-h-r-отдел-e',
  { path: 'i-i-s-h-r-отдел-e/:id' });
  this.route('i-i-s-h-r-отдел-e.new',
  { path: 'i-i-s-h-r-отдел-e/new' });
  this.route('i-i-s-h-r-сотрудник-l');
  this.route('i-i-s-h-r-сотрудник-e',
  { path: 'i-i-s-h-r-сотрудник-e/:id' });
  this.route('i-i-s-h-r-сотрудник-e.new',
  { path: 'i-i-s-h-r-сотрудник-e/new' });
  this.route('i-i-s-h-r-т-ч-отчета-l');
  this.route('i-i-s-h-r-т-ч-отчета-e',
  { path: 'i-i-s-h-r-т-ч-отчета-e/:id' });
  this.route('i-i-s-h-r-т-ч-отчета-e.new',
  { path: 'i-i-s-h-r-т-ч-отчета-e/new' });
});

export default Router;

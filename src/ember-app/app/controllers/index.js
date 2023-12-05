import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отдел-кадров.caption'),
          title: i18n.t('forms.application.sitemap.отдел-кадров.title'),
          children: [{
            link: 'i-i-s-h-r-должность-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-должность-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-h-r-отдел-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-отдел-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-h-r-анкета-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-анкета-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-анкета-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-h-r-т-ч-отчета-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-т-ч-отчета-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-т-ч-отчета-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-h-r-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-сотрудник-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-h-r-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-сотрудник-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-h-r-анкета-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-анкета-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-анкета-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-h-r-должность-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-должность-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-h-r-т-ч-отчета-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-т-ч-отчета-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-т-ч-отчета-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-h-r-отдел-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-отдел-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})
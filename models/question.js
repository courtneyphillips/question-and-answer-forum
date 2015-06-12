Forum.Question = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});

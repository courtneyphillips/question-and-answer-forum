Forum.Question = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  // answers: DS.hasMany('answer', {async: true})
});

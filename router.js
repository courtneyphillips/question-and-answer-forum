Forum.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: ':question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
});

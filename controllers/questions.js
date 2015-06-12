Forum.QuestionsController = Ember.ArrayController.extend({

  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        body: this.get('body')
      });

      newQuestion.save();
      this.transitionToRoute('questions');
      this.set('title', '');
      this.set('body', '');
    }
  }

});

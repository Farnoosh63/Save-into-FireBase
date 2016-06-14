import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveContact(){
      var params= {
        name: this.get('name')
      };
      this.sendAction('savedContact', params);
    }

  }
});

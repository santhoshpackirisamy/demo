import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
    baseRoute: alias('model.router'),
    actions: 
    {
      downloadPlugin() {
          // this.baseRoute.transitionTo("integrations.jira-settings.integrate",this.myValue)//NO I18N
          this.baseRoute.transitionTo('child',{
            queryParams: {
            property : false
            }
        });
      },
      redirectToIntegrate() {
          this.baseRoute.transitionTo("child")//NO I18N
      }  
    }
});

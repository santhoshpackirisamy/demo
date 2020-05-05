import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    // queryParams: {
    //     property:  {refreshModel: true}
    //   },
    model(params)
    {
        if(params.property)
        {
            console.log(params.property);
        }
    }
});

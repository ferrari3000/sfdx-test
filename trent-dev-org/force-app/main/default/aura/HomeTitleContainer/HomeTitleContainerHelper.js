({
    retrieveLimitedTitles : function(component, event, helper) {
		var action = component.get("c.getLimitedTitles");
        
        action.setParams({
            limiter: component.get("v.limiter")
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                component.set("v.titles", response.getReturnValue());
            }else{
                console.log('Something went wrong!');
            }
        });
        
        $A.enqueueAction(action);
	}
})
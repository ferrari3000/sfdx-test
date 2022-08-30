public class TitleDA {
    
    public List<Title__c> queryLimitedTitles(Integer limiter){
        return [SELECT Id, Name, Is_Feature__c, Total_stock__c, Available_Stock__c, Thumbnail__c, Genre__c, Rating__c
                FROM Title__c
               	LIMIT :limiter];
    } 

}
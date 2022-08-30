public class HomeTitleAuraService {
    
    private static TitleDA dataAccessor = new TitleDA();
    
    @AuraEnabled
    public static List<Title__c> getLimitedTitles(Integer limiter){
        limiter = Integer.valueOf(limiter);
        return dataAccessor.queryLimitedTitles(limiter); 
    }

}
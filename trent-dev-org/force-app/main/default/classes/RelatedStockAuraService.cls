public class RelatedStockAuraService {
    
    private static StockDA stockAccessor = new StockDA();
    
    @AuraEnabled
    public static List<Stock__c> getStockByTitleId(Id titleID){
        return stockAccessor.queryStockByTitleId(titleId);
    }
    
}
package common.suppermarket;

import common.person.CustomerPurchaseMerchandise;

public class LitterSupperMarket {
    public String supperMarketName;
    public String address;
    public int parkingCount;
    public double incommingSum;
    // 尚品
    public Merchandise[] merchandise;
    // 每件商品卖出的件数
    public int[] merchandiseSold;
    // 初始化
    public void init(String supperMarketName, String address,int parkingCount, double incommingSum) {
        this.supperMarketName = supperMarketName;
        this.address = address;
        this.parkingCount = parkingCount;
        this.incommingSum = incommingSum;
    }
}

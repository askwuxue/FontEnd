package common.suppermarket;

import common.person.CustomerPurchaseMerchandise;

public class LitterSupperMarket {
    public String supperMarketName;
    public String address;
    public int parkingCount;
    public double incomingSum;
    public int kindNumber;
    // 尚品
    public Merchandise[] merchandise;
    // 每件商品卖出的件数
    public int[] merchandiseSold;

    /**
     *
     * @param supperMarketName 超市名
     * @param address 超市地址
     * @param parkingCount 超市停车位
     * @param incomingSum 超市收入
     * @param kindNumber 商品种类
     */
    public void init(String supperMarketName, String address,int parkingCount, double incomingSum, int kindNumber) {
        this.supperMarketName = supperMarketName;
        this.address = address;
        this.parkingCount = parkingCount;
        this.incomingSum = incomingSum;
        this.kindNumber = kindNumber;
        // 初始化商品信息数组
        Merchandise m = new Merchandise();
        this.merchandise = new Merchandise[200];
        for (int i = 0; i < kindNumber; i++) {
            merchandise[i] = m.init("商品" + i, "ID" +i,200);
        }
    }
}

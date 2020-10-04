package common.suppermarket;

public class Merchandise {
    public String name;
    public String id;
    public int inventory;
    public double purchasePrice;
    public double soldPrice;
    /**
     *
     * @param name 商品名称
     * @param id 商品 ID
     * @param inventory 当前商品的库存
     * @return 商品对象
     */
    public Merchandise init(String name, String id, int inventory) {
        Merchandise m = new Merchandise();
        m.name = name;
        m.id = id;
        m.inventory = inventory;
        m.purchasePrice = Math.random() * 200;
        m.soldPrice = Math.random() * 200 + 3;
        return m;
    }
}

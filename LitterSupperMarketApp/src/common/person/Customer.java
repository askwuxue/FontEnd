package common.person;

import common.suppermarket.Merchandise;

public class Customer {
    public String name;
    public double money;
    public CustomerPurchaseMerchandise[] customerPurchaseMerchandise;
    public boolean isDrivingCar;
    public void init(String name, double money, boolean isDrivingCar) {
        this.name = name;
        this.money = money;
        this.isDrivingCar = isDrivingCar;
    }
}

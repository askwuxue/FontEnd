import common.person.Customer;
import common.person.CustomerPurchaseMerchandise;
import common.suppermarket.LitterSupperMarket;
import common.suppermarket.Merchandise;
import java.util.Scanner;

public class LitterSupperMarketApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 初始化超市信息
        LitterSupperMarket supperMarket = new LitterSupperMarket();
        supperMarket.supperMarketName = "家乐福超市";
        supperMarket.address = "上海市松江区梅家浜路1505弄150号";
        supperMarket.parkingCount = 200;
        supperMarket.incommingSum = 0.0;
        supperMarket.merchandise = new Merchandise[200];
        Merchandise[] merchandise = supperMarket.merchandise;
        // 对应每件商品卖出的件数
        supperMarket.merchandiseSold = new int[merchandise.length];
        // TODO 初始化商品信息
        for(int i = 0; i < merchandise.length; i++) {
            Merchandise m = new Merchandise();
            m.name = "商品" + i;
            m.id = "ID" + i;
            m.count = 200;
            m.purchasePrice = Math.random() * 200;
            m.soldPrice = m.purchasePrice + 3;
            merchandise[i] = m;
        }
        // TODO 初始化用户信息
        Customer customer = new Customer();
        customer.name = "张三";
        customer.money = 100;
        customer.isDrivingCar = true;
        customer.CustomerPurchaseMerchandise = new CustomerPurchaseMerchandise[10];
        CustomerPurchaseMerchandise[] customerPurchaseMerchandises = customer.CustomerPurchaseMerchandise;


        // 控制退出购物
        boolean flag = true;
        // 用户选择商品ID
        int inputGoodsNumber = 0;
        System.out.println("欢迎光临" + supperMarket.supperMarketName + "!\n" + "当前剩余停车位：" + supperMarket.parkingCount);
        // 用户购物车数量
        int shopCarCount = 0;
        // TODO 用户进行购买
        while(flag && shopCarCount < customerPurchaseMerchandises.length) {
            double totlePrice = 0;
            System.out.println("请选择您的操作：1、去购物 2、退出购物 3、查看购物车 4、去结算");
            int inputSelect = in.nextInt();
            // 对用户选择进行判断
            while (inputSelect != 1 && inputSelect !=2 && inputSelect != 3 && inputSelect != 4) {
                System.out.println("您的选择有误，请在1（去购物） 2（退出购物） 3(查看购物车)之间进行选择 ");
                inputSelect = in.nextInt();
            }
            switch(inputSelect) {
                // TODO 用户选择去购物
                case 1: {
                    System.out.println("请输入要购买的商品编号");
                    inputGoodsNumber = in.nextInt();
                    // 检证用户输入的商品ID
                    while (inputGoodsNumber < 0 || inputGoodsNumber > 199) {
                        System.out.println("请输入编号在" + 0 + "到" + (merchandise.length - 1) + "之间的商品编号");
                        inputGoodsNumber = in.nextInt();
                    }
                    // 库存更新
                    merchandise[inputGoodsNumber].count--;
                    // 用户购买列表更新
                    CustomerPurchaseMerchandise m = new CustomerPurchaseMerchandise();
                    m.name = merchandise[inputGoodsNumber].name;
                    m.id = merchandise[inputGoodsNumber].id;
                    m.soldPrice = merchandise[inputGoodsNumber].soldPrice;
                    m.count++;
                    customerPurchaseMerchandises[shopCarCount] = m;
                    System.out.println("您已选择的商品是：" + customerPurchaseMerchandises[shopCarCount].name + ",价格是：" + customerPurchaseMerchandises[shopCarCount].soldPrice + ",购物车已有商品：" + (shopCarCount + 1) + "件");
                    shopCarCount++;
                    // 购物车已满
                    if (shopCarCount == customerPurchaseMerchandises.length) {
                        System.out.println("购物车已满,请选择您的操作：1、去结算  2、查看购物车");
                        // 结算
                        inputSelect = in.nextInt();
                        if (inputSelect == 1) {
                            for (int i = 0; i < customerPurchaseMerchandises.length; i++) {
                                System.out.println(customerPurchaseMerchandises[i].name + "," + customerPurchaseMerchandises[i].id + "," + customerPurchaseMerchandises[i].soldPrice + "," + customerPurchaseMerchandises[i].count);
                                totlePrice += customerPurchaseMerchandises[i].soldPrice;
                            }
                            System.out.println("总计：" + totlePrice + "元");
                            flag = false;
                            break;
                            // TODO 购物车已满时 查看购物车后还可以进行一系列操作 ------
                        } else {
                            for (int i = 0; i < customerPurchaseMerchandises.length; i++) {
                                System.out.println(customerPurchaseMerchandises[i].name + "," + customerPurchaseMerchandises[i].id + "," + customerPurchaseMerchandises[i].soldPrice + "," + customerPurchaseMerchandises[i].count);
                            }
                        }
                    }
                };
                break;
                // TODO 用户选择退出购物
                case 2: {
                    flag = false;
                };
                break;
                // TODO 用户查看购物车
                case 3: {
                    // 购物车为空
                    if (shopCarCount == 0) {
                        System.out.println("购物车啥也没有哦！");
                        break;
                    }
                    // 购物车不为空
                    for (int i = 0; i < shopCarCount; i++) {
                        totlePrice += customerPurchaseMerchandises[i].soldPrice;
                        System.out.println(customerPurchaseMerchandises[i].name + "," + customerPurchaseMerchandises[i].id + "," + customerPurchaseMerchandises[i].soldPrice + "," + customerPurchaseMerchandises[i].count);
                    }
                    System.out.println("总计：" + totlePrice + "元");
                };
                break;
                // TODO 用户去结算
                case 4: {
                    // 购物车为空
                    if (shopCarCount == 0) {
                        System.out.println("购物车啥也没有哦！");
                        break;
                    }
                    // 购物车不为空
                    for (int i = 0; i < shopCarCount; i++) {
                        totlePrice += customerPurchaseMerchandises[i].soldPrice;
                        System.out.println(customerPurchaseMerchandises[i].name + "," + customerPurchaseMerchandises[i].id + "," + customerPurchaseMerchandises[i].soldPrice + "," + customerPurchaseMerchandises[i].count);
                    }
                    System.out.println("总计：" + totlePrice + "元");
                    // 结算 本次购物结束
                    flag = false;
                }
            }
        }
    }
}

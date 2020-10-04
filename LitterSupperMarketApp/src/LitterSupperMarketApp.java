import common.person.Customer;
import common.person.CustomerPurchaseMerchandise;
import common.suppermarket.LitterSupperMarket;
import common.suppermarket.Merchandise;
import java.util.Scanner;

public class LitterSupperMarketApp {
    Scanner in = new Scanner(System.in);
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        LitterSupperMarketApp litterSupperMarketApp = new LitterSupperMarketApp();
        // TODO 初始化超市信息
        LitterSupperMarket supperMarket = new LitterSupperMarket();
        // 超市初始化
        supperMarket.init("家乐福超市", "上海市松江区梅家浜路1505弄150号", 200, 0);
        supperMarket.merchandise = new Merchandise[200];
        // 商品信息数组
        Merchandise[] merchandise = supperMarket.merchandise;
        // 对应每件商品卖出的件数
        //supperMarket.merchandiseSold = new int[merchandise.length];
        // 初始化商品信息
        for(int i = 0; i < merchandise.length; i++) {
            Merchandise m = new Merchandise();
            double purchasePrice = Math.random() * 200;
            double soldPrice = purchasePrice + 3;
            merchandise[i] = m.init("商品" + i,"ID" + i,200, purchasePrice, soldPrice);
        }
        // 始化用户信息
        Customer customer = new Customer();
         customer.init("张三", 100, true);
        // 用户购物车数组
        customer.customerPurchaseMerchandise = new CustomerPurchaseMerchandise[10];
        CustomerPurchaseMerchandise[] customerPurchaseMerchandises = customer.customerPurchaseMerchandise;

        // 控制退出购物
        boolean returnFlag = true;
        // 判断用户状态 false: 非刚进入超市 true: 刚进入超市
        boolean customerFlag = true;
        // 用户选择商品ID
        int inputGoodsNumber = 0;
        // 用户购物车商品种类
        int shopCarCount = 0;

        // TODO 用户进行购买
        while(returnFlag) {
            double totlePrice = 0;
            int inputSelect = -1;
            // TODO 用户是首次进入
            if (customerFlag && supperMarket.parkingCount > 0) {
                System.out.println("欢迎光临" + supperMarket.supperMarketName + "!\n" + "当前剩余停车位：" + supperMarket.parkingCount);
                System.out.println("请选择您的操作：1、去购物 2、退出购物");
                inputSelect = in.nextInt();
                // TODO 对用户的选择操作进行检证
                while(litterSupperMarketApp.checkInputOption(customerFlag, inputSelect)) {
                    inputSelect = in.nextInt();
                }
                // TODO 用户去购物
                inputGoodsNumber = litterSupperMarketApp.goShop(customerPurchaseMerchandises, merchandise, shopCarCount);
                shopCarCount++;
                customerFlag = false;

                // TODO 用户不是首次进入
            } else {
                System.out.println("请选择您的操作：1、继续去购物 2、购买当前商品 3、查看购物车 4、退出购物");
                inputSelect = in.nextInt();
                while(litterSupperMarketApp.checkInputOption(inputSelect)) {
                    inputSelect = in.nextInt();
                }
                // 用户选择处理
                switch(inputSelect) {
                    // 用户去购物
                    case 1: {
                        inputGoodsNumber = litterSupperMarketApp.goShop(customerPurchaseMerchandises, merchandise, shopCarCount);
                        shopCarCount++;
                        // 购物车已满
                        returnFlag = shopCarCount >= customerPurchaseMerchandises.length ? false : true;
                        if (!returnFlag) {
                            System.out.println("购物车已满！请输入您的选择：1、去结算 2、返回购物车");
                            inputSelect = in.nextInt();
                            // TODO 对用户输入进行检证
                            // 选择去结算
                            if (inputSelect == 1) {
                                int returnSettleOption = litterSupperMarketApp.settleAccounts(customerPurchaseMerchandises, merchandise, shopCarCount, customer.money, inputGoodsNumber, false);
                                // 提交订单
                                if (returnSettleOption == 1) {
                                    System.out.println("提交订单中.......");
                                    returnFlag = false;
                                    break;
                                }
                                // 查看购物车
                                if (returnSettleOption == 2) {
                                    litterSupperMarketApp.viewShopCar(customerPurchaseMerchandises, shopCarCount);
                                }
                                // 查看购物车
                            } else {
                                litterSupperMarketApp.viewShopCar(customerPurchaseMerchandises, shopCarCount);
                            }
                        }
                    };
                    break;
                    // 用户去结算当前商品
                    case 2: {
                        // 表示用户结算的是单件还是多件 flag: true单件
                        boolean flag = true;
                        int returnSettleOption = litterSupperMarketApp.settleAccounts(customerPurchaseMerchandises, merchandise, shopCarCount, customer.money, inputGoodsNumber, flag);
                        // 提交订单
                        if (returnSettleOption == 1) {
                            System.out.println("提交订单中.......");
                            returnFlag = false;
                            break;
                        }
                        // 继续进行购物 且未结算的商品不加入购物车
                        if (returnSettleOption == 2) {
                            break;
                        }
                    };
                    break;
                    // 用户查看购物车
                    case 3: {
                        litterSupperMarketApp.viewShopCar(customerPurchaseMerchandises, shopCarCount);
                    };
                    break;
                }
            }
        }
    }
    // TODO 去购物
    public int goShop(CustomerPurchaseMerchandise[] customerPurchaseMerchandises, Merchandise[] merchandise, int shopCarCount) {
        Scanner in = new Scanner(System.in);
        int inputGoodsNumber = -1;
        System.out.println("请输入要购买的商品编号");
        inputGoodsNumber = in.nextInt();
        // TODO 对用户输入的商品ID进行check
        while(this.checkInputMerchandiseRange(inputGoodsNumber)) {
            System.out.println("请输入编号在" + 0 + "到" + (merchandise.length - 1) + "之间的商品编号");
            inputGoodsNumber = in.nextInt();
        }
        // TODO 更新用户购物车信息
        CustomerPurchaseMerchandise m = new CustomerPurchaseMerchandise();
        m.name = merchandise[inputGoodsNumber].name;
        m.id = merchandise[inputGoodsNumber].id;
        m.soldPrice = merchandise[inputGoodsNumber].soldPrice;
        m.count = 1;
        customerPurchaseMerchandises[shopCarCount] = m;
        // TODO 更新商品库存信息
        // 展示当前加入购物车的商品
        System.out.println("您已选择的商品是：" + customerPurchaseMerchandises[shopCarCount].name + ",价格是：" + customerPurchaseMerchandises[shopCarCount].soldPrice + ",件数：" + customerPurchaseMerchandises[shopCarCount].count + "件");
        return inputGoodsNumber;
    }
    // TODO 用户首次进入的check
    public boolean checkInputOption(boolean customerFlag, int inputSelect) {
        if (inputSelect != 1 && inputSelect !=2) {
            System.out.println("您的选择有误，请重新选择：1、去购物 2、退出购物");
            return true;
        }
        return false;
    }
    // TODO 对用户输入的商品范围进行check
    public boolean checkInputMerchandiseRange(int input) {
        if (input < 0 || input > 199) {
            return true;
        }
        return false;
    }
    // TODO 对用户选择进行判断
    public boolean checkInputOption(int inputSelect) {
        if (inputSelect != 1 && inputSelect !=2 && inputSelect != 3 && inputSelect != 4) {
            System.out.println("您的选择有误，请在1（去购物） 2（去结算） 3（查看购物车） 4（退出购物）之间进行选择");
            return true;
        }
        return false;
    }
    // TODO 结算  分一类商品单独结算和多类商品在购物车中一起结算
    public int settleAccounts(CustomerPurchaseMerchandise[] customerPurchaseMerchandise, Merchandise[] merchandise,int shopCarCount, double money, int inputGoodsNumber, boolean flag) {
        int inputSettleOption = -1;
        // 商品总价
        double totalCharge = 0;
        // 用户单间商品进行结算
        if (flag) {
            totalCharge = merchandise[inputGoodsNumber].soldPrice * 1;
            System.out.println(merchandise[inputGoodsNumber].name + ", " + merchandise[inputGoodsNumber].id + ", " + merchandise[inputGoodsNumber].soldPrice);
            System.out.println("请选择您的操作：1、提交订单 2、返回购物");
            // TODO 对用户的输入进行检证
            inputSettleOption = in.nextInt();
            return inputSettleOption;
            // 对购物车的多件商品进行结算
        } else {
            for (int i = 0; i < shopCarCount; i++) {
                totalCharge += customerPurchaseMerchandise[i].count * customerPurchaseMerchandise[i].soldPrice;
                System.out.println(customerPurchaseMerchandise[i].name + ", " + customerPurchaseMerchandise[i].id + ", " + customerPurchaseMerchandise[i].soldPrice + ", " + customerPurchaseMerchandise[i].count);
            }
            System.out.println("商品总金额：" + totalCharge + "元");
            System.out.println("请选择您的操作：1、提交订单 2、查看购物车");
            inputSettleOption = in.nextInt();
            return inputSettleOption;
        }
    }
    // TODO 用户查看购物车
    public void viewShopCar(CustomerPurchaseMerchandise[] customerPurchaseMerchandise, int shopCarCount) {
        for (int i = 0; i < shopCarCount; i++) {
            System.out.println(customerPurchaseMerchandise[i].name + ", " + customerPurchaseMerchandise[i].id+ ", " +customerPurchaseMerchandise[i].soldPrice+ ", " +customerPurchaseMerchandise[i].count);
        }
    }
}


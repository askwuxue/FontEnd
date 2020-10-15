package common.person;
import static app.LitterSupperMarketApp.*;

import common.Judge;
import common.suppermarket.LitterSupperMarket;
import common.suppermarket.Merchandise;
import java.util.Scanner;

public class Customer {
    // 用户名
    private String name;
    // 用户余额
    private double money;
    // 用户购买商品数组
    private CustomerPurchaseMerchandise[] customerPurchaseMerchandise;
    // 用户是否开车
    private boolean isDrivingCar;
    // 判断用户状态 false: 非刚进入超市  true: 刚进入超市
    private boolean customerFlag;
    private Scanner in;
    // 用户操作输入
    private int inputOption;
    // 用户商品index输入
    private int inputMerchandiseIndex;
    // 商品种类
    private int kindNumber;
    private Judge judge = new Judge();
    /**
     * 初始化用户信息的构造函数
     * @param name 用户姓名
     * @param money 用户账户资金
     * @param isDrivingCar 用户是否开车
     * @param shopCarMerchandiseLimit 用户购物车商品限制
     */
    public Customer(String name, double money, boolean isDrivingCar, int shopCarMerchandiseLimit, int kindNumber) {
        this.name = name;
        this.money = money;
        this.isDrivingCar = isDrivingCar;
        this.customerFlag = true;
        this.customerPurchaseMerchandise = new CustomerPurchaseMerchandise[shopCarMerchandiseLimit];
        this.in = new Scanner(System.in);
        this.inputOption = -1;
        this.kindNumber = kindNumber;
    }

    /**
     *
     * @return 用户是否首次进入
     */
    private boolean getCustomerFlag() {
        return this.customerFlag;
    }
    private void setCustomerFlag() {
        this.customerFlag = false;
    }

    /**
     *
     * @param inputOption 用户输入设置
     */
    private void setInputOption(int inputOption) {
        this.inputOption = inputOption;
    }

    /**
     *
     * @return 用户输入获取
     */
    private int getInputOption() {
        return this.inputOption;
    }

    /**
     *
     * @return 用户一级选择
     */
    public int inputOptionLevel_01() {
        int inputOptionTemp = -1;
        if (getCustomerFlag()) {
            System.out.println("请选择您的操作：1、去购物 2、退出购物");
            inputOptionTemp = this.in.nextInt();
            while (!judge.checkInputOption(inputOptionTemp)) {
                System.out.println("您的选择有误，请重新选择：1、去购物 2、退出购物");
                inputOptionTemp = this.in.nextInt();
            }
            setInputOption(inputOptionTemp);
            setCustomerFlag();
        } else {
            System.out.println("请选择您的操作：1、继续去购物 2、购买当前商品 3、查看购物车 4、退出购物");
            inputOptionTemp = this.in.nextInt();
            while (!judge.checkInputOption(getCustomerFlag() ,getInputOption())) {
                System.out.println("您的选择有误，请在1（去购物） 2（去结算） 3（查看购物车） 4（退出购物）之间进行选择");
                inputOptionTemp = this.in.nextInt();
            }
            setInputOption(inputOptionTemp);
        }
        return getInputOption();
    }
    public int inputOptionLevel_02() {
        int inputOptionTemp = inputOptionLevel_01();
        // 用户选择去购物
        switch(inputOptionTemp) {
            case 1: {
                    requestShop();
                };
            break;
            case 2: {

            };
            break;
            case 3: {

            };
            break;
            case 4: {

            }
        }
        return 0;
    }

    /**
     * 用户购物
     */
    private void requestShop() {
        System.out.println("请输入要购买的商品编号");
        // 用户输入商品index合法化检查 并设置
        setInputMerchandiseIndex(judge.inputLegalCheck(0, 200));
        LitterSupperMarket supperMarket = new LitterSupperMarket();
        // 获取商品库存 等信息
        supperMarket.merchandiseMessage(1);
        //System.out.println(supperMarket.merchandiseMessage(getInputMerchandiseIndex()));

    }

    private void firstEnter() {
        int inputOptionTemp = -1;
        System.out.println("请选择您的操作：1、去购物 2、退出购物");
        inputOptionTemp = this.in.nextInt();

    }




    private void setInputMerchandiseIndex(int inputMerchandiseIndex) {
        this.inputMerchandiseIndex = inputMerchandiseIndex;
    }

    public int getInputMerchandiseIndex() {
        return this.inputMerchandiseIndex;
    }
}

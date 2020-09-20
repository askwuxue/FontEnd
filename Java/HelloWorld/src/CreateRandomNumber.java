public class CreateRandomNumber {
    public static void main(String[] args){
        // a <= x < a + b ==> (int)(a + Math.Random() * b)
        int i = 0;
        while(i < 10000) {
            // random 生成的是双精度的 [0 - 1)的数
            double RandomNumber = Math.random();
            int rangeStart = 10;
            int rangeEnd = 90;
            int mod = rangeEnd - rangeStart;
            int bigRandom = (int) (RandomNumber * rangeEnd * 100);
            // 取模之后控制 结果在 0 到 80之间 加上最小数 刚好是取值范围
            int reallyNumber = bigRandom % mod + rangeStart;
            if (reallyNumber < 10 || reallyNumber > 90) {
                System.out.println("生成的数据错误");
                break;
            }
            i++;
            //System.out.println(RandomNumber);
            //System.out.println(bigRandom);
            System.out.println(reallyNumber);
        }
    }
}

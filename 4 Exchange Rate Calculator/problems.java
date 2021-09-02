public class problems {

    static int sum(int num) {
        // if (num / 10 == 0) 
        //     return num;
        
        // int ans =  (num % 10) + sum(num / 10);
        // System.out.println("answer : " + ans);
        // return ans;

        int sum = 0;
        boolean isLeft = true;

        while (isLeft) {
            if (num / 10 == 0) isLeft = false;

            sum += num % 10;
            num = num / 10;
        }

        sum += num % 10;

        return sum;
    }


    public static void main(String[] args) {
        
        System.out.println(sum(4569712));
        
    }
}
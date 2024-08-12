package Java;
import java.util.Scanner;
public class Prime {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number");
		int number = sc.nextInt();
		for(int i = 2;i<number;i++) {
			if(number%i == 0) {
				System.out.println("It is not a prime number");
				return;
			}
			else{
				System.out.println("It is a prime number");
				return;
			}
		}
	}

}

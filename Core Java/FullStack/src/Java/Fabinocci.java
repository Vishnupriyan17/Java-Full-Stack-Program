package Java;
import java.util.Scanner;
public class Fabinocci {

	public static void main(String[] args) {
	
		int a = 0,b=1;
		Scanner sc = new Scanner(System.in);
		System.out.println("How many numbers to print ? ");
		int n = sc.nextInt();
		System.out.print(a+" "+b+" ");
		for(int i=0;i<n;i++) {
			int c = a + b;
			System.out.print(c+" ");
			a=b;
			b=c;
		}
	}

}

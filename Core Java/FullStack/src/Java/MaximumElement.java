package Java;

import java.util.Scanner;

public class MaximumElement {

	public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	System.out.println("Enter your first number");
	int a = sc.nextInt();
	System.out.println("Enter your second numnber");
	int b = sc.nextInt();
	if(a>b) System.out.println(a);
	
	else System.out.println(b);

	}

}

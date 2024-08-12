package Java;
import java.util.*;
public class Arrays {

	public static void main(String[] args) {
		 int arr[] = new int[5];
		 int sum = 0;
		 Scanner sc = new Scanner(System.in);
		 System.out. println("Enter 5 integer values:");
		 for(int i=0; i<arr. length; i++) 
		 {
			 arr[i] = sc.nextInt();
			 System.out.println("Array Elements are: "+arr[i]);
		 }
			 for(int i=0; i<arr. length; i++) 
			 {
				 System. out . println (arr[i]);
				 sum = sum + arr[i];
				 System. out. println("Sum of all array elements :" + sum);
		 }

	}

}

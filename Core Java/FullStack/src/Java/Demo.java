package Java;
import java.util.*;
public class Demo {

	public static void main(String[] args) {
		int employeeId;
		String employeeName;
		float employeeSalary;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter employee id");
		employeeId = sc.nextInt();
		System.out.println("Enter employee Nmae");
		employeeName = sc.next();
		System.out.println("Enter employee Salary");
		employeeSalary = sc.nextInt();
		
		System.out.println(employeeId);
		System.out.println(employeeName);
		System.out.println(employeeSalary);
	}

}

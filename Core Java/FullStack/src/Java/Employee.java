package Java;
import java.util.Scanner;
class Details{
	int empId;
	String empName;
	float empSalary;
	
	Details(int empId,String empName,float empSalary){
		this.empId = empId;
		this.empName = empName;
		this.empSalary = empSalary;
	}
		void display() {
			System.out.println("Employee ID: "+empId);
			System.out.println("Employee Name: "+empName);
			System.out.println("Employee Salary: "+empSalary);
	}
}
public class Employee {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the employee ID: ");
		int Id = sc.nextInt();
		System.out.println("Enter the employee Name: ");
		String Name = sc.next();
		System.out.println("Enter the employee Salary: ");
		float Salary = sc.nextFloat();
		Details obj = new Details(Id,Name,Salary);
		obj.display();

	}

}

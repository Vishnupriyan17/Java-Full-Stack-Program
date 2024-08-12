package Java;
import java.util.*;
class Student{
	int regNo;
	String Stu_Name;
	float Total = 0f;
	float Average = 0f;
	String Grade = "";
	int arr[] = new int[5];
	Student(int regNo, String Stu_Name) {
		this.regNo = regNo;
		this.Stu_Name = Stu_Name;
	}
	void get_marks() {
		Scanner sc = new Scanner(System.in);
		for(int i = 0;i<5;i++) {
			System.out.println("Enter your mark "+i+" :");
			arr[i] = sc.nextInt();
		}
	}
	void sum_of_marks() {
		for(int i =0;i<5;i++) {
			Total = Total+arr[i];
		}
	}
	void average() {
		Average = Total/5;
	}
	void grade() {
		if(Average >= 90 && Average <= 100) {
		Grade = "O";
		}
		else if(Average >= 80 && Average <= 89) {
			Grade = "A+";
		}
		else if(Average >= 70 && Average <= 79) {
			Grade = "A";
		}
		else if(Average >= 60 && Average <= 69) {
			Grade = "B+";
		}
		else if(Average >= 50 && Average <= 59) {
			Grade = "B";
		}
		else if(Average >= 40 && Average <= 49) {
			Grade = "C";
		}
		else if(Average < 40) {
			Grade = "U";
		}
		System.out.println("The Grade is: "+Grade);
	}
	void display() {
		System.out.println("The total marks is : "+Total);
		System.out.println("The average mark is : "+Average);
	}
}
public class Activity {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your Register Number");
		int regNo = sc.nextInt();
		System.out.println("Enter your Name");
		String Stu_Name = sc.next();
		Student obj = new Student(regNo,Stu_Name);
		obj.get_marks();
		obj.sum_of_marks();
		obj.average();
		obj.display();
		obj.grade();
	}
}

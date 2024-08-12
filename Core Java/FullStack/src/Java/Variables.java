package Java;

public class Variables {
	int a = 20; //instance
	static int b = 30; //static
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int c = 10; //local
		System.out.println("Local variable: "+c);
		
		Variables obj = new Variables();
		System.out.println("Instance Variable: "+obj.a);
		
		System.out.println("Static Variable: "+Variables.b);
	}

}

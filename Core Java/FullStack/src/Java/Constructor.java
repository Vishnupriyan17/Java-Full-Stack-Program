package Java;

public class Constructor {

	 Constructor(String name){
	        System.out.println("welcome" + name);
	    }

	    Constructor(int a , int b){
	    	this("Vishnu");
	        System.out.println("Addition" + (a+b));

	    }

	    Constructor(int n){
	    	this(10,20);
	        int fact =1;
	        for(int i=1;i<=n;i++){
	            fact = fact*i;
	            System.out.println("factorial:" + fact);
	        }

	    }

	    public static void main(String[] args) {
	        Constructor obj1 =  new Constructor(5);
	    }

}

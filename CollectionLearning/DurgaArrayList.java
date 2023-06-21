import java.lang.reflect.Field;
import java.util.ArrayList;

public class DurgaArrayList {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> al = new ArrayList<>();
        for(int i=0;i<10;i++){
            al.add(i);
            System.out.println("Value= " +al.size());
        }
    }
}

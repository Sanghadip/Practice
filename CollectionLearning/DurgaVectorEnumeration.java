import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Vector;

public class DurgaVectorEnumeration {
    public static void main(String[] args) {
        Vector<Integer> v= new Vector<>();
        v.addElement(10);
        v.addElement(20);
        v.addElement(30);
        Enumeration<Integer> e= v.elements();
        while(e.hasMoreElements()){
            Integer i=e.nextElement();
                System.out.println(i);
        }
        System.out.println("-----------Iterator-------------");
        ArrayList<Integer> al= new ArrayList<Integer>();
        al.add(90);
        al.add(80);
        al.add(70);
        Iterator<Integer> it= al.iterator();
        while(it.hasNext()){
            Integer i=it.next();
            System.out.println(i);
        }
        System.out.println("--------ForEach----------");
        for(Integer i:al){
            System.out.println(i);
        }
    }
}




import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

public class LearnArrayList {
    public static void main(String[] args){
//        List<Integer> list = new ArrayList<>();
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        list.add(60);
        list.add(70);
        System.out.println(list);
        list.set(1,1000);
        System.out.println(list);
        System.out.println(list.contains(50));
        for (int i = 0; i < list.size(); i++) {
            System.out.println("The element is " +list.get(i));
        }
        System.out.println("---------------Foreach--------------");
        for(Integer element:list){
            System.out.println("The foreach element is " +element);
        }
        System.out.println("----------------Iterator------------------- ");

        Iterator<Integer> it= list.iterator();
        while(it.hasNext()){
            System.out.println("iterator "+it.next());
        }
        System.out.println("--------Vector-----------");
        Vector<String> vv= new Vector<>(3);
        System.out.println(vv.capacity());
        vv.add("aaa");
        vv.add("bbb");
        vv.add("ccc");
        vv.add("ddd");
        System.out.println(vv.capacity());
        System.out.println(vv.size());

    }
}


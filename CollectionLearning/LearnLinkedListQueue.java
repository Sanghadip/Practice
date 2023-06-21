import java.util.LinkedList;
import java.util.List;
import java.util.Queue;


public class LearnLinkedListQueue {
    public static void main(String[] args){
        Queue<Integer> queue= new LinkedList<>();
        queue.offer(12);
        queue.offer(24);
        queue.offer(36);
        System.out.println(queue);
        System.out.println(queue.poll());
        System.out.println(queue);
        System.out.println(queue.peek());
        System.out.println("---------List-----------");
        List<Integer> ls = new LinkedList<>();
        ls.add(90);
        ls.add(80);
        ls.add(70);
        System.out.println(ls);



    }
}

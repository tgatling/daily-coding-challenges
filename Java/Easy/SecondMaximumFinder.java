// 2024-07-31-second-maximum-number 
package Java.Easy;

import java.util.ArrayList;
import java.util.Arrays;

public class SecondMaximumFinder {
    
    public static int findSecondMaximum(ArrayList<Integer> numbers) {
        if (numbers.size() < 1) {
            return -1; // Indicating invalid input
        }
        
        int max = numbers.get(0);
        int secMax = numbers.get(0);
        
        for (int i = 0; i < numbers.size(); i++) {
            // setting initial values
            if (i == 1) {
                if (numbers.get(i) > max) {
                    max = numbers.get(i);
                } else {
                    secMax = numbers.get(i);
                }
            }
            
            if (i > 1 && numbers.get(i) > max) {
                secMax = max;
                max = numbers.get(i);
            }
        }
        
        return secMax;
    }

    public static void main(String[] args) {
        // Test cases
        ArrayList<TestCase> testCases = new ArrayList<>(Arrays.asList(
            new TestCase(new ArrayList<>(Arrays.asList(3, 1, 6, 9)), 6, "Original test case"),
            new TestCase(new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5)), 4, "Sorted ascending"),
            new TestCase(new ArrayList<>(Arrays.asList(5, 4, 3, 2, 1)), 4, "Sorted descending"),
            new TestCase(new ArrayList<>(Arrays.asList(1, 1, 1, 1)), 1, "All elements are the same"),
            new TestCase(new ArrayList<>(Arrays.asList(5, 5, 4, 2)), 4, "Duplicate maximum"),
            new TestCase(new ArrayList<>(Arrays.asList(10, 5, 9, 8, 7, 6)), 9, "Maximum at start"),
            new TestCase(new ArrayList<>(Arrays.asList(-1, -2, -3, -4)), -2, "Negative numbers"),
            new TestCase(new ArrayList<>(Arrays.asList(1)), 1, "Single element array"),
            new TestCase(new ArrayList<>(), -1, "Empty array")
        ));

        // Run test cases
        for (int i = 0; i < testCases.size(); i++) {
            TestCase testCase = testCases.get(i);
            int result = findSecondMaximum(testCase.input);
            System.out.println("Test case " + (i + 1) + " (" + testCase.description + "):");
            System.out.println("  Input: " + testCase.input);
            System.out.println("  Expected output: " + testCase.expected);
            System.out.println("  Actual output: " + result);
            System.out.println("  Result: " + (result == testCase.expected ? "PASS" : "FAIL"));
            System.out.println();
        }
    }

    static class TestCase {
        ArrayList<Integer> input;
        int expected;
        String description;

        TestCase(ArrayList<Integer> input, int expected, String description) {
            this.input = input;
            this.expected = expected;
            this.description = description;
        }
    }
}
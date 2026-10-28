// Exact 19-session syllabus adopted by Dagmawi Shigute (Co-founder of Hawcoder)
// Sourced from AddisCoder 2026 syllabus (www.addiscoder.com/syllabus/2026)

export const courseOverview = {
  title: "Introduction to Programming and Algorithms",
  adoptedBy: "Dagmawi Shigute, Co-founder of Hawcoder",
  format: "19 sessions, two per week (about ten weeks)",
  sessionLength: "1 hour",
  language: "Python",
  curriculumSource: "AddisCoder 2026 syllabus",
  sourceUrl: "https://www.addiscoder.com/syllabus/2026",
  venue: "American Corner, Hawassa",
  cost: "0 ETB (100% Free)"
};

export const hawcoderSessions = [
  {
    week: 1,
    session: 1,
    topic: "Introduction, arithmetic expressions, variables",
    lectureRef: "1A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Welcome to computer science. How code runs, basic mathematical arithmetic in Python, assigning and updating variables."
  },
  {
    week: 1,
    session: 2,
    topic: "Data types, operators, casting",
    lectureRef: "1B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Integers, floats, booleans, strings. Arithmetic and comparison operators, type conversion with int(), float(), str()."
  },
  {
    week: 2,
    session: 3,
    topic: "Control flow, strings",
    lectureRef: "2A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Conditional execution with if, elif, else. String indexing, slicing, concatenation, and common string methods."
  },
  {
    week: 2,
    session: 4,
    topic: "For loops, range, lists",
    lectureRef: "2B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Definite iteration using for loops and range(). Introduction to lists, indexing, appending, and iterating over sequences."
  },
  {
    week: 3,
    session: 5,
    topic: "While loops",
    lectureRef: "3A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Indefinite iteration with while loops, loop invariants, terminating conditions, and avoiding infinite loops."
  },
  {
    week: 3,
    session: 6,
    topic: "Functions, print vs. return",
    lectureRef: "3B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Defining modular reusable functions with def. Crucial conceptual distinction between printing output and returning values."
  },
  {
    week: 4,
    session: 7,
    topic: "More functions, scope",
    lectureRef: "4A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Function parameters, default arguments, local vs global scope, and how Python resolves variable names (LEGB rule)."
  },
  {
    week: 4,
    session: 8,
    topic: "Mutability, nested lists and loops",
    lectureRef: "4B, 5",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Memory references and mutability (lists vs strings/tuples). 2D grids, nested for-loops, and list matrix representation."
  },
  {
    week: 5,
    session: 9,
    topic: "Introduction to recursion",
    lectureRef: "7A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Solving problems by solving smaller instances of the same problem. Base cases, recursive steps, and call stack visualization."
  },
  {
    week: 5,
    session: 10,
    topic: "More recursion",
    lectureRef: "7B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Advanced recursive puzzles: Palindromes, subset generation, and recursive tree exploration."
  },
  {
    week: 6,
    session: 11,
    topic: "Time complexity, Big-O notation",
    lectureRef: "10B, 11A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "How to mathematically analyze algorithmic running time as input size n grows. Comparing O(1), O(log n), O(n), and O(n^2)."
  },
  {
    week: 6,
    session: 12,
    topic: "Linear and binary search",
    lectureRef: "11B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Why sorted data changes everything: transitioning from O(n) linear scanning to O(log n) bisection / binary search."
  },
  {
    week: 7,
    session: 13,
    topic: "Bubble sort and selection sort",
    lectureRef: "12A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Quadratic sorting mechanics: finding minimums and swapping adjacent inversions. Worst-case and average-case analysis."
  },
  {
    week: 7,
    session: 14,
    topic: "Merge sort, sorting runtimes",
    lectureRef: "12B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Divide and Conquer in action: dividing lists in half, recursive sorting, and merging in linear time for guaranteed O(n log n)."
  },
  {
    week: 8,
    session: 15,
    topic: "Graphs, paths, trees",
    lectureRef: "13A, 13B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Representing relationships in the real world: vertices, edges, paths, cycles, trees, and adjacency list representations in Python."
  },
  {
    week: 8,
    session: 16,
    topic: "Depth-first search",
    lectureRef: "14A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Exploring graphs deeply before backtracking. Recursive DFS, visited sets, and detecting connected components."
  },
  {
    week: 9,
    session: 17,
    topic: "Breadth-first search",
    lectureRef: "14B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Level-order traversal using queues (deque). Finding guaranteed shortest paths in unweighted graphs and mazes."
  },
  {
    week: 9,
    session: 18,
    topic: "Introduction to memoization",
    lectureRef: "16B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Dynamic programming intuition: caching return values of expensive recursive calls to reduce exponential time O(2^n) to linear O(n)."
  },
  {
    week: 10,
    session: 19,
    topic: "Memoization practice, review",
    lectureRef: "16B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Comprehensive review of the curriculum, extended problem-solving practice, and final project celebration."
  }
];

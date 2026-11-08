// Exact 10-session syllabus adopted by Dagmawi Shigute (Co-founder of Hawcoder)
// Sourced from AddisCoder 2026 syllabus (www.addiscoder.com/syllabus/2026)

export const courseOverview = {
  title: "Introduction to Programming and Algorithms",
  adoptedBy: "Dagmawi Shigute, Co-founder of Hawcoder",
  format: "10 sessions, one per week (ten weeks)",
  sessionLength: "50 minutes",
  language: "Python",
  curriculumSource: "AddisCoder 2026 syllabus",
  sourceUrl: "https://www.addiscoder.com/syllabus/2026",
  venue: "American Corner, Hawassa",
  cost: "0 ETB (100% Free)"
};

export const hawcoderSessions = [
  {
    session: 1,
    topic: "Introduction, arithmetic expressions, variables",
    lectureRef: "1A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Intro to Hawcoder & CS, Google Colab basics, print(), arithmetic operators (+, -, *, /, //, **, %), order of operations, syntax errors & comments, variables and assignment.",
    materials: [
      {
        name: "Lecture Slides (.pptx)",
        file: "./materials/session1/hawcoder_session1_slides.pptx",
        type: "slides",
        desc: "Presentation by Dagmawi Shigute & assistants"
      },
      {
        name: "Interactive Notebook (.ipynb)",
        file: "./materials/session1/hawcoder_session1.ipynb",
        type: "notebook",
        colabUrl: "https://colab.research.google.com/github/dagmawishigute3-oss/hawcoder/blob/main/public/materials/session1/hawcoder_session1.ipynb",
        desc: "Colab code walkthrough"
      },
      {
        name: "Practice Exercises (.ipynb)",
        file: "./materials/session1/hawcoder_session1_exercises.ipynb",
        type: "exercises",
        colabUrl: "https://colab.research.google.com/github/dagmawishigute3-oss/hawcoder/blob/main/public/materials/session1/hawcoder_session1_exercises.ipynb",
        desc: "Hands-on coding problems for students"
      },
      {
        name: "Exercise Solutions (.ipynb)",
        file: "./materials/session1/hawcoder_session1_solutions.ipynb",
        type: "solutions",
        colabUrl: "https://colab.research.google.com/github/dagmawishigute3-oss/hawcoder/blob/main/public/materials/session1/hawcoder_session1_solutions.ipynb",
        desc: "Reference answers and explanations"
      }
    ]
  },
  {
    session: 2,
    topic: "Data types, operators, casting",
    lectureRef: "1B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Integers, floats, booleans, strings. Arithmetic and comparison operators, type conversion with int(), float(), str().",
    materials: []
  },
  {
    session: 3,
    topic: "Control flow, strings",
    lectureRef: "2A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Conditional execution with if, elif, else. Boolean logic, string indexing, slicing, concatenation, and common string methods.",
    materials: []
  },
  {
    session: 4,
    topic: "For loops, while loops, range, lists",
    lectureRef: "2B, 3A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Definite iteration with for loops and range(). Indefinite iteration with while loops. List fundamentals: indexing, slicing, appending, mutating.",
    materials: []
  },
  {
    session: 5,
    topic: "Functions, print vs. return",
    lectureRef: "3B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Defining custom functions with def, parameters, arguments. Critical distinction between printing output and returning values.",
    materials: []
  },
  {
    session: 6,
    topic: "Scope, recursion",
    lectureRef: "4A, 7A",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Local vs. global variable scope. The fundamentals of recursive thinking: base cases, recursive steps, call stack visualization.",
    materials: []
  },
  {
    session: 7,
    topic: "Time complexity",
    lectureRef: "10B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Measuring algorithm efficiency. Counting computational steps, best-case vs. worst-case behavior, scalability with input size n.",
    materials: []
  },
  {
    session: 8,
    topic: "Big-O notation, linear and binary search",
    lectureRef: "11A, 11B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Formal Big-O asymptotic notation: O(1), O(log n), O(n), O(n^2). Linear search vs. binary search on sorted data.",
    materials: []
  },
  {
    session: 9,
    topic: "Sorting: bubble, selection and merge sort",
    lectureRef: "12A, 12B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Comparison-based sorting algorithms: Bubble sort O(n^2), Selection sort O(n^2), and Divide-and-Conquer Merge sort O(n log n).",
    materials: []
  },
  {
    session: 10,
    topic: "Graphs, depth-first search, breadth-first search",
    lectureRef: "13A, 14A, 14B",
    lectureUrl: "https://www.addiscoder.com/syllabus/2026",
    summary: "Graph representations (adjacency lists, matrices). Graph traversal techniques: Depth-First Search (DFS) and Breadth-First Search (BFS).",
    materials: []
  }
];

# Data Structures and Algorithms - TypeScript Conversion

This project contains DSA (Data Structures and Algorithms) examples from Colt Steele's course, all converted from JavaScript to TypeScript with proper type annotations.

## 📁 Project Structure

```
src/
├── 1_SumToN.ts                                    # Sum calculation with O(n) and O(1) approaches
├── 2_printNumbersToNInreverseandforward.ts        # Print numbers up and down
├── 3_getAtmost5Andatleast5.ts                     # Constrained and unconstrained loops
├── 4_summOfArraysAndTheirSpaceComplexity.ts       # Array operations and space complexity
├── 5_logarithmicTimeComplexitIsInverseOfExponentiationAndWeConsiderBase2ForGeneralTrend.ts # Binary search algorithm
├── 6_countCharactersInAstring.ts                  # Character counting in strings
├── comprehensive-index.ts                         # Demonstrates all functions
├── dsa-examples.ts                                # Additional DSA examples
└── index.ts                                       # Main entry point

dist/
├── *.js                                          # Compiled JavaScript files
├── *.js.map                                      # Source maps for debugging
└── types/                                        # TypeScript declaration files
    ├── *.d.ts                                    # Type definitions
    └── *.d.ts.map                               # Declaration source maps
```

## 🚀 Available Scripts

### TypeScript Development
```bash
# Run any TypeScript file directly with ts-node
npm run ts:file src/1_SumToN.ts

# Run the comprehensive demo (TypeScript)
npm run ts:demo

# Run the main index file (TypeScript)
npm run ts:exec

# Run any file with ts-node
npm run ts:run src/your-file.ts

# Development mode with watch
npm run ts:dev src/your-file.ts
```

### Build and Production
```bash
# Build TypeScript to JavaScript
npm run build

# Build in watch mode
npm run build:watch

# Run compiled JavaScript
npm run demo

# Clean build directory
npm run clean
```

## 📚 Algorithm Examples

### 1. Sum to N - Time Complexity Comparison
- **Linear O(n)**: Loop-based sum calculation
- **Constant O(1)**: Mathematical formula approach

### 2. Print Numbers - Linear Algorithms
- **Go Up and Down**: Print 1 to n, then n-1 to 1

### 3. Constrained Loops
- **At Most 5**: O(1) - Limited iterations regardless of input
- **At Least 5**: O(n) - Scales with input size

### 4. Array Operations - Space Complexity
- **Sum Array**: O(1) space complexity
- **Double Array**: O(n) space complexity

### 5. Binary Search - Logarithmic Time
- **O(log n)**: Efficient searching in sorted arrays
- **Space**: O(1) - Constant space usage

### 6. Character Counting
- **Time**: O(n) - Linear string processing
- **Space**: O(k) - Where k is unique characters

## 🔧 Technical Features

### TypeScript Configuration
- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: Enabled for better type safety
- **Declaration Files**: Generated in `dist/types/`
- **Source Maps**: Available for both JS and declaration files

### Type Safety
- All functions have proper type annotations
- Interface definitions for complex types
- Export/import statements for modularity
- Strict null checks and parameter validation

## 🎯 Usage Examples

### Running Individual Files
```bash
# Direct ts-node execution
npx ts-node src/1_SumToN.ts

# Using npm script
npm run ts:file src/6_countCharactersInAstring.ts
```

### Building for Production
```bash
# Compile TypeScript
npm run build

# Run compiled JavaScript
node dist/comprehensive-index.js
```

### Development Workflow
```bash
# Start TypeScript in watch mode
npm run ts:dev src/your-algorithm.ts

# Or build in watch mode
npm run build:watch
```

## 📊 Performance Testing

Each algorithm includes performance measurements and Big O analysis:
- Time complexity explanations
- Space complexity analysis
- Performance comparisons where applicable

## 🔄 Migration from JavaScript

All original `.js` files have been converted to `.ts` with:
- ✅ Proper type annotations
- ✅ Interface definitions
- ✅ Export statements for modularity
- ✅ Strict TypeScript configuration
- ✅ Declaration file generation
- ✅ Source map support

The original JavaScript functionality is preserved while adding type safety and modern development features.

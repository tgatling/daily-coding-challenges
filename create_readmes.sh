#!/bin/bash

# Define the template content
template="# [Language/Difficulty Level] LeetCode Solutions

This directory contains my solutions to [Language/Difficulty Level] LeetCode problems.

## Problems Solved

| #  | Title | Solution | Date Completed | Notes |
|----|-------|----------|----------------|-------|
| 1  | [Problem Name](problem_link) | [Solution File](solution_link) | YYYY-MM-DD | Brief notes or learnings |

## Statistics

- Total problems solved: [Number]
- Easy: [Number]
- Medium: [Number]
- Hard: [Number]

## Key Learnings

- [Key concept or algorithm learned]

## Goals

- [Specific goal for this language/difficulty level]

## Resources

- [Helpful resource or tutorial used]

## Notes

[Any additional notes, observations, or plans for this section of problems]"

# Find all directories named Easy, Medium, or Hard
dirs=$(find . -type d \( -name "Easy" -o -name "Medium" -o -name "Hard" \))

# Loop through each directory
for dir in $dirs
do
    # Create README.md file with template content
    echo "$template" > "$dir/README.md"
    echo "Created README.md in $dir"
done

echo "All README files have been created and populated with the template."

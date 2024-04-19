
        function solveNQueens() {
            const boardSize = parseInt(document.getElementById('boardSize').value);
            const solutions = [];

            function isSafe(board, row, col) {
                for (let i = 0; i < row; i++) {
                    if (board[i] === col || 
                        board[i] - i === col - row || 
                        board[i] + i === col + row) {
                        return false;
                    }
                }
                return true;
            }

            function solve(board, row) {
                if (row === boardSize) {
                    solutions.push([...board]);
                    return;
                }

                for (let col = 0; col < boardSize; col++) {
                    if (isSafe(board, row, col)) {
                        board[row] = col;
                        solve(board, row + 1);
                        board[row] = undefined;
                    }
                }
            }

            solve([], 0);
            displaySolutions(solutions);
        }

        function displaySolutions(solutions) {
            const solutionsContainer = document.getElementById('solutions');
            solutionsContainer.innerHTML = '';

            solutions.forEach((solution, index) => {
                const solutionDiv = document.createElement('div');
                solutionDiv.className = 'solution';

                for (let i = 0; i < solution.length; i++) {
                    const matrix = document.createElement('div');
                    matrix.className = 'matrix';

                    for (let j = 0; j < solution.length; j++) {
                        const cell = document.createElement('div');
                        cell.className = 'cell';
                        if (i === solution[j]) {
                            cell.innerHTML = '&#9819;'; // Chess queen Unicode
                            cell.classList.add('queen');
                        }
                        matrix.appendChild(cell);
                    }
                    solutionDiv.appendChild(matrix);
                }
                solutionsContainer.appendChild(solutionDiv);
            });
        }
    
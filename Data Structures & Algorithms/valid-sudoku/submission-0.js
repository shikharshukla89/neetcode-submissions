class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {}
        const cols = {}
        const boxes = {}

        for(let r=0; r<9; r++) {
            for(let c=0; c<9; c++) {
                const value = board[r][c];
                
                //ignore empty cells
                if (value === ".") continue;
                
                const boxKey = `${Math.floor(r/3)} - ${Math.floor(c/3)}`;
                
                if(rows[`${r}-${value}`] || cols[`${c}-${value}`] || boxes[`${boxKey}-${value}`]){
                return false
                }
                
                rows[`${r}-${value}`] = true;
                cols[`${c}-${value}`] = true;
                boxes[`${boxKey}-${value}`] = true;
                
            }
        }
        return true;
    }
}

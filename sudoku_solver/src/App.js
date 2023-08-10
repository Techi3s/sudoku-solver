import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [sudoku, setSudoku] = useState([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ]);

    const handleInputChange = (event) => {
        const { target } = event;
        const value = target.value;
        const row = parseInt(target.name.split("-")[1]);
        const col = parseInt(target.name.split("-")[3]);
        // console.log(row + " " + col);
        // console.log(value);

        setSudoku((sudoku) => {
            const newSudoku = [...sudoku];
            newSudoku[row][col] = value;
            return newSudoku;
        });
        console.log(sudoku);
    };

    const handleClick = () => {
        // handle pasing to backend here
    };

    return (
        <div className="App">
            <h1>Sudoku Solver</h1>
            <table className="table">
                <tbody>
                    {sudoku.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>
                                    <input
                                        className="cell"
                                        type="text"
                                        name={`row-${i}-col-${j}`}
                                        value={cell || ""}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="button" onClick={() => handleClick()}>
                GET
            </button>
        </div>
    );
}

export default App;

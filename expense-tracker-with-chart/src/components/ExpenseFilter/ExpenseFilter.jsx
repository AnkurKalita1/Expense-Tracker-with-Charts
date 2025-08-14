import React from "react";

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeFilter(event.target.value,props.selectedMonth)
    }
    const monthChangeHandler = (event) => {
        props.onChangeFilter(props.selectedYear, event.target.value)
    }
    return (
        <div>
            <label htmlFor="">Filter: </label>
            <select value={props.selectedYear} onChange={yearChangeHandler} style={{padding:"3px", margin:"5px"}}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select> 
            <select value={props.selectedMonth} onChange={monthChangeHandler} style={{ padding: "3px", margin: "5px" }}>
                <option value="">All Months</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sept">Sept</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;
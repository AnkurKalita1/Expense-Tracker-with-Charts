import React from "react";
import Stats from "../../stats/Stats";
import ChartComponent from "../ChartComponent";
const StatsAndChart = ({ transactions }) => {
    return (
        <div className="statsAndCharts">
            <Stats transactions={transactions} />
            <ChartComponent transactions={transactions}/>

        </div>
    )
}

export default StatsAndChart
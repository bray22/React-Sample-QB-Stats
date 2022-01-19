//Last Updated: Ben Ray 1/18/22
import React, { Component, createRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

let LineChart;

const LineGraph = ({ quarterback, qbStats, metric }) => {
  const graphLabels = [];
  const compPercentage = [];
  const yardsPerAttenmpt = [];
  const labels = qbStats.forEach( (gameWeek) => {
    graphLabels.push(`week ${gameWeek.week}`);
    compPercentage.push(`${Math.round(gameWeek.CmpPcnt)}`);
    yardsPerAttenmpt.push(`${Math.round(gameWeek.YdsPrAtt)}` )
  });

  const yardsPerAttenmptData = {
    label: "Yards Per Attenpt",
    data: yardsPerAttenmpt,
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)"
  }

  const compPercentageData = {
    label: "Completion Percentage",
    data: compPercentage,
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)"
  }

const data = {
  labels: graphLabels,
};

data.datasets = metric === "YdsPrAtt" ? [yardsPerAttenmptData] : [compPercentageData]

return (
  <div className="line-chart">
    <Line data={data} />
  </div>
);
  
};

  

  
   
 
  
  



export default LineGraph;


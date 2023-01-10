import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currMonth = date.getMonth();
let monthName;

const customStyle = {
  color: ""
};
//customStyle.color

if (currMonth === 0) {
  monthName = "January";
  customStyle.color = "red";
} else if (currMonth === 1) {
  monthName = "February";
  customStyle.color = "black";
} else if (currMonth === 2) {
  monthName = "March";
  customStyle.color = "orange";
} else if (currMonth === 3) {
  monthName = "April";
  customStyle.color = "yellow";
} else if (currMonth === 4) {
  monthName = "May";
  customStyle.color = "brown";
} else if (currMonth === 5) {
  monthName = "June";
  customStyle.color = "aqua";
} else if (currMonth === 6) {
  monthName = "July";
  customStyle.color = "white";
} else if (currMonth === 7) {
  monthName = "August";
  customStyle.color = "green";
} else if (currMonth === 8) {
  monthName = "September";
  customStyle.color = "blue";
} else if (currMonth === 9) {
  monthName = "October";
  customStyle.color = "maroon";
} else if (currMonth === 10) {
  monthName = "November";
  customStyle.color = "purple";
} else if (currMonth === 11) {
  monthName = "December";
  customStyle.color = "pink";
}
ReactDOM.render(
  <h2 style={customStyle}>Hello {monthName}</h2>,
  document.getElementById("root")
);

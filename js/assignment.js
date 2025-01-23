"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

function findLargestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function render() {
    smallestNumberElement.textContent = findSmallestNumber(myNumbers); // Expected: 25
    largestNumberElement.textContent = findLargestNumber(myNumbers); // Expected: 354
    averageNumberElement.textContent = findAverage(myNumbers); // Expected: 123.55555555555556
}

submissionBtn.addEventListener("click", function () {
    render();
});

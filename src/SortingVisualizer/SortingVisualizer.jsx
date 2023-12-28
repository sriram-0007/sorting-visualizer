import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';
import { bubbleSort } from '../SortingAlgorithms/bubbleSort';

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 300));
        }
        this.setState({ array });
    }
    mergesort() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {

            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    quicksort() { }
    heapsort() { }
    bubblesort() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = bubbleSort(this.state.array);
        console.log(animations.length);
        for (let i = 0; i < animations.length; i++) {

            const isColorChange = animations[i].at(-1);
            console.log(isColorChange);
            if (!isColorChange) {
               const [Idx,barOneIdx, barTwoIdx,boll] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = Idx % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            }
            else{
                setTimeout(() => {
                    const [Idx,barOneIdx, barTwoIdx, newHeightBarOne, newHeightBarTwo,boll] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempBarStyle = newHeightBarOne;
                    barOneStyle.height = `${newHeightBarTwo}px`;
                    barTwoStyle.height = `${tempBarStyle}px`;
                    const color = Idx % 2 === 0 ? "green" : PRIMARY_COLOR;
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                }, i * 1);
            }
        }
    }
    render() {
        const { array } = this.state;
        return (
            <div className="container">
                <div class='header'>
                    <div class="btn">
                        <div className="reset">
                            <button onClick={() => this.resetArray()}>Generate New Array</button>
                        </div>
                        <div class="seperator-1"></div>
                        <div className="slider">
                            <button onClick={() => this.resetArray()}>Change Array Size & Sorting Speed</button>

                        </div>
                        <div className="sliderOption">
                            <input type="range" min="0" max="100" step="10" />
                        </div>

                        <div class="seperator-2"></div>
                        <div className="Sorting-buttons">
                            <button onClick={() => this.mergesort()}>Merge Sort</button>
                            <button onClick={() => this.quicksort()}>Quick Sort</button>
                            <button onClick={() => this.heapsort()}>Heap Sort</button>
                            <button onClick={() => this.bubblesort()}>Bubble Sort</button>
                        </div>

                    </div>
                </div>

                <div className="array-container">
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx}
                            style={{ height: `${value}px` }}>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
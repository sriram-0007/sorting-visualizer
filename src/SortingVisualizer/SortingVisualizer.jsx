import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';
import { bubbleSort } from '../SortingAlgorithms/bubbleSort';
import { heapSort } from '../SortingAlgorithms/HeapSort';
import { quickSort } from '../SortingAlgorithms/quickSort';

const PRIMARY_COLOR = "#4286f4cc";
const SECONDARY_COLOR = "#FAEF5D";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            ANIMATION_SPEED_MS: 3,
            NUMBER_OF_ARRAY_BARS: 100,
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; i++) {
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
                }, i * this.state.ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.ANIMATION_SPEED_MS);
            }
        }
    }

    quicksort() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = quickSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 === 2;
            if (!isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, newHeightBarOne, newHeightBarTwo] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempBarStyle = newHeightBarOne;
                    barOneStyle.height = `${newHeightBarTwo}px`;
                    barTwoStyle.height = `${tempBarStyle}px`;
                    const color = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            }
        }
    }

    heapsort() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = heapSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 === 2;
            if (!isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, newHeightBarOne, newHeightBarTwo] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempBarStyle = newHeightBarOne;
                    barOneStyle.height = `${newHeightBarTwo}px`;
                    barTwoStyle.height = `${tempBarStyle}px`;
                    const color = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            }
        }
    }

    bubblesort() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = bubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i].at(-1);
            if (!isColorChange) {
                const [Idx, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = Idx % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [Idx, barOneIdx, barTwoIdx, newHeightBarOne, newHeightBarTwo] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempBarStyle = newHeightBarOne;
                    barOneStyle.height = `${newHeightBarTwo}px`;
                    barTwoStyle.height = `${tempBarStyle}px`;
                    const color = Idx % 2 === 0 ? "#65B741" : PRIMARY_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.ANIMATION_SPEED_MS);
            }
        }
    }

    handleSpeedChange = (e) => {
        this.setState({ ANIMATION_SPEED_MS: e.target.value });
    }

    handleArrayBarsChange = (e) => {
        const newArrayBars = e.target.value;
        this.setState({ NUMBER_OF_ARRAY_BARS: newArrayBars }, () => {
            this.resetArray();
        });
    }

    render() {
        const { ANIMATION_SPEED_MS, NUMBER_OF_ARRAY_BARS } = this.state;
        const { array } = this.state;

        return (
            <div className="container">
                <div className='header'>
                    <div className="btn">
                        <div className="reset">
                            <button onClick={() => this.resetArray()}>Generate New Array</button>
                        </div>
                        <div className="seperator-1"></div>
                        <div className="slider">
                            <div>
                                <div style={{ color: "white" }}>Change Array Size & Sorting Speed</div>
                            </div>

                            <div className="slider">
                                <div style={{ color: "white" }}>Change Array Size</div>
                                <input type="range" min="10" max="200" step="10" value={NUMBER_OF_ARRAY_BARS} onChange={this.handleArrayBarsChange} />
                            </div>
                            <div className="slider">
                                <div style={{ color: "white" }}>Change Animation Speed</div>
                                <input type="range" min="1" max="10" step="1" value={ANIMATION_SPEED_MS} onChange={this.handleSpeedChange} />
                            </div>
                        </div>

                        <div className="seperator-2"></div>
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
                        <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                    ))}
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

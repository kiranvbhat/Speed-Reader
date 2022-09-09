import React, { Component } from 'react';

class RenderedWord extends Component {
    constructor(props) {
        super(props);
        let delay = 60000 / props.wpm;
        this.state = { textArray : props.text.split(" "), index : 0,  delay : delay, fontSize: props.fontSize};
        // console.log(this.state)
    }
    mycallback = () => {
        let currIndex = this.state.index;
        if (currIndex + 1 >= this.state.textArray.length) {
            clearInterval(this.timeout);
        } else {
            this.setState({ index : currIndex + 1})
        }
    }

    componentDidMount() {
        this.timeout = setInterval(this.mycallback, this.state.delay);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let currWord = this.state.textArray[this.state.index];
        return (
            // <div className="RenderedWord">
            <h1 style={ {fontSize: `${this.state.fontSize}px`} }> {currWord}</h1>
            // </div>
        );
    }
}

export default RenderedWord;
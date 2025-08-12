import React, { Component, createRef } from "react";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface MyComponentState {
    selectedDate: Date;
    showPicker: boolean;
    inputValue: string;
}

export default class Singledatepicker extends Component<{}, MyComponentState> {
    wrapperRef = createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        const today = new Date();
        this.state = {
            selectedDate: today,
            showPicker: false,
            inputValue: this.formatDate(today),
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event: MouseEvent) {
        if (
            this.wrapperRef.current &&
            !this.wrapperRef.current.contains(event.target as Node)
        ) {
            this.setState({ showPicker: false });
        }
    }

    formatDate(date: Date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }

    handleSelect(date: Date) {
        this.setState({
            selectedDate: date,
            inputValue: this.formatDate(date),
            showPicker: false, // close picker on select (optional)
        });
    }

    render() {
        const { selectedDate, showPicker, inputValue } = this.state;

        return (
            <div className="relative inline-block w-full" ref={this.wrapperRef}>
                {/* Input Field */}
                <div className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        readOnly
                        onClick={() => this.setState({ showPicker: !showPicker })}
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] "
                    />

                </div>

                {/* Single Date Picker */}
                {showPicker && (
                    <div className="absolute z-10 mt-2">
                        <Calendar
                            date={selectedDate}
                            onChange={this.handleSelect}
                        />
                    </div>
                )}
            </div>
        );
    }
}

import React from 'react';
// Components:
import AddOption from './AddOption'
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    hanleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    hanleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => {return option !== optionToRemove;})
        }))
    };

    handlePic = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    // lifecicle method - gets called when the component first get called to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            } 

        } catch (e) {
            // Do nothing at all
        }    
    };
    // lifecicle method - gets called after the props/state changes
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);        }

    };
    // lifecicle method - gets called before component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = "Put your todo list in the hands of a computer :)"; 
        return (
            <div>
                <Header 
                subtitle={subtitle} 
                />
                <div className="container">
                    <Action 
                    handlePic={this.handlePic} 
                    hasOptions={this.state.options.length > 0} 
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options} 
                        hanleDeleteOptions={this.hanleDeleteOptions}
                        hanleDeleteOption = {this.hanleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleCloseModal = {this.handleCloseModal}
                />
            </div>
        );
    };
};
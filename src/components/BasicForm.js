import React from 'react';

export default class BasicForm extends React.Component {
    state = {
        name: '',
        age: ''
    }

    handleName = (e) => {
        e.preventDefault();
        const name = e.target.elements.nameField.value
        e.target.style.display = 'none';
        this.setState(() => ({
            name: name
        }));
        document.getElementById('age').style.display = 'inline';
    };

    handleAge = (e) => {
        e.preventDefault();
        const age = e.target.elements.ageField.value
        e.target.style.display = 'none';
        this.setState(() => ({
            age: age
        }));
        document.getElementById('return').style.display = 'inline';
    };

    handleReset = () => {
        document.getElementById('return').style.display = 'none';;
        this.setState (() => ({
            name: '',
            age: ''
        }));
        document.getElementById('name').style.display = 'inline';
        document.getElementById('nameField').value='';
        document.getElementById('ageField').value='';
    };

    render() {
        return (
            <div>
                <h1>Basic Form</h1>
                <form className='name' id='name' onSubmit={this.handleName}>
                    <label>What is your name? </label>
                    <input type='text' id='nameField' autoComplete='off' autoFocus></input>
                    <button>Next</button>
                </form>
                <form className='age' id='age' onSubmit={this.handleAge}>
                    <label>How old are you? </label>
                    <input id='ageField'></input>
                    <button>Next</button>
                </form>
                <div className='return' id='return'>
                    <h2>Hello, {this.state.name}.</h2>
                    <h2>You are {this.state.age} years old.</h2>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}
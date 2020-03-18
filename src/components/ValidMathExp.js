import React from 'react';

class ValidMathExp extends React.Component{ //in this version it work properly for integer numbers
    constructor(props){
        super(props);
        this.state = {
            isValidMathExp: "",
            isOK : "  ",
            fiveLastCalculations: []
        };
    }

    isMathExpValid = (mathExp) => {
        let math = /^([-|+|]?[0-9]+([-|+|/|*][0-9])?){1,}$/;

        return math.test(mathExp);
    }

    handleOnKeyUp_IsValidMath = () => {
        let ok = "✔️";
        let no = "❌";
        let mathExp = this.state.isValidMathExp;
        let isOk = no;
        if(this.isMathExpValid(mathExp)){
            isOk = ok;
        }
        if(mathExp.trim() === ""){
            isOk = "  "
        }
        this.setState({isOK: isOk})
    }

    handleOnMouseUp_IsValidMath = (event) => {
        let ok = "✔️";
        let no = "❌";
        let mathExp = this.state.isValidMathExp + event.target.value;
        let isOk = no;
        if(this.isMathExpValid(mathExp)){
            isOk = ok;
        }
        if((""+mathExp).trim() === ""){
            isOk = "  "
        }
        this.setState({isOK: isOk, isValidMathExp: mathExp})
    }

    handleChange_IsValidMath = (event) => {
        this.setState({ isValidMathExp: event.target.value});
    }

    handleEquals = () => {
        if(this.isMathExpValid(this.state.isValidMathExp)){
            const list = this.addCalculationToList(this.state.isValidMathExp);
            this.setState({ fiveLastCalculations:list, isValidMathExp: eval(this.state.isValidMathExp)});
        }else{
            alert("Math expression is not valid.");
        }
    }

    addCalculationToList = (calculation) => {
        let list = this.state.fiveLastCalculations;
        if(this.state.fiveLastCalculations.length<5){            
            list.push(calculation);
        }else{
            list.shift();
            list.push(calculation);
        }
        return list;
    }

    render(){
        return(
            <div>
                <div>{this.state.fiveLastCalculations.map((el)=>{return (<div>{el}</div>)})}</div>
                <input id="input_isValidMath" 
                       value={this.state.isValidMathExp} 
                       onKeyUp={this.handleOnKeyUp_IsValidMath} 
                       onChange={this.handleChange_IsValidMath}
                       /*readOnly*/>
                </input>
                <span>{this.state.isOK}</span>
                <div>
                    <div>
                        <input type="button" value="/"
                        onMouseUp={this.handleOnMouseUp_IsValidMath}>
                        </input>
                        <input type="button" value="*" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="-" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="+" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="=" 
                        onMouseUp={this.handleEquals}></input>
                    </div>
                    <div>
                        <input type="button" value="7" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="8" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="9" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                    </div>
                    <div>
                        <input type="button" value="4" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="5" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="6" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                    </div>
                    <div>
                        <input type="button" value="1" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="2" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                        <input type="button" value="3" 
                        onMouseUp={this.handleOnMouseUp_IsValidMath}></input>
                    </div>
                </div>
            </div>
        );
    }
}export default ValidMathExp;
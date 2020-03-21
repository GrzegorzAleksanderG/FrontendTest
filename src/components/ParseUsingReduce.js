import React from 'react';

class ParseUsingReduce extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reducedObject: {},
            data : {
              0: {
                firstName: 'Jan',
                lastName: 'Kowalski',
                company: {
                  name: 'Industry LTD',
                  address: '20 Williams Circle',
                  countryCode: 'UK'
                }
              },
              1: {
                firstName: 'John',
                lastName: 'Smith',
                company: {
                  name: 'VxxonMobil',
                  address: '770 Cemetery Street',
                  countryCode: 'US'
                }
              },
              2: {
                firstName: 'Arnold',
                lastName: 'Blake',
                company: {
                  name: 'Washington Wizards',
                  address: '4 Old Brook Street',
                  countryCode: 'US'
                }
              },
              3: {
                firstName: 'Ann',
                lastName: 'Tayor',
                company: {
                  name: 'Ally Financial',
                  address: '9 Purple Finch Street',
                  countryCode: 'UK'
                }
              }
            }
        };
    }

    componentDidMount(){
      this.reduceFunction();
    }

    reduceFunction = () => {
         let arrayData = Object.entries(this.state.data); 
         let newArray = [];
         arrayData.reduce((prev, current)=>{
             let place = current[1].company.countryCode;
             if(newArray[place]){
              newArray[place].push(current[1]);
             }else{
              newArray[place] = [];
              newArray[place].push(current[1]);
             }
         },{});
         let obj = {...newArray}
        this.setState({reducedObject:obj});
    }

    render(){
        return (
          <>
            <br/><br/>Before:<br/>
            <div>{JSON.stringify(this.state.data)}</div>
            <br/><br/>After:<br/>
            <div>{JSON.stringify(this.state.reducedObject)}</div>
          </>
        );
    }

}export default ParseUsingReduce;
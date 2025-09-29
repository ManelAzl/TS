Checkpoint Building React Apps with TypeScript

CODE 1:

import React from 'react'; 

// STEP 1: Define TypeScript interface for component props
// This ensures type safety by specifying the expected prop types
interface GreetingProps {
  name: string; // 'name' prop is required and must be a string
}

// STEP 2: Apply the interface to the component using React.FC (Functional Component)
// React.FC<GreetingProps> provides type checking for props and return value
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;

CODE 2:

import React, { Component } from 'react'; 

// STEP 1: Define interface for component props
// In this case, no props are used, so we define an empty interface
interface CounterProps {
  // No props needed for this component, but interface is defined for future extensibility
}

// STEP 2: Define interface for component state
// This ensures type safety for the component's internal state
interface CounterState {
  count: number; // 'count' must be a number
}

// STEP 3: Extend Component with type parameters for props and state
// Component<CounterProps, CounterState> provides type checking for both props and state
class Counter extends Component<CounterProps, CounterState> {
  
  // STEP 4: Initialize state with proper typing
  // TypeScript now knows that state.count is a number
  state: CounterState = {
    count: 0
  };

  // STEP 5: Type the class method
  // Using arrow function to automatically bind 'this' context
  // Return type is void since it doesn't return anything
  increment = (): void => {
    // setState is now type-safe - it knows we're updating a number
    this.setState({ count: this.state.count + 1 }); 
  }; 

  // STEP 6: render() method implicitly returns React elements
  // TypeScript ensures we return valid JSX/React elements
  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
} 

export default Counter;
Website for React Hooks
https://react.dev/learn#using-hooks 
https://www.w3schools.com/react/react_hooks.asp

=====================================================================================================================================================
What is Hooke in React ?
Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Although Hooks generally replace class components.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

Note: Hooks will not work in React class components.

Custom Hooks
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.


========================================================================================================================================================

What is useState hook?

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

Example:
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type UserType = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
};

const findUserByName = (userName: UserType["name"], array: UserType[]) => {
  if (array.length === 0) return -1;
  for (let i = 0; i < array.length; i++) {
    if (userName === array[i].name) {
      return i;
    }
  }
  return -1;
};

// declaring the types for our state
export type UsersType = {
  users: UserType[];
};

const initialState: UsersType = {
  users: [
    { name: "Mate", email: "mate@matic", password: "mate", isLoggedIn: false },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
  reducers: {
    // 'The increment by amount' action here, has one job and that is to take whatever value is passed to it and add that to state.value.
    // The PayloadAction type here is used to declare the contents of `action.payload`
    /* incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }, */
    addUser: (state, action: PayloadAction<UserType>) => {
      /* const index = findProductInArray(action.payload, state.products);
      if (index === -1) { */
      state.users.push(action.payload);
      /* } else {
        state.products[index].amount += action.payload.amount;
      } */
    },
    loginUser: (
      state,
      action: PayloadAction<{ name: string; password: string }>
    ) => {
      const userIndex = findUserByName(action.payload.name, state.users);
      if (userIndex > -1) {
        if (state.users[userIndex].password === action.payload.password) {
          state.users[userIndex].isLoggedIn = true;
        }
      }
    },
    logoutUser: (state, action: PayloadAction<string>) => {
      const userIndex = findUserByName(action.payload, state.users);
      if (userIndex > -1) {
        state.users[userIndex].isLoggedIn = false;
      }
    },

    /* removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => {
        if (product.name !== action.payload) return product;

        if (product.name === action.payload && product.amount > 1) {
          product.amount--;
          return product;
        } else if (product.name === action.payload && product.amount === 1) {
        }
      });
    }, */
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  addUser,
  loginUser,
  logoutUser /* removeProduct */ /* incrementByAmount,  */,
} = usersSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const usersSelector = (state: RootState) => state.users.users;

// exporting the reducer here, as we need to add this to the store
export default usersSlice.reducer;

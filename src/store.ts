// src/store.ts
import {
  configureStore,
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";

// 상태 타입 정의
export type AppState = {
  count: number;
};

// 초기 상태 정의
const initialState: AppState = {
  count: 0,
};

export type userState = { name: string };

const initialUserState: userState = { name: "aaaa" };

// Slice 정의
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState as AppState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState as userState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.name = action.payload;
    },
  },
});

// Action 생성자 함수 추출
export const { increment, decrement } = counterSlice.actions;
export const { setName } = userSlice.actions;

// 리듀서 추출
const counterReducer = counterSlice.reducer;
const userReducer = userSlice.reducer;

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// 스토어 생성
const store = configureStore({
  reducer: rootReducer, // 여기에서 직접 리듀서를 전달합니다.
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

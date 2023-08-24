import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartproductReducer } from "../reducers/productReducer";
import { shippingAddressReducer } from "../reducers/addressReducer";
import { placeOrderReducer } from "../reducers/orderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // This will use local storage

const persistConfig = {
  key: "root", // key for the localStorage entry
  storage,
};

const shippingAddressPersistConfig = {
  key: "shippingAddress",
  storage,
};

const rootReducer = combineReducers({
  cartproduct: cartproductReducer,
  shippingAddress:shippingAddressReducer,
  placeOrder:placeOrderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store); // This will persist your Redux store

export { store, persistor };

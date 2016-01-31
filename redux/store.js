import { createStore } from 'redux'

export default function (reducer) {
    // Create a Redux store holding the state of your app.
    // Its API is { subscribe, dispatch, getState }.
    let store = createStore(reducer)

    // You can subscribe to the updates manually, or use bindings to your view layer.
    store.subscribe(() =>
      console.log(store.getState())
    )

    return store;

}

import { Provider } from "react-redux"
import { store } from "./store/store"

<Provider store={ store }>
</Provider>

export const ReduxRender = () => {
    return <Provider store={ store }>
    </Provider>
}
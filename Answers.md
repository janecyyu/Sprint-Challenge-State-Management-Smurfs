1. What problem does the context API help solve?
A: passing data will be easier and cleaner

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: 
*actions - preloading of information that send data from your application to your store.
*reducers - handle how the application's state changes
*store- bring actions and reducers together, like holding app state.
Why 'single source of truth': cause a single state tree makes it easier to debug or inspect an application, it also enables you to persist your app's state in development, for a faster development cycle.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Application state is global, and component state is local.
Use Application state when calling store, component state can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: Thunk allows us to write action creators. When an action creator returns a function, that function will get executed by the Redux Thunk.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API, cause it passes data easier!
import { useEffect, useState } from "react";

/*
You are correct that the `useEffect` hook with an empty dependency array (`[]`) will run only once after the initial render. However, the event listeners you are adding inside the `useEffect` hook are not directly dependent on the `isOnline` state.

In your custom hook, the event listeners are bound to the "online" and "offline" events of the `window` object. These events are not tied to the `isOnline` state variable; instead, they are triggered by the browser's network status changes.

When the browser detects that the internet connection status has changed (i.e., from online to offline or vice versa), it will fire the corresponding "online" or "offline" event. These events are external to React's state management, and they will trigger the event handler functions you provided, updating the `isOnline` state variable accordingly.

The `isOnline` state is initialized as `true`, and your event listeners will update it when the "online" or "offline" events occur. Since these events are external to React's rendering cycle, they can update the state variable even if the `useEffect` hook has already run and won't run again due to the empty dependency array.

So, your custom hook will correctly keep track of the online/offline status by updating the `isOnline` state variable whenever the "online" or "offline" events are triggered, even if the `useEffect` hook has already executed.
*/

/* 
State Change and Re-render: Whenever you call setIsOnline to update the state with a new value, React will schedule a re-render of the component using the custom hook. This is the core mechanism of how React components respond to state changes and update the UI.

When the state is updated using setIsOnline, it triggers a re-render of the component that called the useOnline hook, not the useOnline hook itself.
*/

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;

/* 
Let's break down the process step by step:

The component calls the useOnline hook to get the isOnline state value.

The useOnline hook sets up event listeners during its initial execution to listen for online/offline events.

When an online/offline event occurs in the browser, the corresponding event listener function inside the useOnline hook is executed.

Inside the event listener function, you call setIsOnline to update the state with a new value (true for "online" event and false for "offline" event).

When setIsOnline is called, React schedules a re-render of the component that called the useOnline hook (not the useOnline hook itself).

After the component re-renders, the useOnline hook is called again, and the whole process starts over.
*/

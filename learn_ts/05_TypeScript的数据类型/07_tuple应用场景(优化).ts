function useState<T>(state: T) {
  let currentState = state;
  const changeState = (newState: any) => {
    currentState = newState;
  };
  // const arr:any[] = [currentState,changeState];
  const tuple: [T, (newState: T) => void] = [currentState, changeState];
  return tuple;
}
const [counter, setCounter] = useState(10);
setCounter(10);
const [title, setTitle] = useState("ABC");

import tw from "tailwind-styled-components";
import AddWorker from './Components/Workers/AddWorker';

function App() {

  const Wrapper = tw.div`
    flex
    items-start
    justify-center
    bg-slate-300
    min-h-screen
    p-4
    gap-4
    
`
  return (
    <>
      <Wrapper>
        <AddWorker />
      </Wrapper>
    </>
  );
}

export default App;


import Message from "./components/Message"

const App = () => {

  const text = "Ya Ibrahim Rani bech nkwair bik!"


  return (
    <div>
      <Message content={text} />
      <Message content="I love Vienna!" />
      <Message content="🔦" />
    </div>

  )
}

export default App
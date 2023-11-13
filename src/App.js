import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import SignIn from "./pages/login/TelaLogin";
import ErrorRadios from "./pages/quiz/Question";


function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <ErrorRadios />
      <ListarTarefa />

    </div>
  );
}

export default App;

import BooksAndServices from "./components/books&services";
import AppHeader from "./components/header";
import AppProfile from "./components/profile";

function App() {
  return (
    <div className="">
      <header>
        <AppHeader />
      </header>
      <content>
        <AppProfile />
        <BooksAndServices />
      </content>
    </div>
  );
}

export default App;

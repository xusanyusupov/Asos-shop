import TopBar from "./components/TopBar"
import SearchBar from "./components/SearchBar"

const index = () => {
  return (
    <>
    <header>
      <div className="relative">
        <TopBar/>
        <SearchBar/>
     </div>
    </header>
    </>
  )
}

export default index
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [items,setItems] = useState([])
  useEffect(()=> {
    const fetchRepos = async() => {
      const res = await fetch('https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc')
      const data = await res.json()
      setItems(data.items)
    }
    fetchRepos()
  }, [])

  return (
    <>
    {!items ? <Loading/> : (
      <section className='title'>
        <div  className='title-name'>
          <h1>
            Trending repos
          </h1>
        </div>
        <div className='repos'>
          {items.map((items)=> (
            <Profile key={items.id} {...items}/>
          ))}
          
        </div>
      </section>
    ) }
    </>
  );
}

export default App;

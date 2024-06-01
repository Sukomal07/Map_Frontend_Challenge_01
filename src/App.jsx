import data from './data/cardData'
import Card from './components/Card'
import Skeleton from './components/Skeleton'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='h-screen flex justify-center items-center overflow-hidden px-8'>
      <div className='items-center flex overflow-x-scroll gap-6 pb-5'>
        {loading ? (
          Array.from({ length: data.length }).map((_, index) => <Skeleton key={index} />)
        ) : (
          data.map(card => (
            <Card
              key={card.id}
              image={card.picture}
              title={card.title}
              description={card.description}
              tag={card.tag}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App

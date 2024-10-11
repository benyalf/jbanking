import HeaderBox from '@/app/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '../components/TotalBalanceBox';

const Home = () => {

  const loggedIn = {
    firstName: "Joselin"
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Bienvenido"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces  and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.53}

          />
        </header>



      </div>
    </section>
  )
}

export default Home
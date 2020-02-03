import React from 'react';
import './index.css';
import Header from './components/header'
import Us from './components/us'
import Work from './components/work'
import Additional from './components/additional'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <Us title="WHY CHOOSE US" category="us"/>
      <Work />
      <Us title="OUR CLIENTS" category="clients"/>
      <Additional
        category="additional"
        title="ADDITIONAL SERVICES"
        description="At Eagle Sports we go beyond just apparel. We offer a wider range of options for your school, business,  organization. We are also always open to new challenges. If your needs are not listed below, please contact us and let us see what we can do for you."
      />
      <Us title="OUR BRANDS" category="brands"/>
      <Additional
        category="contact"
        title="CONTACT"
        description="If you have any additional questions that you could not find here or would like to request a quote for you next project, please feel free to contact us using the form below."
      />
      <Footer />
    </div>
  )
}

export default App;
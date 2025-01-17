import React from 'react'
import Result from './Result'
import Cards from './Cards'
import "./MockTest.css"
import ImprovementsCard from '../component/ImprovementsCard/ImprovementsCard'
import ApproachDataCard from '../component/ApproachDataCard/ApproachDataCard'
import SuggestionCard from '../component/Suggestions/SuggestionCard'
import ResponseTimeCard from '../component/ImprovementsCard/ResponseTimeCard/ResponseTimeCard'
import GraphContainer from '../component/Graphs/GraphContainer'


export default function MockTest() {
  return (
    <div className='mocktest'>
      <Result/>
      <div className="compare">
        <div className="card01">
        <Cards/>
        </div>
        <div className="card02">
        <Cards/>
        </div>
        <div className="card03">
        <Cards/>
        </div>
      </div>
      <div className="app-container">
      <ImprovementsCard />
      <ResponseTimeCard/>
      <ApproachDataCard />
      <SuggestionCard/>
    </div>
    <GraphContainer/>
    </div>
    
  )
}

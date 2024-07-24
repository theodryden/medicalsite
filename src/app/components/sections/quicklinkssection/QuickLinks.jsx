import React from 'react'
import QuickLinksButton from '../../buttons/quicklinksbutton/QuickLinksButton'
import ConditionDirectoryCard from '../../cards/conditiondirectorycard/ConditionDirectoryCard'



const QuickLinks = () => {
  return (
    <div className="quick-links-container">
     <QuickLinksButton information='How to get a referral'/>
     <QuickLinksButton information='Check my symptoms'/>
     <QuickLinksButton information='Find out about the location'/>
     <QuickLinksButton information='About my surgery'/>
     <QuickLinksButton information='After my surgery'/>
     <QuickLinksButton information='Help a friend or family member'/>
  
    <ConditionDirectoryCard />

    </div>
  )
}

export default QuickLinks

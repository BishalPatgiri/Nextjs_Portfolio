import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const ContributionPage = () => {
  return (
    <div className="h-full pt-10">
      <div>
        <p className="font-bold text-2xl max-sm:ml-4">My CONTRIBUTIONS in GITHUB</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-center max-sm:gap-0 max-sm:mt-2">
      <GitHubCalendar username="BishalPatgiri" />
      </div>
    </div>
  )
}

export default ContributionPage
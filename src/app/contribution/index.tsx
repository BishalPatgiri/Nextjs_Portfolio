"use client"
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const ContributionPage = () => {
  return (
    <div className="h-full px-4">
      <div>
        <p className="font-bold text-2xl max-sm:text-xl">My GITHUB CONTRIBUTIONS</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-center max-sm:gap-0 max-sm:mt-4">
      <GitHubCalendar username="BishalPatgiri"/>
      </div>
    </div>
  )
}

export default ContributionPage
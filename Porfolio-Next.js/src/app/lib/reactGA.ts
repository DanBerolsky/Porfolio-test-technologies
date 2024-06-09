import ReactGA from 'react-ga4'

// info-card
export function contactGithubEvent () {
  ReactGA.event({
    category: 'contactLinkGithub',
    action: 'contactLinkGithub'
  })
}

export function contactLinkedinEvent () {
  ReactGA.event({
    category: 'contactLinkLinkedin',
    action: 'contactLinkLinkedin'
  })
}

export function contactGmailEvent () {
  ReactGA.event({
    category: 'contactLinkGmail',
    action: 'contactLink_Gmail'
  })
}

// proyect-card
export function itemProyectEvent (repoName: string) {
  ReactGA.event({
    category: 'itemProyectEvent' + repoName,
    action: 'itemProyectEvent' + repoName,
    label: repoName
  })
}

// swiper-card2

export function swiperCardEvent () {
  ReactGA.event({
    category: 'swiperCardEvent',
    action: 'swiperCardEvent'
  })
}

// avatar-card

export function downloadResume () {
  ReactGA.event({
    category: 'downloadResume',
    action: 'BtnDownloadResume'
  })
}

// darkmodebutton

export function togglethemeEvent () {
  ReactGA.event({
    category: 'Dark_Mode',
    action: 'toggle_Theme'
  })
}

// proyects-card

export function seeAllEvent () {
  ReactGA.event({
    category: 'seeAllEvent',
    action: 'seeAllEvent'
  })
}

import React from 'react'

const Differentcontext = React.createContext({
  active: 'Home',
  backColor: false,
  savedbutton: false,
  saveddata: [],
  togglebackground: () => {},
  clickingonsave: () => {},
  changeTab: () => {},
})

export default Differentcontext

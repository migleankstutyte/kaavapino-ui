import React, { Component } from 'react'
import { Navigation, IconSignout } from 'hds-react'
import { ReactComponent as HistogramMobileIcon } from '../../assets/histogram-mobile.svg'
import { ReactComponent as ChecklistMobile } from '../../assets/checklist-mobile.svg'
import { ReactComponent as PagesMobile } from '../../assets/pages-mobile.svg'

import { withRouter } from 'react-router-dom'

class Header extends Component {

  navigateToProjects = () => {
      this.props.history.push( '../projects')
  }

  navigateToHome = () => {
    this.props.history.push( '../')
}

navigateToReports = () => {
    this.props.history.push( '../reports')
}
  render() {
    return (
      <>
        <Navigation
          logoLanguage="fi"
          menuToggleAriaLabel="Valikko"
          searchLabel="Search"
          searchPlaceholder="Search page"
          skipTo="#content"
          skipToContentLabel="Siirry sivun pääsisältöön"
          theme="light"
          title="Helsingin kaupunki"
          titleAriaLabel="Helsinki: Helsingin kaupunki"
          titleUrl="./"
          className='header'
        >
          <Navigation.Row variant="inline">
            <Navigation.Item
              as="a"
              label="Yleisnäkymä"
              onClick={this.navigateToHome}
              icon={<HistogramMobileIcon />}
            />
            <Navigation.Item
              as="a"
              label="Projektit"
              onClick={this.navigateToProjects}
              icon={<ChecklistMobile />}
            />
            <Navigation.Item
              as="a"
              label="Raportit"
              icon={<PagesMobile />}
              onClick={this.navigateToReports}
            />
          </Navigation.Row>
          <Navigation.Actions>
            <Navigation.User
              buttonAriaLabel="Käyttäjä: John Doe"
              label="Kirjaudu ulos"
              userName="John Doe"
            >
              <Navigation.Item
                as="a"
                href="/Logout"
                icon={<IconSignout aria-hidden />}
                label="Kirjaudu ulos"
                variant="supplementary"
              />
            </Navigation.User>
          </Navigation.Actions>
        </Navigation>
      </>
    )
  }
}

export default withRouter(Header)

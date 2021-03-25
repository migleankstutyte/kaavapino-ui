import React from 'react'
import { Navigation, IconSignout } from 'hds-react'
import { ReactComponent as HistogramMobileIcon } from '../../assets/histogram-mobile.svg'
import { ReactComponent as ChecklistMobile } from '../../assets/checklist-mobile.svg'
import { ReactComponent as PagesMobile } from '../../assets/pages-mobile.svg'

import { withRouter } from 'react-router-dom'

const Header = props =>  {
 const navigateToProjects = () => {
    props.history.push('../projects')
  }

 const navigateToHome = () => {
    props.history.push('../')
  }

  const navigateToReports = () => {
    props.history.push('../reports')
  }

  const logout = () => {
    props.history.push('../Logout')
  }
  const { user } = props

    return (
      <Navigation
        logoLanguage="fi"
        menuToggleAriaLabel="Valikko"
        searchLabel="Search"
        searchPlaceholder="Search page"
        skipTo="#content"
        skipToContentLabel="Siirry sivun pääsisältöön"
        title="Kaavapino"
        titleAriaLabel="Helsinki: Kaavapino"
        titleUrl="./"
        className="header"
      >
        <Navigation.Row variant="inline">
          <Navigation.Item
            as="a"
            label="Yleisnäkymä"
            onClick={navigateToHome}
            icon={<HistogramMobileIcon />}
          />
          <Navigation.Item
            as="a"
            label="Projektit"
            onClick={navigateToProjects}
            icon={<ChecklistMobile />}
          />
          <Navigation.Item
            as="a"
            label="Raportit"
            icon={<PagesMobile />}
            onClick={navigateToReports}
          />
        </Navigation.Row>
        <Navigation.Actions>
          <Navigation.User authenticated={true}>
            <Navigation.Item label={user.profile.name} href="/" target="_blank" variant="primary" />
            <Navigation.Item
              href="#"
              icon={<IconSignout aria-hidden />}
              label="Sign out"
              onClick={logout}
              variant="supplementary"
            />
          </Navigation.User>
        </Navigation.Actions>
      </Navigation>
    )
  }

export default withRouter(Header)

import ChatBubble from '@material-ui/icons/ChatBubble'
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode'
import DaschboardIcon from '@material-ui/icons/Dashboard'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FilterList from '@material-ui/icons/FilterList'
import GetApp from '@material-ui/icons/GetApp'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import LanguageIcon from '@material-ui/icons/Language'
import LockIcon from '@material-ui/icons/Lock'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import QuestionAnswer from '@material-ui/icons/QuestionAnswer'
import React from 'react'
import SettingsIcon from '@material-ui/icons/SettingsApplications'
import StyleIcon from '@material-ui/icons/Style'
import Tab from '@material-ui/icons/Tab'
import ViewList from '@material-ui/icons/ViewList'
import Web from '@material-ui/icons/Web'
import allLocales from './locales'
import allThemes from './themes'

const getMenuItems = (props) => {
  const {
    intl,
    updateLocale,
    locale,
    menuContext,
    themeContext,
    a2HSContext,
    auth: authData,
  } = props
  const { isDesktop, isAuthMenuOpen, useMiniMode, setMiniMode } = menuContext
  const { themeID, setThemeID } = themeContext
  const { auth, setAuth } = authData
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext

  const localeItems = allLocales.map((l) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
      },
      leftIcon: <LanguageIcon />,
    }
  })

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  if (isAuthMenuOpen || !isAuthorised) {
    return [
      {
        value: '/signin',
        onClick: isAuthorised
          ? () => {
              setAuth({ isAuthenticated: false })
            }
          : () => {},
        visible: true,
        primaryText: isAuthorised
          ? intl.formatMessage({ id: 'sign_out' })
          : intl.formatMessage({ id: 'sign_in' }),
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ]
  }
  return [
    {
      value: '/home',
      visible: isAuthorised,
      primaryText: intl.formatMessage({ id: 'home' }),
      leftIcon: <DaschboardIcon />,
    },

    {
      primaryText: intl.formatMessage({ id: 'demos', defaultMessage: 'Demos' }),
      primaryTogglesNestedList: true,
      leftIcon: <Web />,
      nestedItems: [
        {
          value: '/dialog_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'dialog_demo',
            defaultMessage: 'Dialog',
          }),
          leftIcon: <ChatBubble />,
        },
        {
          value: '/toast_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'toast_demo',
            defaultMessage: 'Toast',
          }),
          leftIcon: <QuestionAnswer />,
        },
        {
          value: '/filter_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'filter_demo',
            defaultMessage: 'Filter',
          }),
          leftIcon: <FilterList />,
        },
        {
          value: '/list_page_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'list_page_demo_menu',
            defaultMessage: 'List Page',
          }),
          leftIcon: <ViewList />,
        },
        {
          value: '/tabs_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'tabs_demo',
            defaultMessage: 'Tabs Page',
          }),
          leftIcon: <Tab />,
        },
      ],
    },
    {
      value: '/about',
      visible: true,
      primaryText: intl.formatMessage({ id: 'about' }),
      leftIcon: <InfoOutlined />,
    },
    { divider: true },
    {
      primaryText: intl.formatMessage({ id: 'settings' }),
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          primaryText: intl.formatMessage({ id: 'theme' }),
          secondaryText: intl.formatMessage({ id: themeID }),
          primaryTogglesNestedList: true,
          leftIcon: <StyleIcon />,
          nestedItems: themeItems,
        },
        {
          primaryText: intl.formatMessage({ id: 'language' }),
          secondaryText: intl.formatMessage({ id: locale }),
          primaryTogglesNestedList: true,
          leftIcon: <LanguageIcon />,
          nestedItems: localeItems,
        },
        {
          visible: isDesktop ? true : false,
          onClick: () => {
            setMiniMode(!useMiniMode)
          },
          primaryText: intl.formatMessage({
            id: 'menu_mini_mode',
          }),
          leftIcon: useMiniMode ? <MenuOpenIcon /> : <ChromeReaderMode />,
        },
      ],
    },
    {
      value: null,
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt()
      },
      primaryText: intl.formatMessage({
        id: 'install',
        defaultMessage: 'Install',
      }),
      leftIcon: <GetApp />,
    },
  ]
}
export default getMenuItems

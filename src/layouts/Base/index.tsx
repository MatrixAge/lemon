import React, { Fragment } from 'react'
import { withRouter, connect, setLocale, useIntl } from 'umi'
import styles from './index.less'

const Index = ( props: any ) => {
      const { app, children, location: { pathname } } = props
      const { formatMessage } = useIntl()

      const onChangeLanguage = ( e ) => {
            const { key } = e.target.dataset

            if ( !key ) return

            switch ( key ) {
                  case 'cn':
                        setLocale( 'zh-CN', false )
                        break
                  case 'en':
                        setLocale( 'en-US', false )
                        break
            }
      }

      const onChangeTheme = ( e ) => {
            const { key } = e.target.dataset

            if ( !key ) return

            switch ( key ) {
                  case 'default':
                        document.body.style.setProperty( '--primary-color', 'blue' )

                        break
                  case 'dark':
                        document.body.style.setProperty( '--primary-color', 'red' )

                        break
            }
      }


      return (
            <Fragment>
                  <div className={ styles.test }>test</div>
                  <span>{ formatMessage( { id: 'WELCOME' } ) }</span>
                  <div className="flex" onClick={ onChangeLanguage }>
                        <button data-key='en'>EN</button>
                        <button data-key='cn'>CN</button>
                  </div>
                  <div className="flex" onClick={ onChangeTheme }>
                        <button data-key='default'>default</button>
                        <button data-key='dark'>dark</button>
                  </div>
                  { children }
            </Fragment>
      )
}

export default withRouter( connect( ( { app }: any ) => ( { app } ) )( Index ) )

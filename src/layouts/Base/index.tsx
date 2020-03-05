import React, { Fragment } from 'react'
import { withRouter, connect, setLocale, useIntl } from 'umi'
import config from '@/config/site'

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

      return (
            <Fragment>
                  <span>{ formatMessage( { id: 'WELCOME' } ) }</span>
                  <div className="flex" onClick={ onChangeLanguage }>
                        <button data-key='en'>EN</button>
                        <button data-key='cn'>CN</button>
                  </div>
                  { children }
            </Fragment>
      )
}

export default withRouter( connect( ( { app }: any ) => ( { app } ) )( Index ) )

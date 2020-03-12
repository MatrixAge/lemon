import React from 'react'

export const FilterItems = ({ children }: any) => (
	<div className='filter_items flex flex_wrap'>{children}</div>
)
export const OptionItems = ({ children }: any) => (
	<div className='option_items flex justify_between'>
		<div className='flex'>{children}</div>
	</div>
)
export const FilterItem = ({ children }: any) => <div className='filter_item'>{children}</div>
export const OptionItem = ({ children }: any) => <div className='option_item'>{children}</div>

class Index extends React.PureComponent {
	static FilterItems = FilterItems
	static OptionItems = OptionItems

	render () {
		return (
			<div className='filter w_100 flex flex_wrap'>
                        {this.props.children}
			</div>
		)
	}
}

export default Index

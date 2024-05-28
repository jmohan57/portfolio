import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'

import colors 		from '../../content/case-studies/_colors.json'
import settings 	from '../../content/_settings.json'
import Technical 	from '../../components/sections/index/technical'

//
export default function Activity({}) {
	return (
		<>	
			<Color colors={colors} />
			<Technical />
		</>
	)
}
import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'
// import About 		from '../../components/sections/index/about'
import AboutSection from '../../components/sections/index/about'

import colors 		from '../../content/case-studies/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function About({}) {
	return (
		<>	
			<Color colors={colors} />
			<AboutSection />
		</>
	)
}
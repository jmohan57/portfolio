// Core packages
import Image from 'next/image'
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	const SubRow = ((itm1, itm2) => (
		<Row> 
			<Col>{item1}</Col> 
			<Col>{itm2}</Col> 
		</Row>
	))

	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Asllan Zaimi"
					preTitle="Researcher of naval sciences, ancient culture and the universe"
					subTitle="The author of 17 scientific and academic books, over 30 studies and 13 scientific articles for planet Earth and the universe, The author was born on March 12, 1948 in Dobrushë, Skrapar district."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/author/AuthorPicture5.jpg" alt="Asllan Zaimi"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Completed his university studies"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In 1980, he completed his university studies in science politics and graduated in philosophy and again took excellent results (Gold Medal).
							He speaks several foreign languages. Speaks and writes English fluently, also speaks good Italian and sufficient Russian (spoken and written)."
						/>
						<BadgesBlock 
							title="Mechanical Engineering" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="During the years 1971-1972 he studied Mechanical Engineering, again with excellent results, but by order of high authorities from the party of the former communist regime, was arbitrarily denied the right to further studies in this branch."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]
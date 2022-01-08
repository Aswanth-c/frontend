import Link from 'next/link'

const text = 'Hyperscale DAO helps you build and grow your project.'
const links = ['https://airtable.com/shrLFCXD7BQXUg97K']

const Section2 = () => (
	<div className="bg-[#160A2F] px-10">
		<div className="bg-[#FEDB9E] py-24 rounded">
			<div className="flex flex-col justify-center items-center">
				<img src="/section2/join.svg" />
				<div className="text-xl mt-4">{text}</div>
				<div className="flex justify-evenly my-16 px-8">
					<img src="/section2/card1.svg" className="w-3/12" />
					<img src="/section2/card2.svg" className="w-3/12" />
					<img src="/section2/card3.svg" className="w-3/12" />
				</div>
				<Link href={links[0]}>
					<a target="_blank">
						<img src="/section2/btn.svg" width={220} />
					</a>
				</Link>
			</div>
		</div>
	</div>
)

export default Section2

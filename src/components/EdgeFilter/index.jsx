import React from 'react';
import { GiAcrobatic, GiBrain, GiMagicPalm, GiMuscleUp, GiHealthPotion } from 'react-icons/gi';

const EdgeFilter = ({ filter, sorter, allSkills }) => {

	const [visibility, setVisibility] = React.useState(true);
	const toggleFilters = () => {
		return setVisibility(!visibility);
	}

	return (
		<>
			<div className="flex items-center justify-center pb-2">
				<button
					className="bg-green-900 text-green-200 px-4 py-2 border border-green-700"
					onClick={toggleFilters}>
					Filter
      			</button>
			</div>
			{/* <form className={`px-4 py-2 mx-1 mb-2 bg-orange-200 border-2 border-red-900 rounded ${ visibility ? 'md:flex md:justify-around lg:max-3' : 'hidden' }`}> */}
			<form className={`px-4 py-2 mx-1 mb-2 bg-orange-200 border-2 border-red-900 rounded ${visibility ? 'justify-around' : 'hidden'}`}>
				<div className="md:flex md:flex-wrap md:justify-center">

					<div className="px-3">
						<h3 className="font-bold text-xl">Attributes</h3>
						<hr className="border-red-900 border-2 mb-2" />

						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									value="Agility"
									checked={filter === 'Agility'}
									onChange={sorter}
									className="text-red-900 form-checkbox"
								/>
								<span className="mx-2 text-sm font-bold">Agility</span><GiAcrobatic />
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									value="Smarts"
									checked={filter === 'Smarts'}
									onChange={sorter}
									className="text-red-900 form-checkbox"
								/>
								<span className="mx-2 text-sm font-bold">Smarts</span><GiBrain />
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									value="Spirit"
									checked={filter === 'Spirit'}
									onChange={sorter}
									className="text-red-900 form-checkbox"
								/>
								<span className="mx-2 text-sm font-bold">Spirit</span><GiMagicPalm />
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									value="Strength"
									checked={filter === 'Strength'}
									onChange={sorter}
									className="text-red-900 form-checkbox"
								/>
								<span className="mx-2 text-sm font-bold">Strength</span><GiMuscleUp />
							</label>
						</div>
						<div>
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									value="Vigor"
									checked={filter === 'Vigor'}
									onChange={sorter}
									className="text-red-900 form-checkbox"
								/>
								<span className="mx-2 text-sm font-bold">Vigor</span><GiHealthPotion />
							</label>
						</div>
					</div>

					{
						allSkills.map((v, i) => (
							<div key={i} className="px-3">
								<h3 className="font-bold text-xl">{v.attribute}</h3>
								<hr className="border-red-900 border-2 mb-2" />
								{ v.skills.map((skill, i) => (
									<div key={i}>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												value={skill}
												checked={filter === skill}
												onChange={sorter}
												className="text-red-900 form-checkbox"
											/>
											<span className="mx-2 text-sm font-bold">{skill}</span>
										</label>
									</div>
								))}
							</div>
						))
					}

				</div>
			</form>
		</>
	);
};

export default EdgeFilter;

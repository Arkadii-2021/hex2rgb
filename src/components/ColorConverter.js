import {useState} from 'react'

function getRgbFromNex(hex) {
	let str = hex.slice(1)
	return `rgb(${parseInt(str.slice(0, 2), 16)}, ${parseInt(str.slice(2, 4), 16)}, ${parseInt(str.slice(4), 16)}) `
}

export default function ColorConverter() {
	const [hex, setHex] = useState({name: '#ffffff'});
	const [rgb, setRgb] = useState('rgb(255, 255, 255)');
	
	const handleSubmit = (evt) => {
		evt.preventDefault();
		/#[a-f0-9]{5}/.test(hex.name) && (hex.name.length <= 7) ? setRgb(() => getRgbFromNex(hex.name)) : setRgb(() => 'Ошибка');
	}
		
	const inputColorHEX = ({target}) => {
		const {name, value} = target;
		setHex(prevForm => ({...prevForm, [name]: value}));
	}
			
	return (
	<div className="backround_dom" style={{backgroundColor: rgb}}>
		<form onSubmit={handleSubmit}>
			<input className="rgb_to_hex__field" id='hex' name='name' value={hex.name} onChange={inputColorHEX} />
			<div className="rgb_to_hex__field" style={{backgroundColor: 'white'}}>{rgb}</div>
		</form>
	</div>
	)
	
}

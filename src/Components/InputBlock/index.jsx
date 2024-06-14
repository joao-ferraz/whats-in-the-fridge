import * as C from './styles';
import {useState, KeyboardEvent} from 'react';

export const InputBlock = (prop) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e) => {
        if(e.code === 'Enter' && inputText !== ''){
            prop.onEnter(inputText);
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Ingredient"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            ></input>
        </C.Container>
    );
}
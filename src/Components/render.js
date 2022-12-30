import React from 'react';
import Group from './Group';
import Input from './Input';
import Radio from './Radio'
import Select from './Select';
import Switch from './Switch';
import Ignore from './Ignore';

function render(item)
    {
        const Component_name = item.uiType;
        if ( Component_name==='Select')
            return <Select obj={item}/>
        else if ( Component_name==='Input')
            return <Input obj={item} />
        else if ( Component_name==='Radio')
            return <Radio obj={item} />
        else if ( Component_name==='Group')
            return <Group obj={item} />
        else if ( Component_name==='Switch')
            return <Switch obj={item} />
        else
            return <Ignore obj={item} />
    }

export default render
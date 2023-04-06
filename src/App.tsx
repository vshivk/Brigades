import React, {FC, useState} from 'react';
import FiltersList from "./components/filters/filters-list";
import BrigadesList from "./components/brigades/brigades-list";

const App: FC = () => {
    const [filterConnectionValue, setFilterConnectionValue] = useState<string>('');
    const [filterDepartmentValue, setFilterDepartmentValue] = useState<string>('');

    return (
        <div className="App">
            <FiltersList
                setFilterConnectionValue={setFilterConnectionValue}
                setFilterDepartmentValue={setFilterDepartmentValue}
            />
            <BrigadesList
                filterConnectionValue={filterConnectionValue}
                filterDepartmentValue={filterDepartmentValue}
            />
        </div>
    );
}

export default App;

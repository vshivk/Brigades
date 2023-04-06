import React, {FC, useState} from 'react';
import FiltersList from "./components/filters/filters-list";
import BrigadesList from "./components/brigades/brigades-list";

const App: FC = () => {
    const [filterValue, setFilterValue] = useState<string>('');
    const [filterDepartmentValue, setFilterDepartmentValue] = useState<string>('');

    return (
        <div className="App">
            <FiltersList
                setFilterValue={setFilterValue}
                setFilterDepartmentValue={setFilterDepartmentValue}
            />
            <BrigadesList
                filterValue={filterValue}
                filterDepartmentValue={filterDepartmentValue}
            />
        </div>
    );
}

export default App;

import React, {FC} from 'react';
import FiltersList from "./components/filters/filters-list";
import BrigadesList from "./components/brigades/brigades-list";

const App: FC = () => {
    return (
        <div className="App">
            <FiltersList/>
            <BrigadesList/>
        </div>
    );
}

export default App;

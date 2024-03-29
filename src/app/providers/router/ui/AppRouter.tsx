import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from "../../../../widgets/PageLoader";
import {routeConfig} from "../routeConfig/routeConfig";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader/>}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;

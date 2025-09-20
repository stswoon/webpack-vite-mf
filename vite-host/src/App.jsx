// import WebpackMf from 'webpackMfApp/WebpackMf';

import React, {Suspense} from "react";

const ViteMf = React.lazy(() => import("remoteViteMf/vite-mf"));

function App() {
    return (
        <div className="vite">
            <h1>Vite Host React App</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ViteMf/>
            </Suspense>
            {/*<WebpackMf/>*/}
        </div>
    );
}

export default App;

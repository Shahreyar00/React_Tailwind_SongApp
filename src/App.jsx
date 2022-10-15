import React from 'react';
import { useSelector } from 'react-redux';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

import { createBrowserRouter, Outlet, RouterProvider, Route, createRoutesFromElements,  } from "react-router-dom";

// For REACT-ROUTER-DOM version 6.4.0, we can creates routes using plain objects as well as jsx 

const Layout = () => {
    return(
        <>
            <div className="relative flex">
                <Sidebar />
                <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
                    <Searchbar />
                    <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                        <div className="flex-1 h-fit pb-40">
                            <Outlet />
                        </div>
                        <div className="xl:sticky relative top-0 h-fit">
                            <TopPlay />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} >
                <Route index element={<Discover />} />
                <Route path="top-artists" element={<TopArtists />} />
                <Route path="top-charts" element={<TopCharts />} />
                <Route path="around-you" element={<AroundYou />} />
                <Route path="artists/:id" element={<ArtistDetails />} />
                <Route path="songs/:songid" element={<SongDetails />} />
                <Route path="search/:searchTerm" element={<Search />} />
            </Route>
        </>
    )
)

const App = () => {
    const { activeSong } = useSelector((state) => state.player);

    return (
        <>
            <RouterProvider router={router} />
            {activeSong?.title && (
                <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                    <MusicPlayer />
                </div>
            )}
        </>
    )
}

export default App


// BELOW IS THE IMPLEMENTATION USING "REACT-ROUTER-DOM - 6.3.0"
// If you are using version 6.3.0 then please add Router in the src index file.

// import { useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
// import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
 
// const App = () => {
//     const { activeSong } = useSelector((state) => state.player);

//     return (
//         <div className="relative flex">
//             <Sidebar />
//             <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
//                 <Searchbar />

//                 <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
//                     <div className="flex-1 h-fit pb-40">
//                         <Routes>
//                             <Route path="/" element={<Discover />} />
//                             <Route path="/top-artists" element={<TopArtists />} />
//                             <Route path="/top-charts" element={<TopCharts />} />
//                             <Route path="/around-you" element={<AroundYou />} />
//                             <Route path="/artists/:id" element={<ArtistDetails />} />
//                             <Route path="/songs/:songid" element={<SongDetails />} />
//                             <Route path="/search/:searchTerm" element={<Search />} />
//                         </Routes>
//                     </div>
//                     <div className="xl:sticky relative top-0 h-fit">
//                         <TopPlay />
//                     </div>
//                 </div>
//             </div>

//             {activeSong?.title && (
//                 <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
//                     <MusicPlayer />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Menu } from './menu/MenuPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout.jsx';
import { Logowanie } from './logowanie/logowaniePage.jsx';
import { Furniture } from './furniture/furniturePage.jsx';
import { LayoutKawa } from './layoutKawa/layoutKawa.jsx';
import { HerbataSklep } from './herbataSklep/herbataSklepPage.jsx';
import { KawaSklep } from './kawaSklep/kawaSklepPage.jsx';
import { CzekoladaSklep } from './czekoladaSklep/czekoladaSklepPage.jsx';
import { WyprzedazSklep } from './wyprzedazSklep/wyprzedazSklepPage.jsx';
import { Koszyk } from './koszyk/koszykPage.jsx';
import { Konto } from './konto/kontoPage.jsx';

   //const router = createBrowserRouter([
//    {
//        path: "/", // Przyk³ad: Zmieñ na "/app" jeœli chcesz, ¿eby komponent App renderowa³ siê na œcie¿ce '/app'
//        element: <Menu />,
//    },
//    {
//        path: "/menu", // Przyk³ad: Zmieñ na "/menu" jeœli chcesz, ¿eby komponent Menu renderowa³ siê na œcie¿ce '/menu'
//        element: <Menu />,
//    },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< LayoutKawa />}>
                    <Route index element={<Furniture />} />
                </Route>
                <Route path='/Menu' element={< Layout />}>
                    <Route index element={<Menu />} />
                </Route>
                <Route path='/logowanie' element={< LayoutKawa />}>
                    <Route index element={<Logowanie />} />
                </Route>
                <Route path='/furniture' element={< LayoutKawa />}>
                    <Route index element={<Furniture />} />
                </Route>
                <Route path='/kawaSklep' element={< LayoutKawa />}>
                    <Route index element={<KawaSklep />} />
                </Route>
                <Route path='/herbataSklep' element={< LayoutKawa />}>
                    <Route index element={<HerbataSklep />} />
                </Route>
                <Route path='/czekoladaSklep' element={< LayoutKawa />}>
                    <Route index element={<CzekoladaSklep />} />
                </Route>
                <Route path='/wyprzedazSklep' element={< LayoutKawa />}>
                    <Route index element={<WyprzedazSklep />} />
                </Route>
                <Route path='/koszyk' element={< LayoutKawa />}>
                    <Route index element={<Koszyk />} />
                </Route>
                <Route path='/konto' element={< LayoutKawa />}>
                    <Route index element={<Konto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

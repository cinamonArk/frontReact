import { Routes, Route } from "react-router-dom"

import { Menu } from "../componets/common/Menu/Menu"
import { Home } from "../componets/pages/Home/Home"
import { Usuarios } from "../componets/pages/Usuarios/Usuarios"

export function Rutas() {
    return (
    <>
    <Menu />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
    </>
    )
}
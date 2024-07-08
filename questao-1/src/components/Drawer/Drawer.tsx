interface ICustomDrawer {
    direction: 'left' | 'right'
    children: React.ReactNode
}

export interface IDrawerController {
    isDrawerOpen: boolean
    onDrawerClose: VoidFunction
}

import Drawer from "react-modern-drawer"
import 'react-modern-drawer/dist/index.css'

export default function CustomDrawer(props: IDrawerController & ICustomDrawer) {
    return (
        <Drawer
            open={props.isDrawerOpen}
            direction={props.direction}
            onClose={props.onDrawerClose}>
            {props.children}
            <div className="h-full bg-terciary"></div>
        </Drawer>
    )
}

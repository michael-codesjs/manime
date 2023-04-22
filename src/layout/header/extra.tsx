import { ColorModeSwitcher } from "./components/color-mode-switcher";
import { SideNavigationToggler } from "./components/side-navigation-toggler";

export const Extras = () => (
    <div id="extras" className="flex justify-end space-x-4 p-6">
        <div className="flex space-x-3">
            <ColorModeSwitcher />
            <SideNavigationToggler />
        </div>
    </div>
);
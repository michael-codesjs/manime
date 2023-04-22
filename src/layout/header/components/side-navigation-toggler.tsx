import { navigationIsOpenAtom } from "@data/atoms";
import { AiOutlineMenu } from "react-icons/ai";
import { useSetRecoilState } from "recoil";

export const SideNavigationToggler: React.FC = () => {
    
    const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

    return (
        <button
            aria-label="menu-button"
            onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
            className={`
                w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-gray-800
                dark:text-white dark:border-0 hover:bg-gray-200 dark:hover:bg-gray-700 sm:hidden
            `}
        >
            <AiOutlineMenu />
        </button>
    );
};
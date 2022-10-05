import { Link } from "react-router-dom";
import { paths } from "../../utilities/constants";

type Props = {
  to: string
}

export default function PlusButton(props: Props) {
  const { to } = props;
  return (
    <div className="w-10 h-10 relative flex items-center justify-center">
      {/*TODO: add some fancy glow animation when no alarms are present */}
      <Link
        to={to}
        aria-label="set-alarm"
        className="w-10 h-10 min-w-[40px] z-[2] flex items-center justify-center p-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 dark:white font-medium text-3xl"
      >
        +
      </Link>
    </div>
  );
}


type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Feature(props: FeatureProps) {
  const { icon, title, description } = props;
  return (
    <div className="flex space-x-4">
      <img src={icon} className={"w-20 h-20"} />
      <div className="flex flex-col space-y-1">
        <h2
          className={
            "font-medium text-lg text-gray-800 dark:text-gray-200 capitalize"
          }
        >
          {title}
        </h2>
        <p className="text-[13px] text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

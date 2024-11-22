export enum AlertType {
  ERROR,
  WARNING,
  INFO,
}

const ALERT_PROPERTIES = {
  [AlertType.ERROR]: { title: "Error", color: "red" },
  [AlertType.WARNING]: { title: "Warning", color: "yellow" },
  [AlertType.INFO]: { title: "Info", color: "slate" },
};

export default function Alert({
  children,
  type,
}: {
  children: string;
  type: AlertType;
}) {
  const { title, color } = ALERT_PROPERTIES[type];

  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{title}: </strong>
      <span className="block sm:inline">{children}</span>
    </div>
  );
}

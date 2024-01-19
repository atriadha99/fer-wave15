import { ReactComponent as Checklist } from "assets/icons/checklist.svg";

const List = ({ name_list }) => {
  return (
    <div className="flex items-center gap-2 py-2 font-bold">
      <Checklist className="w-7 text-blue-400" />
      <p>{name_list}</p>
    </div>
  );
};

export default List;

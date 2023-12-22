import { useDrag } from "react-dnd";

const TodosTask = ({ task }) => {
  const {_id, title, description, deadline, priority } = task;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tasks",
    item: {id: _id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
console.log(isDragging);

  return (
    <div ref={drag} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="font-bold">Task requirements :</span> {description}
        </p>
        <div className="flex">
          <p>
            <span className="font-bold">Deadline :</span> {deadline}
          </p>
          <p>
            <span className="font-bold">Priority :</span> {priority}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodosTask;
